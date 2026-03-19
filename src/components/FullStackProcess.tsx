import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaExchangeAlt, FaServer } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";

const processSteps = [
    {
        title: "Frontend",
        stack: "React + Tailwind",
        icon: FaCode,
        description: "Build fast, responsive interfaces with reusable components and conversion-focused UX.",
    },
    {
        title: "Backend",
        stack: "Node.js + Express",
        icon: FaServer,
        description: "Design robust business logic, authentication, and secure service layers.",
    },
    {
        title: "Database",
        stack: "MongoDB + MySQL",
        icon: FaDatabase,
        description: "Model and optimize data for performance, scalability, and long-term maintainability.",
    },
    {
        title: "API Integration",
        stack: "REST + Realtime",
        icon: FaExchangeAlt,
        description: "Connect systems and automate data flow across web apps, dashboards, and third-party services.",
    },
];

export default function FullStackProcess() {
    return (
        <section id="process" className="py-20 sm:py-24">
            <div className="section-shell">
                <AnimatedSection className="mx-auto mb-14 max-w-3xl text-center">
                    <span className="section-kicker">Full Stack Process</span>
                    <h2 className="section-title text-white light:text-slate-900">How I Build Systems</h2>
                    <p className="mt-4 text-slate-300 light:text-slate-700">
                        A streamlined full-stack delivery process from interface to data and production integration.
                    </p>
                </AnimatedSection>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {processSteps.map((step, index) => (
                        <motion.article
                            key={step.title}
                            className="glass-panel relative overflow-hidden rounded-3xl p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: index * 0.07 }}
                            whileHover={{ y: -6 }}
                        >
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-500" />
                            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-500/10 text-cyan-200 light:text-cyan-700">
                                <step.icon size={16} />
                            </div>
                            <h3 className="font-display text-xl font-semibold text-white light:text-slate-900">{step.title}</h3>
                            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-cyan-200 light:text-cyan-700">{step.stack}</p>
                            <p className="mt-3 text-sm text-slate-300 light:text-slate-700">{step.description}</p>

                            {index < processSteps.length - 1 ? (
                                <span className="pointer-events-none absolute -right-3 top-1/2 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-900 text-cyan-200 xl:inline-flex light:border-slate-300 light:bg-white light:text-cyan-700">
                                    →
                                </span>
                            ) : null}
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
