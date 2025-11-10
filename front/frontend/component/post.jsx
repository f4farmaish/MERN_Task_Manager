import React, { useEffect, useState } from "react";
import { FaTrash, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [text, setText] = useState("");
  const [userposts, setUserposts] = useState([]);
  const navigate = useNavigate();

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // ✅ Fetch posts from backend
  const fetchPosts = async () => {
    try {
      if (!user || !user._id) return navigate("/login"); ;

      const res = await fetch(`http://localhost:7575/user_posts/${user._id}`);
      const data = await res.json();
      if (res.ok && data.posts) setUserposts(data.posts);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // ✅ Add new post
  const submitTask = async () => {
    if (!text.trim()) return alert("Please enter a valid task");

    try {
      const res = await fetch("http://localhost:7575/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user._id, content: text }),
      });

      const data = await res.json();
      if (res.ok) {
        setUserposts([data.post, ...userposts]);
        setText("");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Toggle completed
  const toggleCompleted = async (id) => {
    try {
      const res = await fetch(`http://localhost:7575/toggle/${id}`, {
        method: "PUT",
      });
      const data = await res.json();
      if (res.ok) {
        setUserposts(
          userposts.map((task) => (task._id === id ? data.post : task))
        );
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Delete post
  const deleteTask = async (id) => {
    try {
      const res = await fetch(`http://localhost:7575/delete/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        setUserposts(userposts.filter((task) => task._id !== id));
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          My Tasks
        </h2>

        {/* Input Section */}
        <div className="flex gap-2 mb-6">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Add a new task..."
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={submitTask}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>

        {/* Tasks List */}
        <div className="space-y-3">
          {userposts.length === 0 ? (
            <p className="text-gray-500 text-center">
              No tasks yet. Start adding!
            </p>
          ) : (
            userposts.map((task) => (
              <div
                key={task._id}
                className={`flex justify-between items-center p-3 rounded-lg shadow-sm transition hover:shadow-md ${
                  task.iscompleted ? "bg-green-100" : "bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleCompleted(task._id)}
                    className={`p-2 rounded-full border ${
                      task.iscompleted
                        ? "bg-green-500 text-white"
                        : "bg-white text-gray-400"
                    }`}
                  >
                    <FaCheck />
                  </button>
                  <span
                    className={`text-lg ${
                      task.iscompleted ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {task.content}
                  </span>
                </div>
                <button
                  onClick={() => deleteTask(task._id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <FaTrash />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
