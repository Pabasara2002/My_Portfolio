import { motion } from "framer-motion";

import { volunteering } from "../data/highlights";
import Reveal, { fadeUp, staggerContainer } from "./Reveal";

export default function Volunteering() {
  return (
    <section id="volunteering" className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Volunteering
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Community and student-branch contributions
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            IEEE activities and support roles that strengthened teamwork, coordination, and
            event execution.
          </p>
        </Reveal>

        <motion.div
          className="mt-8 space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {volunteering.map((item) => (
            <motion.article
              key={`${item.event}-${item.role}`}
              variants={fadeUp}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6"
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">{item.event}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.organization}</p>
                </div>
                <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100">
                  {item.role}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
