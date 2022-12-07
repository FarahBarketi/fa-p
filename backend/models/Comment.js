const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
  date:Date,
  body: String,
  articleId: {type:mongoose.Schema.Types.ObjectId, ref:"article"}
});
module.exports = mongoose.model("comment", commentSchema);