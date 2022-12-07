const { body, validationResult } = require("express-validator");
exports.Validationregister = [
  body("email", "please add a valid email").isEmail(),
  body("password", "your password at least 6 caractes").isLength({ min: 6 }),
];
exports.Validationlogin = [
  body("email", "please add a valid email").isEmail(),
  body("password", "bad credential").isLength({ min: 6 }),
];
exports.ValidationArticles=[
  body("article").isEmpty()
]
exports.Validation = (req, res, next) => {
  const errors = validationResult(req);
  const success=validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  if (!success.isEmpty()) {
    return res.status(400).json({ success: errors.array() });
  }
  next();
}