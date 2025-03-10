'use client'
import { useState } from "react";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { FirebaseError } from "firebase/app";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Sign-in successful!");
    } catch (err) {
        const error = err as FirebaseError;
      toast.error((err as Error).message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
    <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-96">
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          className="p-3 w-full bg-gray-700 rounded outline-none text-white placeholder-gray-500 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 w-full bg-gray-700 rounded outline-none text-white placeholder-gray-500 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="p-2 rounded bg-blue-500 text-white w-full mb-4" type="submit">Sign In</button>
      </form>
    </div>
    </div>
  );
};

export default SignIn;
