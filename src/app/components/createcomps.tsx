'use client';
import { useState } from "react";

const Createcomps = () => {
      const [email,setEmail] =useState("");
        const [password, setPassword] =useState("");
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-96">
        <h1 className="p-3 text-white ">Create a account</h1>
        
        <input
          type="text "
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="p-3 w-full bg-gray-700 rounded outline-none text-white placeholder-gray-500 mb-4"
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="p-3 w-full bg-gray-700 rounded outline-none text-white placeholder-gray-500 mb-4"
          placeholder="password"
        />
        <button
          type="submit"
          className="p-2 rounded bg-blue-500 text-white w-full mb-4"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Createcomps;
