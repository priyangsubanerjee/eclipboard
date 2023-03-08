import { getCode, refreshCode } from "@/helper/account";
import { useLayoutEffect, useState } from "react";

export default function Home() {
  const [code, setCode] = useState(null);
  const [spinning, setSpinning] = useState(false);
  useLayoutEffect(() => {
    if (code) return;
    const res = getCode();
    if (res) setCode(res);
  }, [code]);
  return (
    <div>
      <nav className="bg-white h-20 border-b flex items-center px-24">
        <div>
          <h1 className="text-2xl font-pacifico text-zinc-700">eClipboard</h1>
        </div>
        <ul className="flex items-center space-x-8 text-sm text-zinc-700 ml-16">
          <li>Feedback</li>
          <li>Support</li>
          <li>Help</li>
        </ul>
        <div className="flex items-center ml-auto text-sm">
          <span className="text-zinc-500">Access code:</span>
          <span className="font-semibold ml-2 text-lg text-zinc-700">
            {code}
          </span>
          <button
            className={`h-8 w-8 rounded-full bg-zinc-100 ml-4 flex items-center justify-center ${
              spinning && "animate-spin"
            }`}
            onClick={() => {
              setSpinning(true);
              const res = refreshCode();
              if (res) setCode(res);
              setSpinning(false);
            }}
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
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div className="py-16 px-44">
        <div className="h-16 flex items-center bg-white rounded-full border shadow-xl shadow-black/[0.025] px-10">
          <input
            type="text"
            placeholder="What do you want us to remember ?"
            className="w-full outline-none"
            name=""
            id=""
          />
          <button className="bg-zinc-100 px-8 py-2 rounded-full -mr-6">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
