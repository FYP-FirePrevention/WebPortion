// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Here you would have your login logic
    // If login is successful, redirect to the dashboard
    navigate('/dashboard');
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md min-w-[300px]">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Welcome</h1>
          <div className="bg-gray-200 p-4 rounded-full mb-4">
            <span className="text-3xl font-semibold text-gray-700">A</span>
          </div>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              LOGIN
            </button>
          </div>
        </form>
        <div className="mt-4">
          <p className="text-center text-gray-600 text-xs">
            Don't have an account? <a href="/signup" className="text-blue-500 hover:text-blue-800">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
