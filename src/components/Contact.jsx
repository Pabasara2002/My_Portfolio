import { motion } from "framer-motion";

import Reveal, { fadeUp, staggerContainer } from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <motion.div
        className="mx-auto grid max-w-7xl gap-5 rounded-[2rem] border border-white/10 bg-white/5 p-5 sm:p-7 lg:grid-cols-[1.1fr_0.9fr] lg:p-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Contact
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Ready to collaborate on analysis, dashboards, or product-focused work
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            If you are looking for someone who can connect business needs with structured
            technical thinking, I would love to connect.
          </p>
        </Reveal>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.a
            href="mailto:pabasaradewmini21@gmail.com"
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:border-cyan-300/40 hover:bg-slate-900"
            whileHover={{ y: -5 }}
          >
            <p className="text-sm text-slate-400">Email</p>
            <p className="mt-2 break-all text-base font-medium text-white">
              pabasaradewmini21@gmail.com
            </p>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:border-cyan-300/40 hover:bg-slate-900"
            whileHover={{ y: -5 }}
          >
            <p className="text-sm text-slate-400">LinkedIn</p>
            <p className="mt-2 text-base font-medium text-white">Open profile</p>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
