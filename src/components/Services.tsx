import { motion } from "framer-motion";
import { FaBrain, FaChartLine, FaCode, FaRocket, FaServer } from "react-icons/fa";
import type { IconType } from "react-icons";
import AnimatedSection from "./AnimatedSection";

interface ServiceItem {
    title: string;
    description: string;
    icon: IconType;
    accent: string;
}

const services: ServiceItem[] = [
    {
        title: "Full Stack Web Development",
        description: "Designing and delivering complete web applications from polished UI to robust backend architecture.",
        icon: FaCode,
        accent: "from-sky-500/20 to-cyan-500/5",
    },
    {
        title: "SaaS Development",
        description: "Building modern SaaS products with scalable architecture, subscription-ready flows, and secure operations.",
        icon: FaRocket,
        accent: "from-indigo-500/25 to-sky-500/5",
    },
    {
        title: "API Development",
        description: "Creating clean, documented, and high-performance APIs that power reliable multi-platform products.",
        icon: FaServer,
        accent: "from-cyan-500/20 to-indigo-500/8",
    },
    {
        title: "AI Integration",
        description: "Integrating AI-powered capabilities and automation pipelines into business-ready web experiences.",
        icon: FaBrain,
        accent: "from-violet-500/20 to-sky-500/8",
    },
    {
        title: "Dashboard Development",
        description: "Crafting data-driven dashboards with role-based views, analytics clarity, and conversion-focused UX.",
        icon: FaChartLine,
        accent: "from-teal-500/18 to-indigo-500/8",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 sm:py-24">
            <div className="section-shell">
                <AnimatedSection className="mx-auto mb-14 max-w-3xl text-center">
                    <span className="section-kicker">Services</span>
                    <h2 className="section-title text-white light:text-slate-900">High-Impact Development Services</h2>
                    <p className="mt-4 text-slate-300 light:text-slate-700">
                        Premium engineering support for teams and founders building ambitious digital products.
                    </p>
                </AnimatedSection>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.title}
                            className="glass-panel relative overflow-hidden rounded-3xl p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.55, delay: index * 0.07 }}
                            whileHover={{ y: -7 }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.accent}`} />
                            <div className="relative z-10">
                                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/40 bg-cyan-500/10 text-cyan-200 light:text-cyan-700">
                                    <service.icon size={18} />
                                </div>
                                <h3 className="font-display text-xl font-semibold text-white light:text-slate-900">{service.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-300 light:text-slate-700">{service.description}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
