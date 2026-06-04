"use client";

import { motion } from "framer-motion";
import { SOLUTIONS } from "../../data/portfolioProfile";
import ProjectSolutionCard from "./ProjectSolutionCard";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function ProjectCatalog({ projects = SOLUTIONS, renderProject }) {
  return (
    <section>
      <div className="mb-6">
        <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Portfolio</p>
        <h2 className="mt-1 text-xl font-semibold text-white md:text-2xl">Catálogo de soluciones</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          Proyectos reales orientados a impacto de negocio: automatización, reservas y operaciones críticas.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-2"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            {renderProject ? renderProject(project) : <ProjectSolutionCard project={project} />}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
