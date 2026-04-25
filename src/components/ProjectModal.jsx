import { AnimatePresence, motion } from "framer-motion";

export default function ProjectModal({ project, close }) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/80 p-3 sm:p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative my-auto max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/40"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-3 top-3 z-10 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 sm:right-4 sm:top-4"
            >
              Close
            </button>

            <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:p-8">
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full rounded-2xl object-cover sm:h-72 lg:h-80"
                />
              </motion.div>

              <motion.div
                className="pt-6 sm:pt-8 lg:pt-0"
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.12 }}
              >
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <motion.span
                      key={tool}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>

                <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{project.title}</h2>

                <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
                  <p>
                    <span className="font-semibold text-white">Problem:</span> {project.problem}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Role:</span> {project.role}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Impact:</span> {project.impact}
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View GitHub Project
                  </motion.a>
                  <motion.button
                    type="button"
                    onClick={close}
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Back to Projects
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
