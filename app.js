const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routes/userRouter');
const userStorage = require("./storages/userStorage")

const PORT = 3000  || 2000;

//templating Engine
app.set('view engine', "ejs");


//middleware
app.use(express.urlencoded({extended:true}));//body parser

//routes
app.use('/users', userRouter);

//index route
app.get("/",(req, res) =>{

res.render("index", {

    title: "User List",
    users: userStorage.getUsers(),

});

});

app.listen(PORT,()=> {


    console.log(`Server is listening on port ${PORT}`);
});