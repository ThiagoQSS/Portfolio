"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {

  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-20 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a System Analysis and Development student at the Federal Institute
        of Bahia
      </p>
      
      <p>I love to create multiplatform applications and i am looking for new opportunities in the field</p>
    </motion.section>
  );
}
