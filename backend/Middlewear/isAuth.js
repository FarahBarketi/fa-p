const jwt = require("jsonwebtoken");
const users = require("../models/user");
exports.isAuth = async (req, res, next) => {
  const token = req.header("token");
  try {
    const decode = jwt.verify(token, process.env.SecretorKey);
    if (!decode) {
      return res.status(400).send({ msg: "is not authorized" });
    }
    const user = await users.findById(decode.id);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};