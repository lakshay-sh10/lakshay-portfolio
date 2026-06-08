export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between">

        <h1 className="font-bold text-xl">
          Lakshay
        </h1>

        <div className="flex gap-8">

  <a href="#about">About</a>

  <a href="#skills">Skills</a>

  <a href="#experience">Experience</a>

  <a href="#projects">Projects</a>

  <a href="#contact">Contact</a>

</div>

      </div>
    </nav>
  );
}