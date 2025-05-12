"use client";

import Image from "next/image";
import React from "react";
import pic from "@/public/profilepicture.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
export default function Intro() {
  return (
    //if everything belongs to the same semantic meaning, wrap them in a section
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={pic}
              className={
                "rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              }
              alt={"My Face should appear here"}
              width="192"
              height="192"
              quality="95"
              priority={true}
            />
          </motion.div>

          <motion.span
            className="absolute right-0 bottom-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
            }}
          >
            👍
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
        }}
        className="mb-10 mt-4 px-4 text-2x1 font-medium leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">Hello, i'm Thiago.</span> I'm a
        <span className="font-bold"> full-stack developer</span> with a passion
        for creating beautiful and functional{" "}
        <span className="font-bold">multiplataform</span> applications. I have
        experience in React, React Native, Next.js, Typescript, JavaScript,
        TailwindCSS, and C. I'm open to full-time opportunities.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-3"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full justify-center w-1/2 self-center outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here.{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>
        <a
          className="group bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full w-1/2 self-center justify-center outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-2 transition" />
        </a>

        <a
          className="bg-white px-4 py-3 flex text-gray-700 items-center gap-2 rounded-full justify-center self-center text-[1.35rem] cursor-pointer focus:scale-[1.15] hover:text-gray-950 hover:scale-110 active:scale-105 transition border border-black/10 outline-none"
          href="https://www.linkedin.com/in/thiago-quadros-silva-do-sacramento-413227319/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white px-4 py-3 flex text-gray-700 items-center gap-2 rounded-full justify-center self-center text-[1.35rem] focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 outline-none"
          href="https://github.com/ThiagoQSS"
          target="_blank"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}
