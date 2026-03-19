import { motion } from "framer-motion";
import { FaBrain, FaRobot } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";

const focusAreas = [
    "AI freelance automation system",
    "Code analysis and bug detection tools",
    "Smart dashboards with AI insights",
    "LLM-enhanced SaaS feature pipelines",
];

export default function CurrentlyBuilding() {
    return (
        <section id="now-building" className="py-20 sm:py-24">
            <div className="section-shell">
                <AnimatedSection>
                    <motion.article
                        className="glass-panel relative overflow-hidden rounded-3xl p-7 sm:p-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-cyan-500/20 blur-3xl" />
                        <div className="absolute -left-8 bottom-0 h-36 w-36 rounded-full bg-indigo-500/20 blur-3xl" />

                        <div className="relative z-10">
                            <span className="section-kicker">Bonus</span>
                            <h2 className="font-display text-3xl font-semibold text-white light:text-slate-900 sm:text-4xl">
                                Currently Building AI-powered tools & automation systems
                            </h2>
                            <p className="mt-4 max-w-3xl text-slate-300 light:text-slate-700">
                                Building practical AI systems that accelerate delivery, reduce repetitive engineering tasks, and improve
                                product intelligence for real client workflows.
                            </p>

                            <div className="mt-7 grid gap-3 sm:grid-cols-2">
                                {focusAreas.map((area, index) => (
                                    <motion.div
                                        key={area}
                                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 light:border-slate-200 light:bg-white/75 light:text-slate-700"
                                        initial={{ opacity: 0, x: -14 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.45, delay: index * 0.08 }}
                                    >
                                        <span className="inline-flex items-center gap-2">
                                            {index % 2 === 0 ? (
                                                <FaBrain className="text-cyan-300 light:text-cyan-700" />
                                            ) : (
                                                <FaRobot className="text-cyan-300 light:text-cyan-700" />
                                            )}
                                            {area}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.article>
                </AnimatedSection>
            </div>
        </section>
    );
}
