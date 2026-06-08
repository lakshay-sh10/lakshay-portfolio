const experiences = [
  {
    title: "Web Developer Intern",
    company: "Ensoft Professionals",
    duration: "2026 - Present",
  },
  {
    title: "AI & RF Signal Processing Intern",
    company: "Sunworks Consultants",
    duration: "2024 - 2025",
  },
  {
    title: "Android Developer Intern",
    company: "AICTE",
    duration: "2025",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto py-32 px-6"
    >
      <h2 className="text-4xl font-bold mb-12">
        Experience
      </h2>

      <div className="space-y-6">

        {experiences.map((exp) => (
          <div
            key={exp.title}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold">
              {exp.title}
            </h3>

            <p className="text-cyan-400">
              {exp.company}
            </p>

            <p className="text-gray-500">
              {exp.duration}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}