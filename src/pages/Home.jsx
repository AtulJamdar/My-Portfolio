import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Home() {
  useScrollAnimation();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 "
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            I build fast, scalable <br />
            <span className="text-[rgb(var(--primary))]">
              web applications
            </span>
          </h1>

          <p className="mt-6 text-[rgb(var(--muted))] max-w-xl">
            I’m a frontend-focused web developer helping businesses and individuals
            turn ideas into reliable, user-friendly digital products.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="inline-block px-8 py-4 rounded-lg bg-[rgb(var(--primary))] text-white hover:scale-[1.03] transition"
            >
              Hire Me
            </a>

            <a
  href="/My-Portfolio/Atul_Jamdar.Resume.pdf"
  target="_blank"
  className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:scale-[1.03] transition"
>
  View Resume
</a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:scale-[1.03] transition"
            >
              View Work
            </a>
          </div>
        </div>

        <div className="reveal flex justify-center">
          <img
            src="/My-Portfolio/Atul1.png"
            alt="Atul Jamdar"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
