import { useState } from "react";
import emailjs from "emailjs-com";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Contact() {
  useScrollAnimation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.send(
      "service_m25m2lm",
      "template_f7lh28d",
      form,
      "szw956OP0vcSvQMoX"
    )
    .then(() => {
      alert("Message sent successfully");
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => {
      alert("Failed to send message");
    });
  }

  return (
    <section id="contact" className="py-28 px-6 bg-gray-50 dark:bg-gray-900/40">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="reveal text-3xl font-bold mb-6">
          Ready to start your project?
        </h2>

        <p className="reveal text-[rgb(var(--muted))] mb-10">
          Let’s talk about your idea or existing product.
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-2xl mb-10">
        {[
          { icon: <FaGithub />, link: "https://github.com/AtulJamdar" },
          { icon: <FaLinkedin />, link: "https://linkedin.com/in/connectatuljamdar" },
          { icon: <FaInstagram />, link: "https://www.instagram.com/_.j_a__/" },
          { icon: <FaTwitter />, link: "https://x.com/atul_jamdar" },
        ].map((s, i) => (
          <a
            key={i}
            href={s.link}
            target="_blank"
            className="p-3 rounded-full border hover:bg-[rgb(var(--primary))] hover:text-white transition"
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* Contact Form */}
      <form
        onSubmit={sendEmail}
        className="reveal-left max-w-md mx-auto space-y-4"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 border rounded"
          required
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 border rounded"
          required
        />
        <button className="w-full py-3 rounded-lg bg-[rgb(var(--primary))] text-white hover:scale-[1.02] transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
