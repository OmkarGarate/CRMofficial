const HeadDocs = require('../models/HeadDocuments')

const uploadDoc = async (req, res) => {
    try {
        const { id } = req.params;
        let updateData = '';

        if (req.files) {
            // Assuming files are named doc1, doc2, doc3, doc4
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
        console.error("Error updating head profile:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {uploadDoc}