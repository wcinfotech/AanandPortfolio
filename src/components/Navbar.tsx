import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#current-role", label: "Current Role" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#process", label: "Process" },
  { href: "#services", label: "Services" },
  { href: "#stats", label: "Stats" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-4">
        <nav className="glass-panel rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="group inline-flex items-center gap-2" aria-label="Go to home section">
              <span className="font-display text-lg font-semibold tracking-wide text-white transition group-hover:text-sky-300 light:text-slate-900 light:group-hover:text-sky-700">
                Aanand Palan
              </span>
              <span className="hidden rounded-full border border-sky-300/35 bg-sky-500/10 px-2 py-0.5 text-xs text-sky-200 sm:inline light:border-sky-500/30 light:text-sky-700">
                MERN
              </span>
            </a>

            <div className="hidden items-center gap-4 lg:flex">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white light:text-slate-700 light:hover:bg-slate-900/5 light:hover:text-slate-900"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {/*
              <button
                type="button"
                onClick={onToggleTheme}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sky-100 transition hover:scale-105 hover:border-sky-300/45 hover:text-sky-200 light:border-slate-200 light:bg-white/80 light:text-slate-700 light:hover:border-sky-400/60"
                aria-label="Toggle dark and light mode"
              >
                {theme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
              </button>
              */}

              <button
                type="button"
                onClick={() => setIsOpen((prevState) => !prevState)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-slate-100 transition hover:border-sky-300/45 lg:hidden light:border-slate-200 light:bg-white/80 light:text-slate-700"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
                className="mt-3 rounded-2xl border border-white/10 bg-slate-950/90 p-3 light:border-slate-200 light:bg-white"
              >
                <ul className="space-y-1">
                  {navLinks.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={closeMenu}
                        className="block rounded-xl px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white light:text-slate-700 light:hover:bg-slate-100"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
