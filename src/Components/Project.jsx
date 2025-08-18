import { motion } from "framer-motion";

const projects = [
    {
        title: "Todo List",
        description: "A simple Todo List App with daily reminders",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveDemo: "https://atuljamdar.github.io/Todo-App/",
        github: "https://github.com/AtulJamdar/Todo-App",
    },
    {
        title: "Tenzis Game",
        description:
            "A digital dice-rolling game built with React, based on the classic Tenzies game",
        technologies: ["React", "HTML", "CSS", "JavaScript"],
        liveDemo: "https://atuljamdar.github.io/AtulJamdar/",
        github: "https://github.com/AtulJamdar/AtulJamdar",
    },
    {
        title: "Recipe Generator",
        description:
            "A React application that leverages the Hugging Face API to generate unique recipes based on user input",
        technologies: ["React", "HTML", "CSS", "JavaScript", "Hugging Face API"],
        liveDemo: "#",
        github: "#",
    },
    {
        title: "Word Guessing Game",
        description: "A simple word-guessing game built with React",
        technologies: ["React", "HTML", "CSS", "JavaScript"],
        liveDemo: "https://atuljamdar.github.io/Word-Guessing-Game/",
        github: "https://github.com/AtulJamdar/Word-Guessing-Game",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen bg-gray-900 text-white py-16 px-6"
        >
            <div className="max-w-6xl mx-auto text-center mb-12">
                <motion.h2
                    className="text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    My Projects
                </motion.h2>
                <motion.p
                    className="text-gray-400 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    Here are some of the projects I’ve worked on, showcasing my skills in
                    frontend development and React.
                </motion.p>
            </div>

            {/* Project Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-blue-500/30 transition duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <h3 className="text-2xl font-semibold mb-2 text-blue-400">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-600/20 text-blue-400 text-sm px-3 py-1 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 mt-4">
                            <a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium transition"
                            >
                                Live Demo
                            </a>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center border border-blue-600 hover:bg-blue-700 hover:text-white py-2 rounded-lg font-medium transition"
                            >
                                GitHub
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
