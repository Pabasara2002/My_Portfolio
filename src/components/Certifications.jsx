import { motion } from "framer-motion";

import { certifications } from "../data/highlights";
import Reveal, { fadeUp, staggerContainer } from "./Reveal";

export default function Certifications() {
  return (
    <section id="certifications" className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Certifications
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Learning milestones and professional development
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            Certifications that support my growth in analytics, visualization, automation, and
            business-focused technical work.
          </p>
        </Reveal>

        <motion.div
          className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {certifications.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-0"
              whileHover={{ y: -6 }}
            >
              <div className="p-3 sm:p-4">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={`${item.title} certificate`}
                    className="aspect-[4/3] w-full rounded-2xl object-cover object-top"
                  />
                ) : (
                  <div
                    className={`relative flex aspect-[4/3] w-full items-end overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-5 bg-gradient-to-br ${item.accent}`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_32%)]" />
                    <div className="relative">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200">
                        Certificate Preview
                      </p>
                      <p className="mt-3 max-w-[14rem] text-lg font-semibold leading-6 text-white">
                        {item.issuer}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="px-6 pb-6 pt-2">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  Certificate
                </p>
                <h3 className="mt-3 text-base font-semibold text-white sm:text-lg lg:text-xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{item.issuer}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
