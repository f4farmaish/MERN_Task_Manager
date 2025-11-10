import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to TaskMaster
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Manage your tasks, stay organized, and increase productivity!
        </p>
        <a
          href="/write-post"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
            <h3 className="text-xl font-semibold mb-2">Add Tasks</h3>
            <p>Quickly add your tasks and keep track of your daily goals.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
            <h3 className="text-xl font-semibold mb-2">Profile Management</h3>
            <p>Keep your profile up to date and view your task progress.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
            <h3 className="text-xl font-semibold mb-2">Task Completion</h3>
            <p>Mark tasks as complete and celebrate your productivity.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About TaskMaster</h2>
          <p className="text-gray-700 mb-4">
            TaskMaster is a modern task management application designed to help
            you stay organized and productive. You can write tasks, manage your
            profile, and track progress effortlessly.
          </p>
          <p className="text-gray-700">
            Built with React and Tailwind CSS, TaskMaster is fast, responsive,
            and easy to use on any device.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">What Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <p className="mb-4">
              "TaskMaster has completely changed the way I organize my day!"
            </p>
            <h3 className="font-semibold">- Umer</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <p className="mb-4">
              "I love how simple and clean the interface is. Highly recommend!"
            </p>
            <h3 className="font-semibold">- Ghazanfer</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <p className="mb-4">
              "Managing tasks has never been easier. TaskMaster is amazing!"
            </p>
            <h3 className="font-semibold">- zaman</h3>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white mt-auto">
        <div className="max-w-6xl mx-auto py-10 px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2025 TaskMaster. made by farmaish.</p>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-gray-200 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-200 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-200 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-200 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
