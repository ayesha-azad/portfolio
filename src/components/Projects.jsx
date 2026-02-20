import { motion } from "framer-motion";

const projects = [
  {
    title: "Dockerized Applications",
    tech: "Docker & DevOps",
    description: "Integrated collection of containerized apps including Maven, Angular + Spring Boot, PHP + MySQL, MERN stack, and AI models. Developed and managed CI/CD pipelines for these and many other projects.",
  },
  {
    title: "X (Twitter) Clone",
    tech: "Next.js & CI/CD",
    description: "Built a functional X/Twitter clone using Next.js, featuring a robust and fully automated CI and CD pipeline.",
  },
  {
    title: "ECO Trade Hub",
    tech: "Full Stack",
    description: "Sustainable trading platform connecting eco-conscious buyers and sellers. Implemented complete CI/CD pipelines for seamless deployment.",
  },
  {
    title: "Inventory Management System",
    tech: "MERN Stack",
    description: "Comprehensive inventory tracking system with real-time updates, stock management, and analytics dashboard built using MongoDB, Express, React, and Node.js.",
  },
  {
    title: "Netflix Clone",
    tech: "React",
    description: "A feature-rich Netflix clone built with React, featuring dynamic content browsing and responsive design.",
  },
  {
    title: "E-commerce Store",
    tech: "Next.js",
    description: "Modern e-commerce website built with Next.js, featuring server-side rendering and optimized performance.",
  },
  {
    title: "Livestock Management System",
    tech: "PHP + MySQL",
    description: "Comprehensive system for managing livestock inventory, health records, and farm operations.",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl text-center font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <Project key={index} {...project} variants={projectVariants} />
        ))}
      </motion.div>
    </section>
  );
}

function Project({ title, tech, description, variants }) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(139, 69, 19, 0.3)" }}
      className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border-2 border-amber-200 dark:border-stone-700/30 transition-all group"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="font-bold text-xl mb-2 text-primary group-hover:text-secondary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-secondary font-semibold mb-3">{tech}</p>
        <p className="text-gray-800 dark:text-gray-100 text-sm leading-relaxed font-medium">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
}
