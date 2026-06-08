"use client";

import { motion } from "framer-motion";

export default function Hero() {
      return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <motion.div
  className="text-center max-w-4xl"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>

        <p className="text-cyan-400 font-medium mb-4">
          👋 Hello, I'm
        </p>

        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent">
          Lakshay Sharma
        </h1>

        <h2 className="text-xl md:text-3xl text-gray-400 mt-6">
          Software Engineer • Full Stack Developer • AI/ML Engineer
        </h2>

        <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
          Building modern web applications, intelligent AI solutions,
          scalable APIs, and cloud-powered systems.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

          <a
  href="#projects"
  className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-xl font-semibold text-black">
  View Projects
         </a>

          <a
  href="/Lakshay_Sharma_Resume.pdf"
  download
  className="border border-white/20 hover:border-cyan-400 transition px-6 py-3 rounded-xl"
>
  Download Resume
</a>

        </div>

      </motion.div>

    </section>
  );
}