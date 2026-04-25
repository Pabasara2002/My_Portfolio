import { motion } from "framer-motion";

import { fadeUp } from "./Reveal";

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.button
      type="button"
      variants={fadeUp}
      onClick={onClick}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
      whileHover={{ y: -8, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div className="overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-52"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.45 }}
        />
      </motion.div>
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <motion.span
              key={tool}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100"
              whileHover={{ y: -2 }}
            >
              {tool}
            </motion.span>
          ))}
        </div>
        <h3 className="mt-4 text-lg font-semibold text-white sm:text-xl">{project.title}</h3>
        <motion.p
          className="mt-3 text-sm leading-6 text-slate-300"
          initial={{ opacity: 0.85 }}
          whileHover={{ opacity: 1 }}
        >
          {project.problem}
        </motion.p>
        <motion.div
          className="mt-5 inline-flex items-center text-sm font-medium text-cyan-300"
          whileHover={{ x: 4 }}
        >
          View details
        </motion.div>
      </div>
    </motion.button>
  );
}
