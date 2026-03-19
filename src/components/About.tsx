import { motion } from "framer-motion";
import { FaAward, FaBuilding, FaCodeBranch, FaGlobe } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import profileImage from "../assets/Profile.jpg";

const highlights = [
  {
    icon: FaAward,
    title: "1+ Years Experience",
    description: "Delivering production-ready features and full-stack architecture.",
  },
  {
    icon: FaBuilding,
    title: "Government Project",
    description: "Contributed to Mexico SEP - USICAMM platform used at national scale.",
  },
  {
    icon: FaCodeBranch,
    title: "Scalable Systems",
    description: "Building robust APIs and modular frontends for long-term growth.",
  },
  {
    icon: FaGlobe,
    title: "Global Collaboration",
    description: "Remote teamwork across product, backend, and UI/UX teams.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-shell">
        <AnimatedSection className="mx-auto mb-14 max-w-3xl text-center">
          <span className="section-kicker">About Me</span>
          <h2 className="section-title text-white light:text-slate-900">Professional Overview</h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg light:text-slate-700">
            I am a Full Stack Developer with experience in building production-level applications using MERN stack.
            Currently working at LogicGo Infotech.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <AnimatedSection className="glass-panel rounded-3xl p-6 sm:p-8" delay={0.08}>
            <div className="space-y-5">
              <h3 className="font-display text-2xl font-semibold text-white light:text-slate-900">
                Building products with speed, clarity, and long-term scalability.
              </h3>
              <p className="text-slate-300 light:text-slate-700">
                From API architecture to polished user interfaces, I focus on performance, usability, and maintainable
                code. I have worked on real-world applications, including government platforms and modern SaaS-style
                systems.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item, index) => (
                  <motion.article
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 light:border-slate-200 light:bg-white/75"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.1 + index * 0.07 }}
                  >
                    <item.icon className="mb-3 text-sky-300 light:text-sky-700" size={18} />
                    <h4 className="font-semibold text-white light:text-slate-900">{item.title}</h4>
                    <p className="mt-2 text-sm text-slate-300 light:text-slate-700">{item.description}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div
              className="glass-panel overflow-hidden rounded-3xl"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 150, damping: 13 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent light:from-slate-900/20" />
                <img
                  src={profileImage}
                  alt="Aanand Palan profile"
                  className="h-80 w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-white light:text-slate-900">Aanand Palan</h3>
                <p className="mt-1 text-sm text-slate-300 light:text-slate-700">Full Stack Developer (MERN Stack)</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-300 light:text-slate-700">
                  Currently shipping full-stack solutions at LogicGo Infotech with a focus on scalable architecture,
                  API-first design, and smooth user experiences.
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
