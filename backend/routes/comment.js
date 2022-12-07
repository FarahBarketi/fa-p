const express = require("express");

const { Addcomment, Getcomments, Deletecomments, Updatecomments } = require("../controlles/Comment");

const commentRoutes = express.Router();

commentRoutes.post("/add/:id", Addcomment);
commentRoutes.get("/get", Getcomments);
commentRoutes.delete("/del/:id", Deletecomments);
commentRoutes.put("/put/:id", Updatecomments);

module.exports = commentRoutes;