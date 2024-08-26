const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/GetAllUsers", userController.findAll);
// Route to create a new todo
router.post("/Register", userController.addUser);

module.exports = router;
