import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function Login() {
  return (
    <div>
      <Head>
        <meta name="theme-color" content="#fff" />
      </Head>
      <div className="flex flex-col lg:items-center lg:justify-center lg:mt-28">
        <form className="bg-white lg:w-[500px] p-7">
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
          <h1 className="text-2xl font-bold text-zinc-800 mt-6">Sign In</h1>
          <p className="text-sm text-zinc-500 mt-2">
            using your registered email address and password.
          </p>
          <input
            type="text"
            placeholder="Email address"
            className="border-b py-3 w-full mt-6 outline-none rounded-none"
            name=""
            id=""
          />
          <input
            type="text"
            placeholder="Password"
            className="border-b py-3 w-full mt-4 outline-none rounded-none"
            name=""
            id=""
          />
          <div className="flex items-center justify-between mt-7">
            <div className="flex items-center">
              <input type="checkbox" name="" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-zinc-700">
                Remember me
              </label>
            </div>
            <p className="text-sm text-zinc-700">Forgot password?</p>
          </div>
          <button className="py-3 w-full rounded-md bg-zinc-800 mt-12 text-white font-medium hover:bg-black transition-all duration-500">
            Continue
          </button>
          <p className="text-sm text-zinc-700 mt-10">
            Don&apos;t have an account?{" "}
            <Link href={"/auth/register"}>
              <span className="text-zinc-800 font-medium">Sign Up</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
