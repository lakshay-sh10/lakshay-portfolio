"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "GitHub Profile Analyzer API",
    description:
      "REST API that analyzes GitHub profiles and repositories using the GitHub API.",
    tech: "Node.js • Express • Swagger",
  },

  {
    title: "Emergency Vehicle Siren Detection",
    description:
      "Deep Learning model that classifies ambulance, firetruck, and traffic sounds.",
    tech: "Python • CNN • Spectrograms",
  },

  {
    title: "Football Operations Management System",
    description:
      "Database-driven system for scheduling matches and tracking player performance.",
    tech: "Python • MySQL",
  },

  {
    title: "AI Chatbot",
    description:
      "Intelligent chatbot built using NLP and Deep Learning techniques.",
    tech: "Python • NLP • Deep Learning",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-32 px-6"
    >
      <h2 className="text-4xl font-bold mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{
              scale: 1.03,
              y: -5,
            }}
            transition={{
              duration: 0.2,
            }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400 transition"
          >
            <h3 className="text-2xl font-bold">
              {project.title}
            </h3>

            <p className="text-gray-400 mt-4">
              {project.description}
            </p>

            <p className="text-cyan-400 mt-4">
              {project.tech}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}