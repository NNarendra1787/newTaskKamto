require('dotenv').config();
const bcrypt = require("bcryptjs");
const saltRound =  10;
const jwt = require("jsonwebtoken");
const Users = require('../Schema/userSchema');

const RegisterUsers = async(req, res)=>{
  try{
    const RgData = req.body;
    const {name, contact, email, password, userId} = RgData;
    const userData = await Users.findOne({email: email});

    if(userData){
      return res.send({msg: "User Already Existed 😊😍😍😃"})
    }
    else{
      const salt = bcrypt.genSaltSync(saltRound);
      const hashPassword = bcrypt.hashSync(password, salt);
      const token = await jwt.sign({Data: userData}, process.env.SecreatKey,{expiresIn: "5m"})

      const DetailsObj = await Users({
        name: name,
        contact: contact,
        email: email,
        password: hashPassword,
      });

      const result = await DetailsObj.save();

      return res.send({
        msg: "User Register Successfully 🥳🥳😍🥳🥳",
        userId: result._id,
        token: token,
        name: name,
        email: email,
        contact: contact,
        result: result,
      });
    }
  }
  catch(err){
    console.log(err);
  }
}

const LoginUser = async(req, res)=>{
  try{
    const LogUser = req.body;
    const {email, password} = LogUser;
    const userData = await Users.findOne({email: email})

    if(userData){
      const hashPassword = userData.password;
      const validate = bcrypt.compareSync(password, hashPassword);
      const token = jwt.sign({email: email}, process.env.SecreatKey, {expiresIn: '24h'})

      if(validate){
        return res.send({
          msg: "User Login SuccessFully 😃😍🥳🙋‍♂️",
          token: token,
          userData: userData,
        })
      }else{
        return res.send({
          msg: "Invalid Credential 😔😔😔"
        })
      }
    }
    if(!userData){
      return res.send({
        msg: "User not registed please register first 🙋‍♂️🙋‍♀️🚀"
      })
    }
  }
  catch(err){
    console.log(err);
  }
}


module.exports = {
  RegisterUsers,
  LoginUser
}