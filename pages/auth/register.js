import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

function Register() {
  const router = useRouter();
  return (
    <div>
      <div className="flex items-center justify-center mt-28">
        <form className="bg-white w-[500px] p-7">
          <div>
            <Link href={"/"}>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-zinc-800 mt-6">Sign Up</h1>
          <p className="text-sm text-zinc-500 mt-2">
            using your email address and password.
          </p>
          <input
            type="text"
            placeholder="Name"
            className="border-b py-3 w-full mt-6 outline-none"
            name=""
            id=""
          />
          <input
            type="text"
            placeholder="Email address"
            className="border-b py-3 w-full mt-4 outline-none"
            name=""
            id=""
          />
          <input
            type="text"
            placeholder="Password"
            className="border-b py-3 w-full mt-4 outline-none"
            name=""
            id=""
          />

          <button className="py-3 w-full rounded-md bg-zinc-800 mt-12 text-white font-medium hover:bg-black transition-all duration-500">
            Continue
          </button>
          <p className="text-sm text-zinc-700 mt-10">
            Already have an account?{" "}
            <Link href={"/auth"}>
              <span className="text-zinc-800 font-medium">Sign in</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
