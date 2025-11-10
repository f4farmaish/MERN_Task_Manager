import User from "./user.js";
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; 
const signup_router = express.Router();
 signup_router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body; 
    try {  if(!username || !email || !password){

        console.log("Missing fields:", { username, email, password });  
      return res.status(400).json({ message: "All fields are required" });
    }  else 
    {
 const userexist=await User.findOne({ email: email })
 if(userexist){


    console.log("User already exists with email:", userexist.email);


    return res.status(400).json({ message: "User already exists" });
 }
 else{
    console.log("Creating user:", { username, email });
    const hashpassword=await bcrypt.hash(password,10);


console.log("Hashed password:", hashpassword)

    jwt.sign({ email: email }, 'fah', (err, token) => {
      if (err) {
        console.error('Error generating token:', err);
        return res.status(500).json({ message: "Error generating token" });
      }  else {
        console.log('Generated token:', token);
      }
    });


    const newuser=new User({
        username,
        email,
        password:hashpassword
    });
    await newuser.save();
    res.status(201).json({ message: "User created successfully" });
 }
    }
}
catch (error) {
    res.status(500).json({ message: "Server error" });
  }

})
export default signup_router;