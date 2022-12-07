const express = require("express");
const {
  Addarticle,
  Getarticles,
  Deletearticles,
  Updatearticles,
  updateArticleImage,
} = require("../controlles/article");
const { isAuth } = require('../Middlewear/isAuth');
const upload = require ("../Middlewear/upload");
const articleRoute = express.Router();
//update image article
articleRoute.put('/uploadimage',isAuth,upload.single('image'),updateArticleImage)

articleRoute.post("/add", Addarticle);
articleRoute.get("/get", Getarticles);
articleRoute.delete("/del/:id", Deletearticles);
articleRoute.put("/put/:id", Updatearticles);

articleRoute.get("/currentarticle", isAuth, (req, res) => {
  res.send(req.article);
});

module.exports = articleRoute;