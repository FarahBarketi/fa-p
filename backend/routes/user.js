const express = require("express");
const { Register, login, updateUserImage,Getusers,Addusers,Deleteuser,EditUser,Finduserbyid,EditU } = require("../controlles/user");
const { isAuth } = require("../Middlewear/isAuth");
const upload = require("../Middlewear/upload");
const {
  Validationregister,
  Validation,
  Validationlogin,
} = require("../Middlewear/validation");
const userRoutes = express.Router();

//update image profile
userRoutes.put("/uploadimage", isAuth, upload.single("image"), updateUserImage);

userRoutes.post("/register", Validationregister, Validation, Register);
userRoutes.post("/login", Validationlogin, Validation, login);
userRoutes.get("/current", isAuth, (req, res) => {
  res.send(req.user);
});
userRoutes.get("/all",Getusers)
userRoutes.post("/Add",Addusers)
userRoutes.delete("/del/:id", Deleteuser);
userRoutes.put("/edit/:id", EditUser);
userRoutes.get("/find/:id", Finduserbyid);
userRoutes.put("/editu/:id", EditU);
module.exports = userRoutes;
