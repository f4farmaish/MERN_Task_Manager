import React from "react";
import Headers from "../component/header.jsx";
import { Routes ,Route} from "react-router-dom";
import Login from "../component/login.jsx";
import Signup from "../component/signup.jsx";
import Profile from "../component/profile.jsx";
import Home from "../component/home.jsx";
import Post from "../component/post.jsx";
import { useState , useEffect} from "react";


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return(<>
  
<Headers isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  <Routes>

  <Route path = "/login" element ={<Login/>}/>
  <Route path = "/signup" element ={<Signup/>}/>
  <Route path = "/profile" element ={<Profile/>}/>
  <Route path = "/" element ={<Home/>}/>
  <Route path = "/write-post" element ={<Post/>}/>
  </Routes>
  
  </>
)}