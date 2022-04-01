const express = require("express");
const { router } = require("..");

const User = require("./models/user.models")

const app = express.Router();

router.get("", async(req, res) => {
    try{
        
        const user = await User.find().lean().exec();
        return res.status(200).send(user);

    }catch(err){
      return res.status(500).send({message: err.message})
    }
  })

router.post("", uploads.single("profile_pic") ,async(req, res) => {

  try{
    const user = await User.create({    
    firstName: req.body.firstName,
   profile_pic: req.filePath,
  });
  return res.status(200).send("users");

  }catch(err){
  return res.status(500).send({message: err.message})
}
});

//this is for if you want upload multiple file together.. in this case remove above function
// router.post("/multiple", uploads.array("profile_pic", 5) ,async(req, res) => {

//   try{
        
//   return res.status(200).send("users");

// }catch(err){
//   return res.status(500).send({message: err.message})
// }
// });


router.post("/multiple", ("profile_pic", Multiple) ,async(req, res) => {

  try{
      const filePaths = req. files.map((file)=>{

      } ) 
     return file.path;

}catch(err){
  return res.status(500).send({message: err.message})
}
});

