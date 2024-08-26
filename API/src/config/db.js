const Sequelize = require("sequelize");
require("dotenv").config();

// Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
//   date = this._applyTimezone(date, options);

//   return date.format("DD-MM-YYYY HH:mm:ss Z");
// };

const database = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
  }
);

// database
//   .query("SET time_zone = '-03:00';")
//   .then(() => console.log("Timezone set to -03:00"))
//   .catch((err) => console.error("Error setting timezone:", err));

module.exports = database;
