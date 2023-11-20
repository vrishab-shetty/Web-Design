const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller")


// Get All users
router.get("/getAll", controller.getAllUser);

// Create a user
router.post("/create", controller.createUser);

// Update a user
router.put("/edit", controller.updateUser);

// Delete a users
router.delete("/delete/:email", controller.deleteUser);

// Login
router.post("/login", controller.login);



module.exports = router;
