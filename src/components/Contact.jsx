import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaUser } from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      icon: FaUser,
      label: "Name",
      value: "Ayesha Azad",
      link: null,
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "ayesha@example.com",
      link: "mailto:ayesha@example.com",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/ayesha-azad",
      link: "https://github.com/ayesha-azad",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ayeshaazad",
      link: "https://linkedin.com/in/ayeshaazad",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl text-center font-bold mb-16 bg-gradient-to-r from-[#8B4513] to-[#3E2723] bg-clip-text text-transparent"
      >
        Get In Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6"
      >
        {contactInfo.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3 }}
            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(139, 69, 19, 0.2)" }}
            className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border-2 border-amber-200 dark:border-stone-700/30 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-[#8B4513] to-[#3E2723] text-white p-4 rounded-full shadow-lg">
                <item.icon className="text-2xl" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">
                  {item.label}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8B4513] dark:text-[#A0826D] font-medium hover:underline transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-800 dark:text-gray-200 font-medium">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
