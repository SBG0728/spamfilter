const express = require("express");
const multer = require("multer");
const { parseEmail } = require("../EmailParser");
const { filterEmail } = require("../SpamFilter");

const router = express.Router();
const upload = multer();

// Upload and filter email
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send({ message: "No file uploaded" });
    }

    const emailData = await parseEmail(req.file.buffer);
    const isSpam = filterEmail(emailData);

    res.send({
      title: emailData.subject,
      sender: emailData.sender,
      time: emailData.date,
      isSpam,
    });
  } catch (error) {
    console.error("Error processing email:", error);
    res.status(500).send({ message: "Error processing email" });
  }
});

module.exports = router;
