/* eslint-disable @next/next/no-img-element */
import React, { useLayoutEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import { checkIfLoggedIn } from "@/helper/account";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(null);

  useLayoutEffect(() => {
    if (checkIfLoggedIn()) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <div className="h-16 w-full flex items-center px-7 lg:px-44 border-b bg-white">
      <div>
        <h1 className="text-2xl text-zinc-800  font-pacifico">eClipboard</h1>
      </div>
      {loggedIn == false && (
        <ul className="hidden lg:flex items-center space-x-8 ml-16 text-sm">
          <li>Home</li>
          <li>Features</li>
          <li>Help</li>
        </ul>
      )}
      {loggedIn == false && (
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
      )}

      {loggedIn == true && (
        <div className="flex items-center lg:space-x-7 ml-auto">
          <Link href={"/dashboard"}>
            <button className="bg-zinc-800 px-4 py-2 rounded text-white font-medium text-sm hover:bg-black transition-all duration-500">
              Dashboard
            </button>
          </Link>

          <Popover className="relative">
            <Popover.Button className="mt-1 outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Popover.Button>
            <Popover.Panel className="absolute left-1/2 -translate-x-1/2 z-10 w-32 bg-white border p-2 shadow-xl">
              <ul className="text-sm">
                <li className="text-zinc-800 flex items-center space-x-1 hover:bg-zinc-100 p-2 rounded cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span>Settings</span>
                </li>
                <li
                  onClick={() => {
                    localStorage.removeItem("account");
                    location.reload();
                  }}
                  className="text-red-500 flex items-center space-x-1 cursor-pointer hover:bg-red-50 p-2 rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>

                  <span>Logout</span>
                </li>
              </ul>
            </Popover.Panel>
          </Popover>
        </div>
      )}
    </div>
  );
}

export default Navbar;
