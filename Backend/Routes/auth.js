import express from 'express';
import User from '../Model/User.js';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import fetchUser from "../MidWare/FetchUserData.js"
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();

// Middleware for parsing JSON
router.use(express.json());

// ROUTE 1: Create a User using POST "/api/auth/signup". 
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Validation
        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Email Validation
        if (!email.includes("@")) {
            return res.status(400).json({ error: "Please enter a valid email" });
        }

        // Find Unique User with email
        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Generate hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save Data into the database
        const newUser = await User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();
        console.log(newUser);
        res.status(201).json({ success: "Signup Successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 2: Login a User using POST "/api/auth/login". No login required
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Validation
        if (!email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Email Validation
        if (!email.includes("@")) {
            return res.status(400).json({ error: "Please enter a valid email" });
        }

        // Find Unique User with email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Matching user password to hash password with bcrypt.compare()
        const doMatch = await bcrypt.compare(password, user.password);

        if (doMatch) {
            // Generate token
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
                expiresIn: '7d'
            });

            res.status(201).json({ token });
        } else {
            res.status(401).json({ error: 'Email and password do not match' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});











//* ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser',fetchUser, async (req, res) => {
    try {
        const userId =req.userId
        console.log("getuser Id", userId)
        const user = await User.findById(userId).select("-password")
        res.send(user)
        console.log("getuser", user)
    }
     catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error");
    }
})



export default router;

