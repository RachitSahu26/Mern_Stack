import express from 'express';
const router = express.Router();
import NotesSchema from "../Model/Notes.js"
import fetchUser from "../MidWare/FetchUserData.js"


// ......................get all notes..........

//* ROUTE 1: Get All the Notes using: GET "/api/notes/fetchallnotes". Login required
router.get('/fetchallnotes', async (req, res) => {
    try {

        // Fetch all notes for the specified user
        const notes = await NotesSchema.find({ user: req.userId });

        res.json(notes);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});







//* ROUTE 2: Add new Note using: POST "/api/notes/addnote". Login required
router.post('/addnote', fetchUser, async (req, res) => {
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



//* ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote". Login required
router.put('/updatenote/:id', fetchUser, async (req, res) => {
    //* data comimg from body(frontend)
    const { title, description, tag } = req.body;
    const { id } = req.params;

    try {
        //* Find the note to be updated and update it
        const note = await NotesSchema.findById({ _id: id })

        //* validation
        if (!note) {
            return res.status(404).send("Not Found")
        }

        if (note.user.toString() !== req.userId) {
            return res.status(401).send("Not Allowed");
        }

        console.log(note);

        //* Note Update 
        const notes = await NotesSchema.findByIdAndUpdate({ _id: id }, {
            $set: {
                title,
                description,
                tag
            }
        }, { new: true })

        res.json({ notes, success: "Notes Updated Successfully" })

    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error");
    }
})












//* ROUTE 4: delete an existing Note using: PUT "/api/notes/delete". Login required
router.delete('/deletenote/:id', fetchUser, async (req, res) => {
    try {
        const note = await NotesSchema.findById(req.params.id);

        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }

        if (note.user.toString() !== req.userId) {
            return res.status(401).json({ error: "Not allowed" });
        }

        await NotesSchema.findByIdAndDelete(req.params.id);
        res.json({ success: "Note has been deleted" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


export default router