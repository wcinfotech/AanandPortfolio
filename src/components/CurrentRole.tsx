import { motion } from "framer-motion";
import { FaChartLine, FaCodeBranch, FaDatabase, FaServer } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";

const roleHighlights = [
    {
        icon: FaCodeBranch,
        title: "MERN Application Development",
        detail: "Building full-stack product modules with reusable architecture and clean deployment flow.",
    },
    {
        icon: FaServer,
        title: "REST API Engineering",
        detail: "Designing scalable API layers for secure data flow and high-availability system behavior.",
    },
    {
        icon: FaChartLine,
        title: "Real-time Features",
        detail: "Delivering interactive real-time experiences for dashboards and collaboration workflows.",
    },
    {
        icon: FaDatabase,
        title: "Production Scalability",
        detail: "Structuring backend and database systems for performance, reliability, and future scale.",
    },
];

export default function CurrentRole() {
    return (
        <section id="current-role" className="py-20 sm:py-24">
            <div className="section-shell">
                <AnimatedSection className="mx-auto mb-14 max-w-3xl text-center">
                    <span className="section-kicker">Current Role</span>
                    <h2 className="section-title text-white light:text-slate-900">
                        Full Stack Developer at LogicGo Infotech (Jan 2026 - Present)
                    </h2>
                    <p className="mt-4 text-slate-300 light:text-slate-700">
                        Leading end-to-end implementation across frontend, backend, APIs, and data systems for production applications.
                    </p>
                </AnimatedSection>

                <motion.article
                    className="glass-panel relative overflow-hidden rounded-3xl p-7 sm:p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.58 }}
                >
                    <div className="absolute -top-20 right-0 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />
                    <div className="absolute -bottom-20 left-8 h-44 w-44 rounded-full bg-cyan-500/20 blur-3xl" />

                    <div className="relative z-10 grid gap-5 md:grid-cols-2">
                        {roleHighlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="rounded-2xl border border-white/10 bg-white/5 p-5 light:border-slate-200 light:bg-white/75"
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: 0.06 * index }}
                                whileHover={{ y: -4 }}
                            >
                                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-500/10 text-cyan-200 light:text-cyan-700">
                                    <item.icon size={16} />
                                </div>
                                <h3 className="font-display text-lg font-semibold text-white light:text-slate-900">{item.title}</h3>
                                <p className="mt-2 text-sm text-slate-300 light:text-slate-700">{item.detail}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.article>
            </div>
        </section>
    );
}
