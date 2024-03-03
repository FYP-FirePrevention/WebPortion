// AddUser.js
import React, { useState } from "react";

const AddUser = ({ onAddUser }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    city: "",
    email: "",
    password: "",
    cctvIp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(newUser);
    setNewUser({ name: "", city: "", email: "", password: "", cctvIp: "" }); // Reset form
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h2 className="block text-gray-700 text-xl font-bold mb-2">Add User</h2>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={newUser.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="city"
        >
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          required
          value={newUser.city}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={newUser.email}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={newUser.password}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />

        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="cctvIp"
        >
          CCTV IP
        </label>
        <input
          type="text"
          id="cctvIp"
          name="cctvIp"
          required
          value={newUser.cctvIp}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
