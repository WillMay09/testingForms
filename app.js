const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routes/userRouter');

const PORT = 3000;

//templating Engine
app.set('view engine', "ejs");


//middleware
app.use(express.urlencoded({extended:true}));

//routes
app.use('/users', userRouter);


app.get("/",(req, res) =>{

res.render("index", {

    title: "User List",
    users: userStorage.getUsers(),

});

});

app.listen(PORT,()=> {


    console.log(`Server is listening on port ${PORT}`);
});