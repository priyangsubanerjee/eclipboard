/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="h-16 flex items-center px-7 lg:px-44 border-b bg-white">
      <div>
        <h1 className="text-2xl text-zinc-800  font-pacifico">eClipboard</h1>
      </div>
      <ul className="hidden lg:flex items-center space-x-8 ml-16 text-sm">
        <li>Home</li>
        <li>Features</li>
        <li>Help</li>
      </ul>
      <div className="flex items-center lg:space-x-4 ml-auto">
        <Link href={"/auth"}>
          <button className="bg-zinc-800 px-4 py-2 rounded text-white font-medium text-sm hover:bg-black transition-all duration-500">
            Sign in
          </button>
        </Link>
        <Link href={"/auth/register"}>
          <button className="hidden lg:block px-4 py-2 rounded text-zinc-800 font-medium text-sm hover:underline">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
