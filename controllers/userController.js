const asyncHandler = require("express-async-handler");
const userStorage = require("../storages/userStorage");
const {body, validationResult} = require("express-validator");
const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";

//array of middleware functions
//to use express-validator correctly good idea to make sure body is parsed in json
const validateUser = [
    //accesses first name field in the request body
    body("firstName").trim()
        .isAlpha().withMessage(`First name ${alphaErr}`)
        .isLength({ min:1, max: 10}).withMessage(`First name ${lengthErr}`),
    body("lastName").trim()
        .isAlpha().withMessage(`Last name ${alphaErr}`)
        .isLength({min: 1, max: 10}).withMessage(`Last name ${lengthErr}`),
];

exports.userCreateGet = asyncHandler(async(req,res) =>{

    res.render("users", {title: "User List", users: userStorage.getUsers(),});


});

exports.userCreatePost = [
    validateUser,
    asyncHandler(async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).render("users", {
          title: "User List",
          errors: errors.array(),
        });
      }
      const { firstName, lastName } = req.body;
      //equivalent to const firstName = req.body.firstName;
    //const lastName = req.body.lastName;

      userStorage.addUser({firstName, lastName});
      res.redirect("/");
    })
  ];

  exports.userUpdateGet = asyncHandler(async (req, res) => {
    const user = userStorage.getUser(req.params.id);
    res.render("update", { user, errors: [] });
  });
  
  exports.userUpdatePost = [
    validateUser,
    asyncHandler(async (req, res) => {
      const user = userStorage.getUser(req.params.id);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).render("update", {
          errors: errors.array(),
          user: user, 
        });
      }
      const { firstName, lastName } = req.body;
      userStorage.updateUser(req.params.id, {firstName, lastName});
      res.redirect("/");
    })
  ];