import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CurrentRole from "./components/CurrentRole";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import FullStackProcess from "./components/FullStackProcess";
import Services from "./components/Services";
import Stats from "./components/Stats";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light");
    root.classList.add("dark");
    window.localStorage.setItem("portfolio-theme", "dark");
  }, []);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    return () => window.clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = documentHeight > 0 ? (window.scrollY / documentHeight) * 100 : 0;
      setScrollProgress(nextProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="scrollbar-thin text-slate-100 transition-colors duration-500">
      <ScrollProgress progress={scrollProgress} />
      <Navbar />
      <main className="pb-10">
        <Hero />
        <CurrentRole />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <FullStackProcess />
        <Services />
        <Stats />
        <CurrentlyBuilding />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
