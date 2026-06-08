export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto py-32 px-6"
    >
      <h2 className="text-4xl font-bold mb-10">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-4">
            Who I Am
          </h3>

          <p className="text-gray-400">
            Computer Science student specializing in AI & ML,
            passionate about Full Stack Development,
            Cloud Computing and Machine Learning.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-4">
            Current Role
          </h3>

          <p className="text-gray-400">
            Web Developer Intern at Ensoft Professionals,
            contributing to product development and
            application performance improvements.
          </p>
        </div>

      </div>
    </section>
  );
}