/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Introduction from "@/sections/Intro";
import Head from "next/head";
import Image from "next/image";
import { useLayoutEffect } from "react";

export default function Home() {
  useLayoutEffect(() => {}, []);
  return (
    <div>
      <Navbar />
      <Introduction />
      <Footer />
    </div>
  );
}
