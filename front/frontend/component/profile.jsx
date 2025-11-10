import React, { useState, useEffect } from "react";
import { FaUserCircle, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ you forgot this import

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [tasks, setTasks] = useState([
    { id: 1, text: "Finish homework" },
    { id: 2, text: "Write React project" },
    { id: 3, text: "Go shopping" },
  ]);

  useEffect(() => {
    const existing = localStorage.getItem("user");

    if (existing) {
      try {
        setUser(JSON.parse(existing));
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
        navigate("/login");
      }
    } else {
      alert("Please login first");
      navigate("/login");
    }
  }, [navigate]); // ✅ added navigate in dependency array

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Profile Header */}
        <div className="flex items-center gap-4 mb-6">
          {user.image ? (
            <img
              src={user.image}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
          ) : (
            <FaUserCircle className="w-20 h-20 text-gray-400" />
          )}

          <div>
            <h2 className="text-2xl font-bold">
              {user.username || "Guest User"}
            </h2>
            <p className="text-gray-600">
              {user.email || "No email available"}
            </p>
          </div>
        </div>

        {/* Tasks Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Your Tasks</h3>
          {tasks.length === 0 ? (
            <p className="text-gray-500">You have no tasks yet.</p>
          ) : (
            <div className="space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex justify-between items-center bg-gray-50 border rounded-lg px-4 py-2"
                >
                  <span>{task.text}</span>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
