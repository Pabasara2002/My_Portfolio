import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import Reveal, { staggerContainer } from "../components/Reveal";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Projects
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Case studies for analysis, dashboards, and product-focused work
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Projects that connect business needs with structured analysis, dashboards, and
              practical product thinking.
            </p>
          </div>
          <a
            href="#contact"
            className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
          >
            Let&apos;s discuss a project
          </a>
        </Reveal>

        <motion.div
          className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => setSelected(project)}
            />
          ))}
        </motion.div>

        <ProjectModal project={selected} close={() => setSelected(null)} />
      </div>
    </section>
  );
}
