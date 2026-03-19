export default function Footer() {
  return (
    <footer className="py-8">
      <div className="section-shell">
        <div className="glass-panel rounded-2xl px-5 py-4 sm:flex sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm text-slate-200 light:text-slate-700">
            © {new Date().getFullYear()} Aanand Palan. Crafted for impactful products.
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.16em] text-cyan-200 light:text-cyan-700 sm:mt-0">
            Full Stack Developer • MERN Stack
          </p>
        </div>
      </div>
    </footer>
  );
}
