import useScrollAnimation from "../hooks/useScrollAnimation";

const clientWork = [
  {
    title: "Business Website for Local Client",
    result:
      "Delivered a fast, mobile-friendly website that improved online presence and customer inquiries.",
    stack: "React, Tailwind CSS",
  },
  {
    title: "Internal Admin Dashboard",
    result:
      "Built a role-based dashboard to manage data efficiently and reduce manual work.",
    stack: "React, REST APIs",
  },
  {
    title: "Portfolio Website (Client)",
    result:
      "Designed and developed a clean personal brand website tailored to the client’s goals.",
    stack: "React, Tailwind",
  },
  {
    title: "Startup MVP Web App",
    result:
      "Helped validate a product idea by delivering a functional MVP under tight timelines.",
    stack: "React, Node.js",
  },
];

const personalProjects = [
  {
    title: "SyncFlow – Project Management App",
    result:
      "Full-stack SaaS-style app with authentication, role-based dashboards, and real-time features.",
    stack: "React, Node, Express, MongoDB",
    link: "https://syncflow-xnch.onrender.com/",
  },
  
  {
    title: "Word Guessing Game",
    result:
      "Interactive word guessing game demonstrating state management and game logic in React.",
    stack: "React, JavaScript",
    link: "https://atuljamdar.github.io/Word-Guessing-Game/",
  },
  
  {
    title: "Weather App",
    result:
      "Real-time weather app demonstrating API integration and state management.",
    stack: "React, APIs",
    link: "https://atuljamdar.github.io/Weather-App/",
  },
];

export default function Projects() {
  useScrollAnimation();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal text-3xl font-bold mb-12">
          Work & Case Studies
        </h2>

        {/* Client Work */}
        <div className="mb-16">
          <h3 className="reveal text-xl font-semibold mb-6">
            Client Work
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {clientWork.map((p) => (
              <div
                key={p.title}
                className="reveal p-6 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <h4 className="font-semibold mb-2">{p.title}</h4>
                <p className="text-[rgb(var(--muted))] mb-3">{p.result}</p>
                <span className="text-sm opacity-80">{p.stack}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h3 className="reveal text-xl font-semibold mb-6">
            Personal Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {personalProjects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal block p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[rgb(var(--primary))]"
              >
                <h4 className="font-semibold mb-2">{p.title}</h4>
                <p className="text-[rgb(var(--muted))] mb-3">{p.result}</p>
                <span className="text-sm opacity-80">{p.stack}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
