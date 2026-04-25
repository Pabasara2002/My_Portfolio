import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

export default function CaseStudies() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Data", "AI", "Web"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tools.includes(filter));

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-6">Case Studies</h2>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 border rounded ${
              filter === cat ? "bg-blue-600 text-white" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredProjects.map((p, i) => (
          <ProjectCard
            key={i}
            project={p}
            onClick={() => setSelected(p)}
          />
        ))}
      </div>

      {/* Modal */}
      <ProjectModal project={selected} close={() => setSelected(null)} />
    </section>
  );
}