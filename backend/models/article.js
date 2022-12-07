const mongoose = require("mongoose");
const articleSchema = new mongoose.Schema({
  title: String,
  location: String,
  description: String,
  price: Number,
  image :String,
  added:String,
  role: {
    type: String,
    enum: ["article", "accouplement","accessoire","vaccination","dressage","nourriture","traitement","achat"],
    default: "article",
  },

});
module.exports = mongoose.model("article", articleSchema);