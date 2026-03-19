import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface StatItem {
    label: string;
    value: number;
    suffix: string;
    description: string;
}

const statItems: StatItem[] = [
    {
        label: "Projects Completed",
        value: 20,
        suffix: "+",
        description: "Web apps, business portals, and product modules delivered.",
    },
    {
        label: "Technologies Used",
        value: 18,
        suffix: "+",
        description: "A modern stack across frontend, backend, and databases.",
    },
    {
        label: "Experience",
        value: 1,
        suffix: "+ Years",
        description: "Hands-on professional delivery in production environments.",
    },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-120px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!isInView) {
            return;
        }

        let animationFrame = 0;
        const duration = 1300;
        const startTime = performance.now();

        const updateCount = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setDisplayValue(Math.round(value * progress));

            if (progress < 1) {
                animationFrame = window.requestAnimationFrame(updateCount);
            }
        };

        animationFrame = window.requestAnimationFrame(updateCount);

        return () => window.cancelAnimationFrame(animationFrame);
    }, [isInView, value]);

    return (
        <span ref={ref} className="font-display text-4xl font-semibold text-white light:text-slate-900 sm:text-5xl">
            {displayValue}
            {suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section id="stats" className="py-20 sm:py-24">
            <div className="section-shell">
                <AnimatedSection className="mx-auto mb-14 max-w-3xl text-center">
                    <span className="section-kicker">Stats</span>
                    <h2 className="section-title text-white light:text-slate-900">Built for Results</h2>
                    <p className="mt-4 text-slate-300 light:text-slate-700">
                        A quick snapshot of delivery depth, technical range, and real-world execution.
                    </p>
                </AnimatedSection>

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {statItems.map((item, index) => (
                        <motion.article
                            key={item.label}
                            className="glass-panel rounded-3xl p-6 text-center"
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.55, delay: index * 0.07 }}
                        >
                            <Counter value={item.value} suffix={item.suffix} />
                            <h3 className="mt-3 text-base font-semibold text-slate-100 light:text-slate-900">{item.label}</h3>
                            <p className="mt-2 text-sm text-slate-300 light:text-slate-700">{item.description}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
