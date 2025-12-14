import useScrollAnimation from "../hooks/useScrollAnimation";

const services = [
  {
    title: "Website Development",
    desc: "Professional, responsive websites built for speed, SEO, and clarity.",
  },
  {
    title: "Web App Development",
    desc: "Custom React-based web applications with clean architecture.",
  },
  {
    title: "Frontend Optimization",
    desc: "Improve performance, UX, and maintainability of existing projects.",
  },
  {
    title: "Ongoing Support",
    desc: "Bug fixes, feature updates, and long-term maintenance.",
  },
];

export default function Services() {
  useScrollAnimation();

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal text-3xl font-bold mb-12">Services</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="reveal p-8 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
              <p className="text-[rgb(var(--muted))]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
