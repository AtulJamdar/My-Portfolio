import useScrollAnimation from "../hooks/useScrollAnimation";

export default function About() {
  useScrollAnimation();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="reveal text-3xl font-bold mb-6">About Me</h2>

        <p className="reveal text-[rgb(var(--muted))] leading-relaxed">
          I’m a web developer with a strong focus on building clean, maintainable,
          and scalable frontends. I’ve worked on real-world projects ranging from
          dashboards and SaaS-style applications to full websites for clients.
          <br /><br />
          My approach is simple: understand the business goal first, then build
          technology that supports it. I care about performance, usability,
          and long-term maintainability — not just visuals.
        </p><br></br><br></br>

        <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-lg bg-[rgb(var(--primary))] text-white hover:scale-[1.03] transition"
          >
            Contact Me
          </a>
      </div>

      
    </section>
  );
}


// export default function About() {
//     return (
//       <section id="about" className="py-28 px-6">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-6">About Me</h2>
  
//           <p className="text-[rgb(var(--muted))] mb-8">
//             I build modern, scalable web applications with a focus on performance
//             and user experience.
//           </p>
  
//           <a
//             href="#contact"
//             className="inline-block px-8 py-4 rounded-lg bg-[rgb(var(--primary))] text-white hover:scale-[1.03] transition"
//           >
//             Contact Me
//           </a>
//         </div>
//       </section>
//     );
//   }
  