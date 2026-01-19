import { motion } from "framer-motion";

const skills = [
  "React",
  "Node",
  "MongoDB",
  "MySQL",
  "Docker",
  "Jenkins",
  "GitHub Actions",
  "Linux",
  "CI/CD",
  "Tailwind",
  "Next.js",
  "PHP",
];

export default function Skills() {
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="py-20 text-center px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent"
      >
        Skills
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ staggerChildren: 0.08 }}
        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
      >
        {skills.map((s) => (
          <motion.span
            key={s}
            variants={skillVariants}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 font-semibold text-gray-800 dark:text-gray-200 cursor-pointer transition-all"
          >
            {s}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
