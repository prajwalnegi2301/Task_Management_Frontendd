'use client'

import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const page = () => {
    
  const [email, setEmail] = useState<string>(""); // Initialize email state with empty string
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const loginUser = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    if (email === "") {
      console.log("Enter email");
    } else if (password === "") {
      console.log("Enter Password");
    } else if (role === "") {
      console.log("Enter role");
    } else {
      try {
        const { data } = await axios.post(
          "http://localhost:8000/api/v1/user/loginUser",
          { email, password, role },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        );  
        setEmail("");
        setPassword("");
        setRole("");
      

      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
    <h2 className="text-3xl font-bold mb-6 text-center text-white-700">
      Login
    </h2>
    <form onSubmit={loginUser}>
      <div className="mb-4">
        <label
          className="block text-white-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <div className="flex items-center border rounded py-2 px-3">
          
          <input
            type="email"
            id="email"
            name="email"
            className="w-full py-1 px-2 text-white-700 leading-tight focus:outline-none"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          className="block text-white-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <div className="flex items-center border rounded py-2 px-3">
        
          <input
            type="password"
            id="password"
            name="password"
            className="w-full py-1 px-2 text-white-700 leading-tight focus:outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          className="block text-white-700 text-sm font-bold mb-2"
          htmlFor="role"
        >
          Select Role
        </label>
        <div className="flex items-center border rounded py-2 px-3">
    
          <select
            id="role"
            name="role"
            className="w-full p-2 text-white-700 leading-tight focus:outline-none"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="User">User</option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </div>
    </form>
    <h4 className="mt-4 font-semibold text-center">
      Don't have an account?
    </h4>
    <Link
      href="/register"
      className="block text-center font-bold text-red-500 hover:text-red-800"
    >
      Register
    </Link>
  </div>
  )
}

export default page
