import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { createAccount } from "@/helper/account";
import { encrypt } from "@/helper/crypto";
import Loader from "@/components/Loader";

function Register() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await createAccount(user.name, user.email, user.password);
    if (res.success) {
      const account = res.data;
      const enc = encrypt(JSON.stringify(account));
      localStorage.setItem("account", JSON.stringify(enc));
      setLoading(false);
      setUser({
        name: "",
        email: "",
        password: "",
      });
      window.location.href = "/";
    }
  };

  return (
    <div>
      <Head>
        <meta name="theme-color" content="#fff" />
      </Head>
      <div className="flex lg:items-center lg:justify-center lg:mt-28">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="bg-white w-[500px] p-7"
        >
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
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="border-b py-3 w-full mt-6 outline-none rounded-none"
            name=""
            id=""
          />
          <input
            type="text"
            placeholder="Email address"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="border-b py-3 w-full mt-4 outline-none rounded-none"
            name=""
            id=""
          />
          <input
            type="text"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="border-b py-3 w-full mt-4 outline-none rounded-none"
            name=""
            id=""
          />

          <button
            type="submit"
            className="py-3 w-full rounded-md bg-zinc-800 mt-12 text-white font-medium hover:bg-black transition-all duration-500"
          >
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
      <Loader loading={loading} />
    </div>
  );
}

export default Register;
