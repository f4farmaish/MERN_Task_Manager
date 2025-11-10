import mongoose from "mongoose";    

mongoose.connect("mongodb://localhost:27017/userdb")
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });



const User = mongoose.model("User", userSchema);



export default User;