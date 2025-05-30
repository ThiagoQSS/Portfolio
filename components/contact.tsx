"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="mb-3 -mt-6">
        Please contact me directly at{" "}
        <a className="text-blue-600" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col">
        <input
          type="email"
          placeholder="Your email"
          className="h-14 rounded-lg border borderBlack p-4"
        />
        <textarea
          placeholder="Your Message"
          className="h-52 my-3 rounded-lg borderBlack p-4"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:rotate-[70deg] group-hover:translate-x-2 group-hover:-translate-y-2" />
        </button>
      </form>
    </motion.section>
  );
}
