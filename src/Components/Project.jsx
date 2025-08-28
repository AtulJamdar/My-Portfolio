import { motion } from "framer-motion";

const projects = [
    {
        title: "Todo List",
        description: "This project is a classic Todo List App built using fundamental web technologies: HTML, CSS, and vanilla JavaScript. It allows users to add, manage, and mark as done tasks in a clean and interactive interface. The app demonstrates a solid grasp of core web development principles, including DOM manipulation and basic event handling, without relying on external libraries or frameworks.",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveDemo: "https://atuljamdar.github.io/Todo-App/",
        github: "https://github.com/AtulJamdar/Todo-App",
    },
    {
        title: "Tenzis Game",
        description:
            "This is a fun, interactive digital dice-rolling game, Tenzies,  built entirely with React. It challenges players to roll dice until all are the same, showcasing dynamic user interaction and core React concepts like state management and conditional rendering.",
        technologies: ["React", "HTML", "CSS", "JavaScript"],
        liveDemo: "https://atuljamdar.github.io/AtulJamdar/",
        github: "https://github.com/AtulJamdar/AtulJamdar",
    },
    {
        title: "Weather App",
        description:
            "This project is a dynamic Weather App built with React, Vite, and Material-UI. It fetches real-time weather data from a public API and displays key information like temperature, humidity, and location in a responsive and user-friendly interface. The app demonstrates a strong understanding of state management, API integration, and conditional rendering.",
        technologies: ["React", "HTML", "CSS", "JavaScript", "Wheather.api"],
        liveDemo: "https://atuljamdar.github.io/Weather-App/",
        github: "https://github.com/AtulJamdar/Weather-App",
    },
    {
        title: "Word Guessing Game",
        description: "This Word Guessing Game, developed using React, is a fun and engaging interactive application. Players try to guess a hidden word within a set number of attempts, receiving feedback after each guess. This project effectively demonstrates fundamental React concepts like managing component state, handling user input, and implementing game logic for an interactive experience.",
        technologies: ["React", "HTML", "CSS", "JavaScript"],
        liveDemo: "https://atuljamdar.github.io/Word-Guessing-Game/",
        github: "https://github.com/AtulJamdar/Word-Guessing-Game",
    },
    {
        title: "From Other Side",
        description: "From Other Side is a backend server application built with Node.js. This project demonstrates fundamental server-side skills, including creating a server from scratch and handling various API requests. It showcases the ability to manage routing and serve dynamic data by utilizing path and query parameters to return customized API responses.",
        technologies: ["Node.js", "HTML", "CSS", "JavaScript"],
        liveDemo: "https://from-other-side.onrender.com/upload-sighting.html",
        github: "https://github.com/AtulJamdar/From_Other_Side",
    },
    {
        title: "My Music",
        description: "My Music is a full-stack e-commerce application built with Express.js and Node.js. It simulates an indie rock vinyl store where users can browse, manage orders, and receive real-time updates on their purchases. The project showcases key back-end skills, including user authentication, protected routes, inventory management, and utilizing a database to handle order processing.",
        technologies: ["Node.js", "Express.js", "HTML", "CSS", "JavaScript"],
        liveDemo: "https://sounds-ql3h.onrender.com",
        github: "https://github.com/AtulJamdar/My_Music",
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
