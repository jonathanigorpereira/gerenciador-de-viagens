const crypto = require("crypto");

/**
 * Criptografa uma senha usando SHA-256.
 * @param {string} password - A senha a ser criptografada.
 * @returns {string} - A senha criptografada em formato hexadecimal.
 */
function hashPassword(password) {
  const hash = crypto.createHash("sha256");
  hash.update(password);
  return hash.digest("hex");
}

module.exports = {
  hashPassword,
};
