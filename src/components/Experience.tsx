import AnimatedSection from "./AnimatedSection";

const experienceData = [
  {
    period: "Jan 2026 - Present",
    position: "Full Stack Developer",
    company: "LogicGo Infotech",
    location: "Surat, India",
    type: "Current",
    responsibilities: [
      "Developing and deploying MERN stack features for production applications.",
      "Designing and integrating scalable REST APIs for web and mobile clients.",
      "Implementing real-time capabilities for faster, interactive user workflows.",
      "Improving system structure for performance, maintainability, and scale.",
    ],
  },
  {
    period: "Jan 2025 - July 2025",
    position: "Frontend Developer",
    company: "Tecnologia Mexicana",
    location: "Remote",
    type: "Previous",
    responsibilities: [
      "Worked on USICAMM platform for the Government of Mexico (SEP).",
      "Built responsive UI modules with strong accessibility and performance practices.",
      "Collaborated with cross-functional teams to deliver stable production features.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="section-shell">
        <AnimatedSection className="mx-auto mb-14 max-w-3xl text-center">
          <span className="section-kicker">Experience</span>
          <h2 className="section-title text-white light:text-slate-900">Professional Journey</h2>
          <p className="mt-4 text-slate-300 light:text-slate-700">
            Product-focused full-stack experience across startup and international project delivery.
          </p>
        </AnimatedSection>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-[13px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-sky-400/80 via-cyan-400/40 to-transparent" />

          <div className="space-y-8">
            {experienceData.map((item, index) => (
              <AnimatedSection key={item.company} delay={0.1 * index} className="relative pl-12">
                <span className="absolute left-0 top-7 inline-flex h-7 w-7 items-center justify-center rounded-full border border-sky-300/50 bg-sky-400/20">
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-300" />
                </span>

                <article className="glass-panel rounded-3xl p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white light:text-slate-900">{item.position}</h3>
                      <p className="mt-1 text-sm text-slate-300 light:text-slate-700">
                        {item.company} • {item.location}
                      </p>
                    </div>
                    <div className="space-y-2 text-right">
                      <p className="text-sm font-medium text-cyan-200 light:text-cyan-700">{item.period}</p>
                      <span className="inline-flex rounded-full border border-sky-300/35 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-100 light:border-sky-500/35 light:text-sky-700">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm text-slate-300 light:text-slate-700 sm:text-base">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
