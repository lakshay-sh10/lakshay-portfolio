import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto py-32 px-6"
    >
      <h2 className="text-4xl font-bold mb-12">
        Contact
      </h2>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

        <p className="text-gray-400 mb-8">
          Interested in working together? Let's connect.
        </p>

        <div className="flex gap-8 text-3xl">

          <a
            href="https://github.com/lakshay-sh10"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/lakshay-sharma-8a5a5328b/"
            target="_blank"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:lakshaysharma1104@gmail.com"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>
    </section>
  );
}