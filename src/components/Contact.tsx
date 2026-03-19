import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";

interface ContactFormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;

const initialFormData: ContactFormState = {
  name: "",
  email: "",
  projectType: "Full Stack Web Development",
  message: "",
};

const validateForm = (values: ContactFormState): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please share your project goals.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Message should be at least 20 characters.";
  }

  return errors;
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormState>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    const fieldName = name as keyof ContactFormState;

    setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
    setIsSubmitted(false);

    setErrors((prevErrors) => {
      if (!prevErrors[fieldName]) {
        return prevErrors;
      }

      const nextErrors = { ...prevErrors };
      delete nextErrors[fieldName];
      return nextErrors;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      setFormData(initialFormData);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="section-shell">
        <AnimatedSection className="mx-auto mb-14 max-w-3xl text-center">
          <span className="section-kicker">Contact</span>
          <h2 className="section-title text-white light:text-slate-900">Let&apos;s build something amazing</h2>
          <p className="mt-4 text-slate-300 light:text-slate-700">
            Open to full-stack opportunities, freelance projects, and product collaborations.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <AnimatedSection className="glass-panel rounded-3xl p-6 sm:p-8" delay={0.05}>
            <h3 className="font-display text-2xl font-semibold text-white light:text-slate-900">Get in touch</h3>
            <p className="mt-3 text-slate-300 light:text-slate-700">
              Reach out directly or send your project details using the form.
            </p>

            <div className="mt-6 space-y-4 text-sm">
              <a
                href="mailto:aanand.palan8@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-sky-300/40 light:border-slate-200 light:bg-white/75 light:text-slate-700"
              >
                <FaEnvelope className="text-cyan-300 light:text-cyan-700" />
                aanand.palan8@gmail.com
              </a>
              <a
                href="tel:+918460395732"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-sky-300/40 light:border-slate-200 light:bg-white/75 light:text-slate-700"
              >
                <FaPhone className="text-cyan-300 light:text-cyan-700" />
                +91 84603 95732
              </a>
              <a
                href="https://www.linkedin.com/in/aanand-palan-8804471b1/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-sky-300/40 light:border-slate-200 light:bg-white/75 light:text-slate-700"
              >
                <FaLinkedin className="text-cyan-300 light:text-cyan-700" />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/wcinfotech"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-sky-300/40 light:border-slate-200 light:bg-white/75 light:text-slate-700"
              >
                <FaGithub className="text-cyan-300 light:text-cyan-700" />
                GitHub / wcinfotech
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-200 light:border-slate-200 light:bg-white/75 light:text-slate-700">
                <FaMapMarkerAlt className="text-cyan-300 light:text-cyan-700" />
                Surat, India
              </div>

              <a
                href="https://wa.me/918460395732"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-300/35 bg-emerald-500/10 p-3 font-semibold text-emerald-200 transition hover:bg-emerald-500/20 light:border-emerald-500/35 light:text-emerald-700"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <motion.form
              onSubmit={handleSubmit}
              className="glass-panel rounded-3xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm text-slate-200 light:text-slate-700">Name</span>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleFieldChange}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-slate-100 outline-none transition focus:border-cyan-300/60 light:border-slate-300 light:bg-white/80 light:text-slate-900"
                    placeholder="Your name"
                  />
                  {errors.name ? <span className="mt-1 block text-xs text-rose-300">{errors.name}</span> : null}
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm text-slate-200 light:text-slate-700">Email</span>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleFieldChange}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-slate-100 outline-none transition focus:border-cyan-300/60 light:border-slate-300 light:bg-white/80 light:text-slate-900"
                    placeholder="you@company.com"
                  />
                  {errors.email ? <span className="mt-1 block text-xs text-rose-300">{errors.email}</span> : null}
                </label>
              </div>

              <label className="mt-4 block">
                <span className="mb-2 block text-sm text-slate-200 light:text-slate-700">Service needed</span>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleFieldChange}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-slate-100 outline-none transition focus:border-cyan-300/60 light:border-slate-300 light:bg-white/80 light:text-slate-900"
                >
                  <option className="bg-slate-900 text-slate-100">Full Stack Web Development</option>
                  <option className="bg-slate-900 text-slate-100">SaaS Development</option>
                  <option className="bg-slate-900 text-slate-100">API Development</option>
                  <option className="bg-slate-900 text-slate-100">AI Integration</option>
                  <option className="bg-slate-900 text-slate-100">Dashboard Development</option>
                </select>
              </label>

              <label className="mt-4 block">
                <span className="mb-2 block text-sm text-slate-200 light:text-slate-700">Project details</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFieldChange}
                  rows={5}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/60 light:border-slate-300 light:bg-white/80 light:text-slate-900"
                  placeholder="Tell me what you are building and the timeline."
                />
                {errors.message ? <span className="mt-1 block text-xs text-rose-300">{errors.message}</span> : null}
              </label>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
                >
                  Let&apos;s build something amazing
                </button>
                {isSubmitted ? (
                  <span className="text-sm font-medium text-emerald-300 light:text-emerald-700">
                    Message validated! I&apos;ll get back to you shortly.
                  </span>
                ) : null}
              </div>
            </motion.form>
          </AnimatedSection>
        </div>

        <a
          href="https://wa.me/918460395732"
          target="_blank"
          rel="noreferrer"
          aria-label="Open WhatsApp chat"
          className="fixed bottom-6 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-emerald-300/50 bg-emerald-500 text-white shadow-lg transition hover:scale-105 hover:bg-emerald-400"
        >
          <FaWhatsapp size={22} />
        </a>
      </div>
    </section>
  );
}
