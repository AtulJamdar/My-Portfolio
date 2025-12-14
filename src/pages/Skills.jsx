import useScrollAnimation from "../hooks/useScrollAnimation";

const skills = [
  "React & Modern JavaScript",
  "Responsive UI Development",
  "State Management & API Integration",
  "Tailwind CSS & Design Systems",
  "Version Control with Git",
  "Backend Basics (Node, Express, MongoDB)",
];

export default function Skills() {
  useScrollAnimation();

  return (
    <section id="skills" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/40 ">
      <div className="max-w-5xl mx-auto">
        <h2 className="reveal text-3xl font-bold mb-10">Skills</h2>

        <div className="grid sm:grid-cols-2 gap-6 ">
          {skills.map((skill) => (
            <div
              key={skill}
              className="reveal p-6 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
