const articles = require("../models/article");
exports.updateArticleImage=async(req,res)=>{
 
  try {
  await articles.findByIdAndUpdate(req.params.id,{$set:{image:req.file.filename}})
     res.status(200).send("image added") 
  } catch (error) {
     res.status(500).send('servor error') 
  }
}


exports.Addarticle = async (req, res) => {
 
  
  try {
    const article = new articles(req.body);
    await article.save();
    res.status(200).send({ success:[{msg: "new article"}], article });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "could not add article" }] });
  }
}

exports.Getarticles = async (req, res) => {
  try {
    const article = await articles.find()
    res.status(200).send({ msg: "our articles", article });
  } catch (s) {
    res.status(500).send({ errors: [{ msg: "could not get articles" }] });
  }
};
exports.Deletearticles = async (req, res) => {
  try {
    await articles.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "articles deleted" });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "could not delete article" }] });
  }
};
exports.Updatearticles = async (req, res) => {
  try {
    const article = await articles.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send({ msg: "articles updated", article });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "could not update article" }] });
  }
}


