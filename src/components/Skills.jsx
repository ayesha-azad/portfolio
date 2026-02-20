import { motion } from "framer-motion";

const skills = [
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "CI/CD",
  "Linux",
  "React",
  "Node",
  "MongoDB",
  "MySQL",
  "Tailwind",
  "Next.js",
  "PHP",
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="py-24 text-center px-4 bg-amber-50/30 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-[#8B4513] to-[#3E2723] dark:from-amber-200 dark:to-orange-100 bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-5"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md px-8 py-4 rounded-full shadow-lg hover:shadow-xl border border-[#8B4513]/20 dark:border-amber-200/20 hover:border-[#8B4513]/50 dark:hover:border-amber-200/50 font-bold text-gray-800 dark:text-gray-100 cursor-pointer transition-all"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
