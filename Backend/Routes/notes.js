import express from 'express';
const router = express.Router();
import NotesSchema from "../Model/Notes.js"



// ......................get all notes..........

//* ROUTE 1: Get All the Notes using: GET "/api/notes/fetchallnotes". Login required
router.get('/fetchallnotes', async (req, res) => {
    try {
        // Assuming that you have a user ID in the token, and you want to find notes for that user
        const userId = req.header("auth-token");

        // Fetch all notes for the specified user
        const notes = await NotesSchema.find({ user: userId });
        
        res.json(notes);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});







//* ROUTE 2: Add new Note using: POST "/api/notes/addnote". Login required
router.post('/addnote', async (req, res) => {
    try {
        //* data comimg from body(frontend)
        const { title, description, tag } = req.body

        //* validation 
        if (!title || !description || !tag) {
            return res.status(400).json({ error: "All fields are required" });
        }

        //* Notes
        const notes = new NotesSchema(
            {
                title,
                description,
                tag,
            });

        //* saving notes
        const savedNote = await notes.save();
        res.json(savedNote);

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})










export default router