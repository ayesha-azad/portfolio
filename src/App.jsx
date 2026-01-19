import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import DevOps from "./components/DevOps";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50 dark:from-gray-950 dark:via-stone-950 dark:to-gray-900 min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <DevOps />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
