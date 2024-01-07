

// ...................................................

// index.js
import connectToMongo from "./DataBase/db.js";
import express from 'express';
import cors from 'cors';
import auth from "./Routes/auth.js";
import notes from "./Routes/notes.js";

const app = express();
const port = 3001;

// Connect to MongoDB
connectToMongo();

// Enable CORS middleware before defining routes
app.use(cors());
app.use(express.json());

// Define routes
app.get("/", (req, res) => {
    res.send("rachit  sdadsadadasdadsahu");
});

// Corrected route
app.use("/api/auth", auth);
app.use("/api/notes", notes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
