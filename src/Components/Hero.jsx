import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-16 gap-10">

            {/* Left: Profile Image */}
            <motion.div
                className="flex justify-center md:justify-end w-full md:w-1/2"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <img
                    src="/My-Portfolio/Atul1.png" // 👉 replace with your image file
                    alt="Atul Jamdar"
                    className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full border-4 border-blue-600 shadow-lg object-cover"
                />
            </motion.div>

            {/* Right: Text & Buttons */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                {/* Heading */}
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Atul Jamdar
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Web Developer | BCA Graduate
                </motion.p>

                {/* Call to Action Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, staggerChildren: 0.2 }}
                >
                    <motion.a
                        href="/My-Portfolio/Atul_Jamdar.Resume.pdf"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Download Resume
                    </motion.a>

                    <motion.a
                        href="#projects"
                        className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Projects
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
