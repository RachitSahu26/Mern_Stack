import express from 'express';
const router = express.Router();
import NotesSchema from "../Model/Notes.js"




router.get('/getAllNotes', (req, res) => {

    try {

        NotesSchema.findOne({ user: req.user })

        res.json(NotesSchema);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }





})













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