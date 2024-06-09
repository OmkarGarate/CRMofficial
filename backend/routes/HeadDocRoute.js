const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const HeadDocs = require('../models/HeadDocuments');

// Set up storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './HeadDocuments');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

const uploadMultiple = upload.fields([
    { name: 'doc1', maxCount: 1 },
    { name: 'doc2', maxCount: 1 },
    { name: 'doc3', maxCount: 1 },
    { name: 'doc4', maxCount: 1 }
]);

// Create
router.post('/uploadHeadDocs/:id', uploadMultiple, async (req, res) => {
    try {
        const { id } = req.params;

        // Prepare the update object
        const update = {
            doc1: req.files.doc1 && req.files.doc1[0].filename ,
            doc2: req.files.doc2 && req.files.doc2[0].filename ,
            doc3: req.files.doc3 && req.files.doc3[0].filename ,
            doc4: req.files.doc4 && req.files.doc4[0].filename 
        };

        // Find the document by userId and update it, or create a new one if it doesn't exist
        const headDocs = await HeadDocs.findOneAndUpdate(
            { userId: id },  // Search query
            update,         // Update data
            { new: true, upsert: true } // Options: return the updated document, and create if not found
        );

        res.status(200).json(headDocs);
    } catch (error) {
        console.error("Error creating or updating head documents:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


// Read
router.get('/getAllHeadDocs', async (req, res) => {
    try {
        const headDocs = await HeadDocs.find({}).sort({createdAt: -1})
        if (!headDocs) {
            return res.status(404).json({ error: "Head documents not found" });
        }
        res.json(headDocs);
    } catch (error) {
        console.error("Error fetching head documents:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Update
router.patch('/updateHeadDocs/:id', uploadMultiple, async (req, res) => {
    try {
        const { id } = req.params;
        let updateData = { ...req.body };

        if (req.files) {
            if (req.files.doc1) updateData.doc1 = req.files.doc1[0].filename;
            if (req.files.doc2) updateData.doc2 = req.files.doc2[0].filename;
            if (req.files.doc3) updateData.doc3 = req.files.doc3[0].filename;
            if (req.files.doc4) updateData.doc4 = req.files.doc4[0].filename;
        }

        const headDocs = await HeadDocs.findOneAndUpdate({ _id: id }, updateData, { new: true });

        if (!headDocs) {
            return res.status(404).json({ error: "No such Head" });
        }

        res.status(200).json(headDocs);
    } catch (error) {
        console.error("Error updating head documents:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Delete
router.delete('/deleteDocs/:id', async (req, res) => {
    try {
        const deletedHeadDocs = await HeadDocs.findByIdAndDelete(req.params.id);
        if (!deletedHeadDocs) {
            return res.status(404).json({ error: "Head documents not found" });
        }
        res.json({ message: "Head documents deleted successfully" });
    } catch (error) {
        console.error("Error deleting head documents:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
