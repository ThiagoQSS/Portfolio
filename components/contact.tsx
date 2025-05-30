"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail"; 

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="mb-3 -mt-6">
        Please contact me directly at{" "}
        <a className="text-blue-600" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          console.log("Running on client:");
          console.log("Form submitted:", formData.get("senderEmail"));
          console.log("Form submitted:", formData.get("message"));

          await sendEmail(formData);
        }}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email"
          className="h-14 rounded-lg border borderBlack p-4"
        />
        <textarea
          placeholder="Your Message"
          name="message"
          className="h-52 my-3 rounded-lg borderBlack p-4"
          required
          maxLength={500}
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
