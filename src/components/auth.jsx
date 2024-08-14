import React, { useState } from "react";
import { auth, googleProvider,} from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";




export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = async () => {
    console.log("Clicked ");
    try {
      console.log("Signed In with Email and Password");
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };
  const signInWithGoogle = async () => {
    try {
      console.log("Signed In with Google");
      await signInWithPopup(auth, googleProvider);
      navigate('/Admin');
     
    } catch (err) {
      console.log(err);
    }
  };
  const Logout = async () => {
    try {
      console.log("Signed Out");
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs p-6 bg-white border border-gray-300 rounded-lg shadow-md">
        <div className="mb-6 text-center text-xl font-semibold text-gray-700">
          Sign in with your account
        </div>
        <input
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          placeholder="Email..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          onClick={signIn}
          className="w-full px-3 py-2 my-1 font-bold text-white bg-slate-900 rounded-lg hover:bg-slate-600"
        >
          Sign In
        </button>
        <button
          onClick={signInWithGoogle}
          className="w-full flex items-center justify-center px-3 py-2 my-1 font-bold text-white bg-slate-900 rounded-lg hover:bg-slate-600"
        >
          Sign In With Google
          <FaGoogle className="ml-2" />
        </button>

        <button
          onClick={Logout}
          className="w-full px-3 py-2 my-1 font-bold text-white bg-slate-900 rounded-lg hover:bg-slate-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
