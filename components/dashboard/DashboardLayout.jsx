"use client";

import ProfessionalHeader from "./ProfessionalHeader";
import ProjectCatalog from "./ProjectCatalog";
import TechContactPanel from "./TechContactPanel";

export default function DashboardLayout({ onLogout, projects, renderProject }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#0b0f14] text-slate-100">
      <ProfessionalHeader onLogout={onLogout} />

      <div className="mx-auto flex w-full max-w-[1400px] flex-col lg:flex-row lg:items-start">
        <div className="w-full shrink-0 lg:sticky lg:top-0 lg:h-screen lg:w-[300px] lg:overflow-y-auto xl:w-[320px]">
          <TechContactPanel onLogout={onLogout} />
        </div>

        <main className="min-w-0 flex-1 px-4 py-6 md:px-8 md:py-8">
          <ProjectCatalog projects={projects} renderProject={renderProject} />
        </main>
      </div>
    </div>
  );
}
