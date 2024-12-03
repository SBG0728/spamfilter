const { simpleParser } = require("mailparser");

/**
 * Parses a MIME email buffer into structured data.
 * @param {Buffer} buffer - MIME email buffer.
 * @returns {Promise<Object>} Parsed email data.
 */
const parseEmail = async (buffer) => {
  try {
    const email = await simpleParser(buffer);
    const { subject, from, date, text } = email;
    const sender = from.value[0].address;

    return {
      subject: subject || "No Subject",
      sender,
      date: date || new Date().toISOString(),
      text: text || "",
    };
  } catch (error) {
    console.error("Error parsing email:", error);
    throw new Error("Failed to parse email");
  }
};

module.exports = { parseEmail };
