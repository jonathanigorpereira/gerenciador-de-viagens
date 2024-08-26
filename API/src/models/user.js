const Sequelize = require("sequelize");
const database = require("../config/db");

const User = database.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isActive: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    tableName: "user", // Certifique-se de que o nome está correto
    freezeTableName: true, // Não permite pluralização automática
    timestamps: false, // Garante que o Sequelize gerencie createdAt
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

module.exports = User;
