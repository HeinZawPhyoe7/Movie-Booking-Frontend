"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setComfirmpass] = useState("");

  const router = useRouter();

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: any) => {
    setComfirmpass(e.target.value);
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
        {
          name: name,
          email: email,
          password: password,
          password_confirmation: confirmpass,
        }
      );

      console.log("Register successful:", response.data);
      router.push("/login");
      return response.data;
    } catch (error) {
      console.error("Register failed:", error);
    }
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-center flex-col items-center gap-y-4">
        <h3 className="text-3xl font-bold font-serif">Create an account</h3>
        <div className="flex justify-center flex-col items-center gap-y-4">
          <input
            id="name"
            type="name"
            onChange={handleNameChange}
            className="p-2 border rounded-md shadow-md w-[350px]"
            placeholder="Name"
          />
          <input
            id="email"
            type="email"
            onChange={handleEmailChange}
            className="p-2 border rounded-md shadow-md w-[350px]"
            placeholder="Email"
          />
          <input
            id="password"
            type="password"
            onChange={handlePasswordChange}
            className="p-2 border rounded-md shadow-md  w-[350px]"
            placeholder="Password"
          />
          <input
            id="confirm_password"
            type="password"
            onChange={handleConfirmPasswordChange}
            className="p-2 border rounded-md shadow-md w-[350px]"
            placeholder="Confirm Password"
          />
        </div>
        <div className="pb-4">
          <button
            onClick={handleRegister}
            className="bg-blue-500 text-white w-[350px] cursor-pointer rounded-2xl p-2 border border-blue-400 "
          >
            Continue
          </button>
        </div>
        <div className="flex justify-center items-center gap-3">
          <div className="text-xl font-bold font-serif">
            Already have an account?
          </div>
          <Link
            href="/login"
            className="text-xl text-sky-400 cursor-pointer font-bold font-serif"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
