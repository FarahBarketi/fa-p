const { isAuth } = require("../Middlewear/isAuth");
const comments = require("../models/Comment");

exports.Addcomment = async (req, res) => {
  try {
    const comment= new comments({...req.body,articleId:req.params.id });
    await comment.save();
    res.status(200).send({ msg: "new comment", comment });
  } catch (error) {
    res.status(500).send({ msg: "couldn't add  comment" });
  }
}
exports.Getcomments = async (req, res) => {

  try {
    const comment = await comments.find().populate('articleId')
    res.status(200).send({ msg: "our comments", comment });
  } catch (error) {
    res.status(500).send({ msg: "could not get comments" });
  }
};
exports.Deletecomments = async (req, res) => {
  try {
    await comments.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "comments deleted" });
  } catch (error) {
    res.status(500).send({ msg: "cannot delete comments" });
  }
};
exports.Updatecomments = async (req, res) => {
  try {
    const comment = await comments.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send({ msg: "comments updated", comment });
  } catch (error) {
    res.status(500).send({ msg: "could not update comments" });
  }
};
