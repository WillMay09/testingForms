const asyncHandler = require("express-async-handler");
const usersStorage = require("../storages/userStorage");

exports.userCreateGet = asyncHandler(async(req,res) =>{

    res.render("users", {title: "User List", users: userStorage.getUsers(),});


});

exports.usersCreatePost = asyncHandler(async(req, res) =>{

    const{ firstName, lastName} = req.body;
    usersStorage.addUser({firstName, lastName});
    res.redirect("/");


});