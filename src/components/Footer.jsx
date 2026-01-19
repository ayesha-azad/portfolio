import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: FaGithub, url: "https://github.com/ayeshaazad" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/ayeshaazad" },
    { name: "Email", icon: FaEnvelope, url: "mailto:ayesha@example.com" },
  ];

  const quickLinks = [
    { name: "Projects", href: "#projects" },
    { name: "DevOps", href: "#devops" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-amber-50 via-stone-100 to-brown-50 dark:from-gray-900 dark:via-stone-950 dark:to-gray-950 border-t border-amber-200 dark:border-stone-800/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 
              className="text-2xl mb-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: 'linear-gradient(135deg, #8B4513 0%, #3E2723 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Ayesha.dev
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Full-stack developer passionate about creating beautiful web experiences and exploring DevOps technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: "#8B4513" }}
                    className="text-gray-700 dark:text-gray-300 text-sm hover:text-primary transition-colors inline-block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#8B4513] dark:bg-gradient-to-br dark:from-[#8B4513] dark:to-[#3E2723] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all border-2 border-[#8B4513] dark:border-[#A0826D]"
                  aria-label={social.name}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-amber-200 dark:border-stone-800/50 text-center"
        >
          <p className="text-gray-700 dark:text-gray-300 text-sm flex items-center justify-center gap-2">
            Made with <FaHeart className="text-primary animate-pulse" /> by Ayesha Azad © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
