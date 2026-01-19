import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/laptop-workspace.png)' }}
      />
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl font-bold text-white mb-4"
          style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.8)' }}
        >
          Hi, I'm Ayesha Azad👩‍💻
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl mb-8 text-white font-medium"
          style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.8)' }}
        >
          Full Stack Developer & DevOps Engineer
        </motion.p>

        <motion.div variants={itemVariants} className="space-x-4">
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(139, 69, 19, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-[#8B4513] to-[#3E2723] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all"
            href="#projects"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, borderColor: "#8B4513", backgroundColor: "#8B4513" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block border-2 border-[#8B4513] text-[#8B4513] px-8 py-3 rounded-full font-semibold hover:text-white transition-all"
            href="/resume.pdf"
            download
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
