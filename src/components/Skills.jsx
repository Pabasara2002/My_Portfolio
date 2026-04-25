import { motion } from "framer-motion";

import { skills } from "../data/skills";
import Reveal, { fadeUp, staggerContainer } from "./Reveal";

export default function Skills() {
  const groups = [
    {
      title: "Technical Toolkit",
      description: "Tools I use to explore, structure, and communicate insights.",
      items: skills.technical,
    },
    {
      title: "Business Analysis",
      description: "Methods I rely on to connect user needs with workable solutions.",
      items: skills.business,
    },
  ];

  return (
    <section id="skills" className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Skills
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            A balanced mix of analytical tools and business thinking
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            This portfolio combines technical analysis with process and decision-focused
            problem solving, making the work useful to both stakeholders and teams.
          </p>
        </Reveal>

        <motion.div
          className="mt-8 grid gap-5 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {groups.map((group) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-7"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-xl font-semibold text-white sm:text-2xl">{group.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{group.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
