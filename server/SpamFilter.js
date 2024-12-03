const { filteredWords, blockedDomains } = require("./Memory");

/**
 * Checks if text contains at least N filtered words.
 * @param {string} text - The text to check.
 * @param {number} minCount - Minimum number of matches to be considered spam.
 * @returns {boolean} True if text contains enough filtered words.
 */
const containsFilteredWords = (text, minCount = 3) => {
  const words = text.split(/\s+/);
  let count = 0;

  for (const word of words) {
    if (filteredWords.has(word.toLowerCase())) {
      count++;
      if (count >= minCount) return true;
    }
  }
  return false;
};

/**
 * Checks if the sender's domain is blocked.
 * @param {string} email - The email address of the sender.
 * @returns {boolean} True if the domain is blocked.
 */
const isDomainBlocked = (email) => {
  const domain = email.split("@")[1];
  return blockedDomains.has(domain);
};

/**
 * Runs spam filtering logic on parsed email data.
 * @param {Object} emailData - Parsed email data.
 * @returns {boolean} True if the email is spam.
 */
const filterEmail = (emailData) => {
  const { subject, text, sender } = emailData;

  if (containsFilteredWords(text)) return true;
  if (containsFilteredWords(subject)) return true;
  if (isDomainBlocked(sender)) return true;

  return false;
};

module.exports = { filterEmail };
