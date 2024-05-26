const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');



// ROUTE 1: Get all notes using: POST "/api/auth/getuser". 
router.get('/fetchallusers', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "some error occurd" });
    }
});

// ROUTE 2: Get add new notes using: POST "/api/auth/getuser". 
router.get('/addnote', fetchuser, [
    body('title', "plz Enter valid title").isLength({ min: 3 }),
    body('description', "plz Enter valid title").isLength({ min: 5 })
], async (req, res) => {

    try {
        const { title, description, tag } = req.body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const saveNote = await note.save();

        res.send(saveNote);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "some error occurd" });
    }
});

// ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote". Login required

router.put('/updatenote/:id', fetchuser, async (req, res) => {

    // create new notes
    const newNote = {};

    const { title, description, tag } = req.body
    try {


        if (title) { newNote.title = title }
        if (description) { newNote.description = title }
        if (tag) { newNote.tag = title }

        // find user to be updated and update it

        let note = await Note.findById(req.params.id);

        if (!note) { res.status(404).send("Not Found") };

        if (note.user.toString() !== req.user.id) {
            res.status(401).send("Not Allowed")
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note })

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "some error occurd" });
    }
})
// ROUTE 4: Update an existing Note using: PUT "/api/notes/updatenote". Login required

router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    try {


        // find user to be deleted and delete it
        let note = await Note.findById(req.params.id);
        if (!note) { res.status(404).send("Not Found") };

        // user is valid user
        if (note.user.toString() !== req.user.id) {
            res.status(401).send("Not Allowed")
        }

        note = await Note.findByIdAndDelete(req.params.id, { new: true })
        res.json({ Success: "Note has been deleted", note: note })

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "some error occurd" });
    }
})

module.exports = router