import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import AnimatedBackground from "./AnimatedBackground";

const typedSnippets = [
  "MERN Stack: MongoDB + Express + React + Node.js",
  "AI Tooling: Automation + Smart Workflows + Insights",
  "Realtime Systems: APIs + Socket Services + Dashboards",
];

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [typedText, setTypedText] = useState(typedSnippets[0]);
  const [characterIndex, setCharacterIndex] = useState(0);

  useEffect(() => {
    const currentLine = typedSnippets[lineIndex];

    if (characterIndex <= currentLine.length) {
      const typeTimer = window.setTimeout(() => {
        setTypedText(currentLine.slice(0, characterIndex));
        setCharacterIndex((prevIndex) => prevIndex + 1);
      }, 55);

      return () => window.clearTimeout(typeTimer);
    }

    const nextTimer = window.setTimeout(() => {
      setLineIndex((prevIndex) => (prevIndex + 1) % typedSnippets.length);
      setCharacterIndex(0);
    }, 1300);

    return () => window.clearTimeout(nextTimer);
  }, [characterIndex, lineIndex]);

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <AnimatedBackground />
      <div className="section-shell relative z-10 pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.18fr_0.82fr]">
          <AnimatedSection className="space-y-7" delay={0.1}>
            <span className="section-kicker">Surat, India • LogicGo Infotech</span>
            <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl light:text-slate-900">
              Full Stack Developer | <span className="text-gradient">MERN Stack | AI Solutions</span>
            </h1>
            <p className="max-w-2xl text-base text-slate-300 sm:text-lg light:text-slate-700">
              I build scalable web applications, SaaS platforms, and AI-powered systems.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.03]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-sky-300/45 bg-sky-400/10 px-6 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-200 hover:bg-sky-400/20 light:border-sky-600/40 light:bg-sky-500/10 light:text-sky-700"
              >
                Hire Me
              </a>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 text-xs text-slate-200 light:text-slate-700">
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 light:border-slate-300 light:bg-white/60">
                Full Stack Engineer
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 light:border-slate-300 light:bg-white/60">
                API + Realtime Systems
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 light:border-slate-300 light:bg-white/60">
                SaaS Product Builder
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.28}>
            <motion.div
              className="glass-panel overflow-hidden rounded-3xl"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 160, damping: 14 }}
            >
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 light:border-slate-200">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs text-slate-300 light:text-slate-600">developer-console.ts</span>
              </div>
              <div className="space-y-4 p-5 sm:p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-cyan-200/85 light:text-cyan-700">Tech Stack Typing</div>
                <pre className="min-h-[90px] overflow-hidden rounded-2xl border border-cyan-300/20 bg-slate-900/70 p-4 font-mono text-xs text-cyan-100 light:border-slate-300 light:bg-slate-100 light:text-slate-800 sm:text-sm">
                  <code>
                    {typedText}
                    <span className="animate-pulse text-sky-300 light:text-sky-700">|</span>
                  </code>
                </pre>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 light:border-slate-200 light:bg-white/80">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 light:text-slate-500">Experience</p>
                    <p className="mt-1 text-lg font-semibold text-white light:text-slate-900">1+ Years</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 light:border-slate-200 light:bg-white/80">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 light:text-slate-500">Current Role</p>
                    <p className="mt-1 text-lg font-semibold text-white light:text-slate-900">MERN Dev</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 light:border-slate-200 light:bg-white/80">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 light:text-slate-500">Location</p>
                    <p className="mt-1 text-lg font-semibold text-white light:text-slate-900">Surat</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
