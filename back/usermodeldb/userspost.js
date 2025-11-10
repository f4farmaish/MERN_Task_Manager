import express from "express";
import User from "./user.js";
import Post from "./post.js";

const router = express.Router();

// ✅ Get all posts of a user
router.get("/user_posts/:userid", async (req, res) => {
  try {
    const { userid } = req.params;

    // Directly query posts by userid
    const posts = await Post.find({ userid }).sort({ createdAt: -1 });
   console.log("Fetched posts for user:", userid, posts);
    return res.status(200).json({ posts }); // return posts array
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});


// ✅ Create a new post
router.post("/add", async (req, res) => {
  try {
    const { userId, content } = req.body;
    if (!userId || !content) {
      return res.status(400).json({ message: "User ID and content are required" });
    }

    const post = new Post({ content, userid: userId });
    const savedPost = await post.save();

    // Add post ID to user's posts array
    await User.findByIdAndUpdate(userId, { $push: { posts: savedPost._id } });

    res.status(201).json({ message: "Post created", post: savedPost });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});






// Toggle completed
router.put("/toggle/:postId", async (req, res) => {
  try {
    const { postId } = req.params;

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.iscompleted = !post.iscompleted;
    const updatedPost = await post.save();

    res.status(200).json({ message: "Post updated", post: updatedPost });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});



// Delete a post
router.delete("/delete/:postId", async (req, res) => {
  try {
    const { postId } = req.params;

    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) return res.status(404).json({ message: "Post not found" });

    res.status(200).json({ message: "Post deleted", postId: deletedPost._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});



export default router;




