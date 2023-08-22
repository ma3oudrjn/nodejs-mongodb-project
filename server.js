//const db =require('mongoose')
const express = require('express')
const app=express()

let PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("your online in:",PORT," Port"); 
})




const mongoose = require('mongoose')
const joi=require('joi')
var jwt = require('jsonwebtoken');


const UserSchima=mongoose.Schema({
username: joi
.string()
.min(3)
.max(12)
.required(),

email: joi
.string()
.required(),

password: joi
.string()
.required()
.min(8)
.max(18),

})
const Usermodel = mongoose.model("users",UserSchima)
const newUser= new usermodel(
{
username:"masoud",
email:"test@gmail.com",
password:"i383hs3s3x"
})
newUser.save();


var token = jwt.sign({ pass: username }, privateKey, { algorithm: 'RS256' });
console.log(token)

console.log(Usermodel);






const User = module.exports = mongoose.model('User', UserSchema); 


























db.connect('mongodb+srv://ma3oud:138162@cluster0.irtsiue.mongodb.net/')
.then(()=>{
console.log("Database: connected✅");
}).catch((err)=>{console.log("eror to connect to the data base:",err)
})