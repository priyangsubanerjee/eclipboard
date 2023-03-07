/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Marquee from "react-fast-marquee";

function Introduction() {
  return (
    <div className="p-5 md:pl-20 lg:pl-44 lg:py-16 grid grid-cols-1 md:grid-cols-2">
      <div className="flex md:hidden justify-center items-center py-10">
        <img
          src="https://help.apple.com/assets/639A11EF65A0630D0010C0E4/639A11F265A0630D0010C0EC/en_GB/5408ab87336d79b47bbb6726c8549e7b.png"
          alt=""
          className="w-[500px]"
        />
      </div>
      <div>
        <h1 className="text-4xl lg:text-5xl font-semibold lg:font-bold text-zinc-900 lg:leading-[1.4] leading-[1.3]">
          Sync your clipboard across all your devices.
        </h1>
        <p className="leading-7 lg:leading-8 mt-5 text-sm lg:text-base">
          eClipboard is a free service that allows you to sync your clipboard
          across all your devices. You can use it to copy text and other types
          of data.
        </p>
        <ul className="mt-10 list-disc pl-4 space-y-3 text-sm lg:text-base">
          <li>Unlimited storage</li>
          <li>Password protected clipboards.</li>
          <li>Share with anyone &amp; anywhere.</li>
          <li>Sync your clipboard across all your devices.</li>
        </ul>
        <div className="w-fit bg-white border h-fit rounded-md py-3 mt-10">
          <p className="text-zinc-500 text-xs px-3">powered by</p>
          <div className="mt-3">
            <Marquee>
              <div className="mr-12">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzR2hP6PRY3MB-itUTtITVE2cazvo5lXiwgXf-UykuiR1jJlIVhJz9Gj4gFaR57OjFSw&usqp=CAU"
                  className="h-7 lg:h-8"
                />
              </div>
              <div className="mr-12">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
                  className="h-9 lg:h-10"
                />
              </div>
              <div className="mr-12">
                <img
                  src="https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png"
                  className="h-20 lg:h-20"
                />
              </div>
              <div className="mr-12">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/2560px-Vercel_logo_black.svg.png"
                  className="h-5 lg:h-5"
                />
              </div>
            </Marquee>
          </div>
        </div>
        <div className="mt-20 mb-10">
          <p className="text-xs lg:text-sm w-full text-center lg:text-left">
            made with{" "}
            <span className="text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 inline-block"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </span>{" "}
            by{" "}
            <a className="text-blue-600" href="">
              @priyangsubanerjee
            </a>
          </p>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center pl-10">
        <img src="/iphone.png" alt="" className="w-[350px] -mt-10" />
      </div>
    </div>
  );
}

export default Introduction;
