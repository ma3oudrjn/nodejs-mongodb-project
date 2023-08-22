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