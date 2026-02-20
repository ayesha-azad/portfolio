import { motion } from "framer-motion";

const devopsSkills = [
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "GitHub Actions", icon: "⚙️" },
  { name: "CI/CD Pipelines", icon: "🔄" },
  { name: "Linux Servers", icon: "🖥️" },
  { name: "Git Workflows", icon: "🌿" },
];

export default function DevOps() {
  return (
    <section id="devops" className="py-20 text-center px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
      >
        DevOps & Cloud
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
      >
        {devopsSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-primary transition-all"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="font-semibold text-gray-800 dark:text-gray-200">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
