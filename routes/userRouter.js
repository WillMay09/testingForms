const express = require('express');
const userController = require("./controllers/userController")
const userRouter = express.Router();

userRouter.get("/create", userController.userCreateGet);
userRouter.post("/create", userController.userCreatePost);


module.exports = userRouter;