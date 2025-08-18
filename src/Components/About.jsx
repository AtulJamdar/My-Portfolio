import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <section
            id="about"
            className="py-20 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
        >
            {/* Section Heading */}
            <motion.h2
                className="text-4xl font-bold text-center mb-12 text-blue-400"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                About Me
            </motion.h2>

            {/* Introduction */}
            <motion.p
                className="max-w-3xl mx-auto text-lg text-center mb-12 text-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                I am a BCA graduate and a passionate frontend developer. I have recently
                completed Scrimba's "Learn React" course and am eager to start my career
                as a fresher in web development. I enjoy building user-friendly and
                interactive web applications.
            </motion.p>

            {/* Skills Grid */}
            <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-center">
                <Skill icon={<FaReact />} label="React" color="text-blue-400" delay={0.1} />
                <Skill icon={<FaJsSquare />} label="JavaScript" color="text-yellow-400" delay={0.2} />
                <Skill icon={<FaHtml5 />} label="HTML" color="text-orange-400" delay={0.3} />
                <Skill icon={<FaCss3Alt />} label="CSS" color="text-blue-500" delay={0.4} />
                <Skill icon={<SiTailwindcss />} label="Tailwind CSS" color="text-teal-400" delay={0.5} />
                <Skill icon={<FaGitAlt />} label="Git" color="text-red-500" delay={0.6} />
            </div>
        </section>
    );
}

// Reusable Skill Component with animation
function Skill({ icon, label, color, delay }) {
    return (
        <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
        >
            <div
                className={`p-4 rounded-full shadow-lg ${color} bg-opacity-20 transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]`}
                style={{ filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.5))" }}
            >
                <div className="text-5xl">{icon}</div>
            </div>
            <span className="mt-2 text-gray-200 transition duration-300 ease-in-out hover:text-blue-400">
                {label}
            </span>
        </motion.div>
    );
}
