const skills = [
  "Python",
  "C++",
  "C#",
  "React",
  "Node.js",
  "MySQL",
  "Git",
  "GitHub",
  "AWS",
  "AI/ML",
  "NLP",
  "Android",
  "Tailwind CSS",
  "REST APIs",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto py-32 px-6"
    >
      <h2 className="text-4xl font-bold mb-12">
        Skills & Technologies
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}