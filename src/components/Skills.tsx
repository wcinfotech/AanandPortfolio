import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";
import type { IconType } from "react-icons";
import AnimatedSection from "./AnimatedSection";

interface Skill {
  name: string;
  level: number;
  icon: IconType;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

const skillGroups: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Crafting polished, fast, and responsive interfaces.",
    skills: [
      { name: "React.js", level: 92, icon: FaReact },
      { name: "HTML", level: 95, icon: FaHtml5 },
      { name: "CSS", level: 92, icon: FaCss3Alt },
      { name: "JavaScript", level: 90, icon: FaJs },
      { name: "Tailwind", level: 88, icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    description: "Building secure and scalable server-side systems.",
    skills: [
      { name: "Node.js", level: 88, icon: FaNodeJs },
      { name: "Express.js", level: 86, icon: SiExpress },
    ],
  },
  {
    title: "Database",
    description: "Data modeling and high-performance querying.",
    skills: [
      { name: "MongoDB", level: 88, icon: SiMongodb },
      { name: "MySQL", level: 80, icon: SiMysql },
    ],
  },
  {
    title: "Tools",
    description: "Workflow, collaboration, and API testing toolkit.",
    skills: [
      { name: "Git", level: 87, icon: FaGitAlt },
      { name: "Firebase", level: 78, icon: SiFirebase },
      { name: "Postman", level: 84, icon: SiPostman },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="section-shell">
        <AnimatedSection className="mx-auto mb-14 max-w-3xl text-center">
          <span className="section-kicker">Skills</span>
          <h2 className="section-title text-white light:text-slate-900">Tech Stack & Expertise</h2>
          <p className="mt-4 text-slate-300 light:text-slate-700">
            End-to-end capability across frontend, backend, data, and modern development workflows.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <AnimatedSection key={group.title} delay={groupIndex * 0.08}>
              <article className="glass-panel rounded-3xl p-6 sm:p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-500/10 text-cyan-200 light:text-cyan-700">
                    <FaDatabase size={14} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white light:text-slate-900">{group.title}</h3>
                    <p className="text-sm text-slate-300 light:text-slate-700">{group.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between text-sm text-slate-200 light:text-slate-700">
                        <span className="inline-flex items-center gap-2 font-medium">
                          <skill.icon className="text-cyan-300 light:text-cyan-700" />
                          {skill.name}
                        </span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10 light:bg-slate-200">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
