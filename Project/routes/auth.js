const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config/keys')
const requireLogin = require('../middleware/requireLogin')
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-mailgun-transport')
//  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
const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:"b2d4af86711d32dcfe4cd16bdb0af658-95f6ca46-e9e56e57"
    }
}))


router.post('/signup',(req,res)=>{
    const {name,email,password}=req.body
    if(!email || !password || !name)
    {
        return res.status(422).json({error:"please add all the fields"})
    } 
    User.findOne({email:email})
    .then ((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"User already exist with this email"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user = new User({
                email,
                password:hashedpassword,
                name
            })
            user.save()
            .then(user=>{
                transporter.sendMail({
                    to:user.email,
                    from:"samarthkumar267@gmail.com",
                    subject:"signup sucess",
                    html:"<h1>Welcome to FoodOnline Sites</h1>"
                })
                res.json({message:"saved successfully"})
            })
            .catch(err=>{
                console.log(err)
            })
        })

    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/signin',(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        return res.status(422).json({error:"please type email or password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser)
        {
           return res.status(422).json({error:"Invalid Email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                // res.json({message:"successfully signed in"})
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                const {_id,name,email} = savedUser
                res.json({token,user:{_id,name,email}})
            }
            else{
                return res.status(422).json({error:"Invalid Email or Password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})

module.exports = router