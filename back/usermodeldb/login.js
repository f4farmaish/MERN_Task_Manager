import User from "./user.js";
import express from "express";
import bcrypt from "bcryptjs";      
import jwt from "jsonwebtoken"; 

const login_router = express.Router();    

login_router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        if(!email || !password) return res.status(400).json({ message: "All fields are required" });

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid email or password" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

        const token = jwt.sign({ email: user.email, name:user.username }, 'fah', { expiresIn: '1h' });
        return res.status(200).json({ message: "Login successful", token ,user});

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Server error" });
    }   
});

export default login_router;
