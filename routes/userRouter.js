const express = require('express');
const userController = require("../controllers/userController")
const userRouter = express.Router();

//creating users
userRouter.get("/create", userController.userCreateGet);
userRouter.post("/create", userController.userCreatePost);

//updating users
userRouter.get("/:id/update", userController.userUpdateGet);

userRouter.post("/:id/update", userController.userUpdatePost);
module.exports = userRouter;