const express = require("express");
const { filteredWords, blockedDomains } = require("../Memory");

const router = express.Router();

// Add filtered word
router.post("/add-word", (req, res) => {
  const { word } = req.body;
  if (!word) return res.status(400).send({ message: "No word provided" });

  filteredWords.add(word.toLowerCase());
  res.send({ message: "Word added successfully", filteredWords: [...filteredWords] });
});

// Remove filtered word
router.post("/remove-word", (req, res) => {
  const { word } = req.body;
  if (!word) return res.status(400).send({ message: "No word provided" });

  filteredWords.delete(word.toLowerCase());
  res.send({ message: "Word removed successfully", filteredWords: [...filteredWords] });
});

// Add blocked domain
router.post("/add-domain", (req, res) => {
  const { domain } = req.body;
  if (!domain) return res.status(400).send({ message: "No domain provided" });

  blockedDomains.add(domain.toLowerCase());
  res.send({ message: "Domain added successfully", blockedDomains: [...blockedDomains] });
});

// Remove blocked domain
router.post("/remove-domain", (req, res) => {
  const { domain } = req.body;
  if (!domain) return res.status(400).send({ message: "No domain provided" });

  blockedDomains.delete(domain.toLowerCase());
  res.send({ message: "Domain removed successfully", blockedDomains: [...blockedDomains] });
});

module.exports = router;
