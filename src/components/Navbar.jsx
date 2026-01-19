import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const links = [
    { name: "Projects", href: "#projects" },
    { name: "DevOps", href: "#devops" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-white/70 dark:bg-black/60 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-3xl cursor-pointer"
          style={{
            fontFamily: "'Playfair Display', serif",
            background: 'linear-gradient(135deg, #8B4513 0%, #3E2723 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 2px 4px rgba(139, 69, 19, 0.3))',
          }}
        >
          Ayesha.dev
        </motion.h1>
        <div className="flex items-center gap-6">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              whileHover={{ scale: 1.1, color: "#8B4513" }}
              className="font-medium text-gray-700 dark:text-gray-300 transition-colors hidden md:block"
              href={link.href}
            >
              {link.name}
            </motion.a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
