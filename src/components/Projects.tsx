import { useEffect, useState, type MouseEvent } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
interface Project {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubLink: string;
  liveLink: string;
  image: string;
  showcaseCards?: ProjectShowcaseCard[];
}

interface ProjectShowcaseCard {
  title: string;
  subtitle: string;
  image: string;
}

const projectAsset = (path: string) => {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return `${base}${path.replace(/^\/+/, "")}`;
};

const projects: Project[] = [
  {
    title: "Grocery Shopping Mart (Full Stack MERN App)",
    description:
      "A full-stack commerce platform focused on reliability, smooth checkout, and admin-driven operations.",
    highlights: [
      "Authentication + Admin Panel",
      "REST API + Database Integration",
      "Scalable architecture for product growth",
    ],
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    githubLink: "https://github.com/wcinfotech",
    liveLink: "https://wcinfotech.github.io/aanand-portfolio/",
    image: projectAsset("projects/grocery-shopping-mart.svg"),
  },
  {
    title: "WC Chat App",
    description:
      "A responsive real-time messaging experience with fast communication, clean UX, and scalable backend flow.",
    highlights: [
      "Realtime message delivery",
      "Conversation-first responsive interface",
      "Socket-ready scalable backend design",
    ],
    technologies: ["React", "Node.js", "Socket.IO", "MongoDB"],
    githubLink: "https://github.com/wcinfotech",
    liveLink: "https://wcinfotech.github.io/aanand-portfolio/",
    image: projectAsset("projects/wc-chat-app.svg"),
  },
  {
    title: "Sports Management System",
    description:
      "A modular sports operations dashboard to manage teams, schedules, analytics, and role-based workflows.",
    highlights: [
      "Team and player management",
      "Scheduling + reporting dashboards",
      "Modular role-based architecture",
    ],
    technologies: ["React", "Express", "MongoDB"],
    githubLink: "https://github.com/wcinfotech",
    liveLink: "https://wcinfotech.github.io/aanand-portfolio/",
    image: projectAsset("projects/sports-management.svg"),
  },
  {
    title: "Matelmobile",
    description:
      "A freelance commerce-focused website with a conversion-first layout and responsive product discovery experience.",
    highlights: [
      "Responsive storefront interface",
      "Dynamic product section architecture",
      "Speed-focused modern web UX",
    ],
    technologies: ["React", "JavaScript", "CSS"],
    githubLink: "https://github.com/wcinfotech",
    liveLink: "https://wcinfotech.github.io/aanand-portfolio/",
    image: projectAsset("projects/matelmobile.svg"),
  },
  {
    title: "Dignity Academy",
    description:
      "An education platform crafted for clarity, trust, and inquiry conversion with robust mobile-first delivery.",
    highlights: [
      "Educational UX for clear communication",
      "Structured content + contact funnels",
      "Performance-aware responsive layout",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/wcinfotech",
    liveLink: "https://dignity-academy.vercel.app/",
    image: projectAsset("projects/dignity-academy.svg"),
    showcaseCards: [
      {
        title: "Hero Section",
        subtitle: "Landing banner with inquiry-first CTA",
        image: projectAsset("projects/dignity-home.png"),
      },
      {
        title: "Events Highlight",
        subtitle: "Academic and cultural event cards",
        image: projectAsset("projects/dignity-events.png"),
      },
      {
        title: "Courses Grid",
        subtitle: "Program cards grouped by standards",
        image: projectAsset("projects/dignity-courses.png"),
      },
    ],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [8, -8]), {
    stiffness: 220,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 220,
    damping: 24,
  });
  const glowX = useTransform(pointerX, [-0.5, 0.5], ["20%", "80%"]);
  const glowY = useTransform(pointerY, [-0.5, 0.5], ["20%", "80%"]);
  const spotlight = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, rgba(56, 189, 248, 0.25), transparent 48%)`;
  const showcaseCards = project.showcaseCards ?? [];
  const [activeShowcaseIndex, setActiveShowcaseIndex] = useState(0);
  const [pauseAutoplay, setPauseAutoplay] = useState(false);

  useEffect(() => {
    setActiveShowcaseIndex(0);
  }, [showcaseCards.length]);

  useEffect(() => {
    if (showcaseCards.length < 2 || pauseAutoplay) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveShowcaseIndex((currentIndex) => (currentIndex + 1) % showcaseCards.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, [showcaseCards.length, pauseAutoplay]);

  const normalizedShowcaseIndex = showcaseCards.length > 0 ? activeShowcaseIndex % showcaseCards.length : 0;
  const activeShowcaseCard = showcaseCards[normalizedShowcaseIndex];

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const nextX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const nextY = (event.clientY - bounds.top) / bounds.height - 0.5;
    pointerX.set(nextX);
    pointerY.set(nextY);
  };

  const resetTilt = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.article
      className="group glass-panel relative overflow-hidden rounded-3xl p-5 sm:p-6"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      whileHover={{ y: -8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: spotlight }} />

      <div className="relative z-10">
        <div
          className="mb-5 overflow-hidden rounded-2xl border border-white/10"
          onMouseEnter={() => setPauseAutoplay(true)}
          onMouseLeave={() => setPauseAutoplay(false)}
        >
          {activeShowcaseCard ? (
            <div className="relative h-44 w-full sm:h-48">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeShowcaseCard.title}
                  initial={{ opacity: 0, x: 52, scale: 0.985 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -52, scale: 0.985 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeShowcaseCard.image}
                    alt={`${project.title} ${activeShowcaseCard.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-900/55 to-transparent px-3 pb-3 pt-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200">
                      {activeShowcaseCard.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-100/95">{activeShowcaseCard.subtitle}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-2 right-2 z-20 flex gap-1.5 rounded-full bg-slate-950/60 px-2 py-1 backdrop-blur-sm">
                {showcaseCards.map((showcaseCard, showcaseIndex) => {
                  const isActive = showcaseIndex === normalizedShowcaseIndex;

                  return (
                    <button
                      type="button"
                      key={`${project.title}-${showcaseCard.title}`}
                      aria-label={`Show ${showcaseCard.title}`}
                      onClick={() => setActiveShowcaseIndex(showcaseIndex)}
                      className={`h-1.5 rounded-full transition-all ${isActive ? "w-6 bg-cyan-300" : "w-2 bg-white/45 hover:bg-white/70"
                        }`}
                    />
                  );
                })}
              </div>
            </div>
          ) : (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
              className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          )}
        </div>

        <h3 className="font-display text-xl font-semibold text-white light:text-slate-900">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300 light:text-slate-700">{project.description}</p>

        <ul className="mt-4 space-y-1.5 text-sm text-slate-300 light:text-slate-700">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={`${project.title}-${tech}`}
              className="rounded-full border border-cyan-300/35 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-100 light:border-cyan-600/30 light:text-cyan-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.02]"
          >
            Live Demo
            <FaExternalLinkAlt size={12} />
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-sky-300/45 hover:text-white light:border-slate-300 light:bg-white/70 light:text-slate-700"
          >
            GitHub
            <FaGithub size={14} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="section-shell">
        <AnimatedSection className="mx-auto mb-14 max-w-3xl text-center">
          <span className="section-kicker">Projects</span>
          <h2 className="section-title text-white light:text-slate-900">Featured Work</h2>
          <p className="mt-4 text-slate-300 light:text-slate-700">
            Full-stack products with real-world system thinking, API depth, and modern interface quality.
          </p>
        </AnimatedSection>

        <div className="mb-8 flex items-center justify-end">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100 light:text-cyan-700"
          >
            Need something similar?
            <FaArrowRight size={12} />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
