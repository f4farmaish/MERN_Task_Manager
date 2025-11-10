import express from 'express';
import User from './user.js';
import Post from './post.js';
const createpost_router= express.Router();

createpost_router.post('/create-post', async (req, res) => {    
    const { content, userid } = req.body;
    try {
        if (!content || !userid) {
            return res.status(400).json({ message: "Content and UserID are required" });
        }
        const user = await User.findById(userid);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const newPost = new Post({ content, userid });
        const savedPost = await newPost.save();     
        user.posts.push(savedPost._id);
        await user.save();
        return res.status(201).json({ message: "Post created successfully", post: savedPost });
    } catch (error) {
        console.error("Error creating post:", error);
        return res.status(500).json({ message: "Server error" });
    }   
});

export default createpost_router;