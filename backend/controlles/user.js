const users = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.updateUserImage = async (req, res) => {
  try {
    await users.findByIdAndUpdate(req.user.id, {
      $set: { image: req.file.filename },
    });
    res.status(200).send("image uploded");
  } catch (error) {
    res.status(500).send("servor error");
  }
};
exports.Getusers = async (req, res) => {
  try {
    const userss= await users.find();
    res.status(200).send({ msg: "list of users", userss});
  } catch (error) {
    res.status(500).send("couldn't get users");
  }
};
exports.Register = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const found = await users.findOne({ email });
    const type = await users.findOne({ role });
    if (found) {
      return res.status(400).send({ errors: [{ msg: "user already existe" }] });
    } else if (!role) {
      return res.status(400).send({ errors: [{ msg: "pick your role" }] });
    } else {
      const user = new users(req.body);
      const salt = 10;
      const hash = bcrypt.hashSync(password, salt);
      user.password = hash;
      const payload = { id: user._id };
      const token = jwt.sign(payload, process.env.SecretorKey);

      await user.save();

      res.status(200).send({ msg: "user added", user, token });
    }
  } catch (error) {
    res.status(500).send({ error: "could not add user" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await users.findOne({ email });
    if (!user) {
      return res.status(400).send({ errors: [{ msg: "user not Found" }] });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).send({ errors: [{ msg: "bad credential" }] });
    }
    const payload = { id: user._id };
    const token = jwt.sign(payload, process.env.SecretorKey);
    res.status(200).send({ msg: "welcome back", user, token });
  } catch (error) {
    res.status(500).send({ error: [{ msg: "could not logging" }] });
  }
};
exports.Deletearticles = async (req, res) => {
  try {
    const deleted = await articles.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "articles deleted" });
  } catch (error) {
    res.status(500).send({ msg: "cannot delete articles" });
  }
};
exports.Deleteuser= async(req, res) =>{
    
  try
  {const deleted= await users.findByIdAndDelete(req.params.id)
     
  res.status(200).send({msg:"usser deleted",deleted})
  
 
  }
  catch (error) {
      res.status(500).send("couldnt delete user")
  
  }}
 
    exports.Deleteuser= async(req, res) =>{
      const { name  } = req.body;
      try
      {const deleted= await users.findByIdAndDelete(req.params.id)
         
      res.status(200).send({msg:"usser deleted",deleted})
      
     
      }
      catch (error) {
          res.status(500).send("couldnt delete user")
      
      }}
   exports.Deleteuser= async(req, res) =>{
      
      try
      {const deleted= await users.findByIdAndDelete(req.params.id)
         
      res.status(200).send({msg:"usser deleted",deleted})
      
     
      }
      catch (error) {
          res.status(500).send("couldnt delete user")
      
      }}
      exports.EditU=async(req, res) =>{
        try
        {const updated= await users.findByIdAndUpdate(req.params.id,{$set:req.body,},{new:true});
            
           
        res.status(200).send({msg:"user updated",updated})
        
        
        }
        catch (error) {
            res.status(200).send("couldnt update user")
        
        }}
      exports.EditUser=async(req, res) =>{
        try
          {const updated= await users.findByIdAndUpdate(req.params.id,{$set:req.body,},{new:true});
              
             
          res.status(200).send({msg:"user updated",updated})
          
          
          }
          catch (error) {
              res.status(200).send("couldnt update user")
          
          }}
          exports.Finduserbyid= async(req, res) =>{
       
            try
            {const fu= await users.findById(req.params.id)
               
            res.status(200).send({msg:"user found",fu})
            
           
            }
            catch (error) {
                res.status(500).send("couldnt found user")
            
            }}
            exports.Addusers=async (req, res) =>{
              try
              {const newu= new users(req.body);
                 await newu.save();
              res.status(200).send({msg:"user added",newu})
              
              
              }
              catch (error) {
                  res.status(200).send("user cannot be added")
              
              }}