import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_00qzplb", // 👉 replace with EmailJS Service ID
                "template_f63evmt", // 👉 replace with EmailJS Template ID
                formData,
                "QszeKHkBezczYFp5w" // 👉 replace with EmailJS Public Key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setIsSent(true);
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section
            id="contact"
            className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white px-6"
        >
            <motion.h2
                className="text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Contact Me
            </motion.h2>

            {/* Social Links */}
            <motion.div
                className="flex gap-8 mb-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <a
                    href="https://github.com/AtulJamdar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl hover:text-blue-500 transition duration-300"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/connectatuljamdar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl hover:text-blue-500 transition duration-300"
                >
                    <FaLinkedin />
                </a>
            </motion.div>

            {/* Email */}
            <motion.p
                className="mb-8 text-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                📧{" "}
                <a
                    href="mailto:work.atuljamdar@gmail.com"
                    className="text-blue-400 hover:underline"
                >
                    work.atuljamdar@gmail.com
                </a>
            </motion.p>

            {/* Contact Form */}
            <motion.form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-gray-800 p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    required
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition duration-300"
                >
                    {isSent ? "✅ Message Sent!" : "Send Message"}
                </button>
            </motion.form>
        </section>
    );
}
