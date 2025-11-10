// import React, { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export const Usercontext = createContext();

// export const Provider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setUser({ name: "Demo User", email: "ali@gmail.com" });
//     } else {
//       alert("Please login first");
//       navigate("/login");
//     }
//   }, [navigate]);

//   return (
//     <Usercontext.Provider value={user}>
//       {user ? children : null} {/* or a loader */}
//     </Usercontext.Provider>
//   );
// };
