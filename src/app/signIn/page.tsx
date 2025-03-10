"use client";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { redirect } from "next/navigation";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

//   const router = useRouter();
  const [user, loading] = useAuthState(auth);
  //sign in with google
  const googleProvider = new GoogleAuthProvider();

  // useEffect(() => {
  //   if (user) {
  //     redirect("/");
  //   }
  // }, [user]);

  // interface SignUpFormProps {
  //     email: string;
  //     password: string;
  // }

  interface FirebaseError {
    message: string;
  }

  const SignInbtn = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
     
      toast.success("Successfully logged in.")
      
      redirect('/')
    } catch (err) {
      toast.error("Authentication Failed", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 1500,
      });
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User created:", userCredential.user);
      setError(null); 
      alert('done')
     
    
     // Clear any previous errors
    } catch (err) {
      const error = err as FirebaseError;
      setError(error.message);
     // Handle errors
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-96">
        <h1 className="text-white">Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="p-3 w-full bg-gray-700 rounded outline-none text-white placeholder-gray-500 mb-4"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="p-3 w-full bg-gray-700 rounded outline-none text-white placeholder-gray-500 mb-4"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="p-2 rounded bg-blue-500 text-white w-full mb-4"
          >
            Sign Up
          </button>
          <button
            onClick={SignInbtn}
            type="submit"
            className="p-2 rounded bg-amber-50 text-white w-full mb-4"
          >
            <FcGoogle />
            Sign in with Google
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default SignUp;
