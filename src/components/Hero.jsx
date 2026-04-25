import { motion } from "framer-motion";

import Reveal, { fadeUp, staggerContainer } from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-10 pt-1 sm:px-6 sm:pb-14 sm:pt-3 lg:px-8 lg:pb-16 lg:pt-3"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),_transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-56 bg-gradient-to-b from-cyan-400/10 to-transparent blur-2xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:min-h-[calc(100svh-88px)] lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10 xl:gap-14">
        <motion.div
          className="order-2 text-center lg:order-1 lg:text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 inline-flex max-w-full self-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-[11px] font-medium text-cyan-200 sm:px-4 sm:text-sm lg:self-start"
          >
            Business Analyst | Software Engineering Undergraduate
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mx-auto max-w-[14ch] text-[2.15rem] font-bold leading-[1] tracking-tight text-white min-[420px]:text-[2.9rem] lg:mx-0 lg:max-w-[12ch] lg:text-[3.8rem] xl:text-[4.2rem]"
          >
            Turning data, process insight into practical solutions.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-300 sm:text-base sm:leading-7 lg:mx-0 lg:max-w-[36rem] lg:text-lg"
          >
            I am Pabasara Dewmini, a business analyst focused on improving decision-making
            with dashboards, structured requirements, and user-centered problem solving.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-col items-stretch gap-3 min-[480px]:flex-row min-[480px]:justify-center lg:justify-start"
          >
            <motion.a
              href="#projects"
              className="w-full rounded-full bg-cyan-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 min-[480px]:w-auto"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="/cv.pdf"
              download
              className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 min-[480px]:w-auto"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="mt-7 grid grid-cols-1 gap-3 text-left min-[460px]:grid-cols-2 xl:grid-cols-3"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 xl:col-auto"
            >
              <p className="text-xl font-bold text-white sm:text-2xl">2+</p>
              <p className="mt-1 text-xs leading-5 text-slate-300 sm:text-sm">Analytics and dashboard case studies</p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xl font-bold text-white sm:text-2xl">4</p>
              <p className="mt-1 text-xs leading-5 text-slate-300 sm:text-sm">Core business analysis capabilities</p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xl font-bold text-white sm:text-2xl">100%</p>
              <p className="mt-1 text-xs leading-5 text-slate-300 sm:text-sm">Responsive-first redesign focus</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <Reveal className="order-1 flex justify-center self-center lg:order-2 lg:justify-end" delay={0.2}>
          <motion.div
            className="relative w-full max-w-[12.5rem] min-[420px]:max-w-[14rem] sm:max-w-[16rem] lg:max-w-[16.5rem] xl:max-w-[18rem]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 scale-95 rounded-[2rem] bg-cyan-400/20 blur-3xl" />
            <motion.div
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-cyan-950/30 backdrop-blur"
              whileHover={{ rotate: -1.5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
            >
              <img
                src="/profile.png"
                alt="Portrait of Pabasara Dewmini"
                className="aspect-[4/5] w-full rounded-[1.6rem] object-cover object-top"
              />
            </motion.div>
          </motion.div>
        </Reveal>
      </div>

      <Reveal className="mx-auto mt-6 max-w-7xl lg:-mt-2" delay={0.3}>
        <div className="grid gap-3 rounded-[2rem] border border-white/10 bg-white/5 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-3">
          <div className="rounded-2xl bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Focus</p>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              Requirements engineering, dashboards, and practical business insight.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Strength</p>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              Translating data and stakeholder needs into clear system direction.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-900/60 p-4 sm:col-span-2 lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Goal</p>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              Building portfolio work that stays polished on desktop, tablet, and mobile.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
