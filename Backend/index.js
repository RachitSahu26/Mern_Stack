// index.js
import connectToMongo from "./DataBase/db.js";
import express from 'express';
import auth from "./Routes/auth.js"
import cors from "cors"

import notes from "./Routes/notes.js"
const app = express();
const port = 3001;

// Connect to MongoDB
connectToMongo();




// ......middlewhere...
app.use(express.json())

// routes 
app.get("/", (req, res) => {
    res.send("rachit  sdadsadadasdadsahu");
});

// Corrected route
app.use("/api/auth",auth);
app.use("/api/notes",notes);
app.use(cors());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
