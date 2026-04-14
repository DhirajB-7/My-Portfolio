import ProjectCard from "../components/ProjectCard";
import SectionIntro from "../components/SectionIntro";
import { projects } from "../data/siteData";

export default function ProjectsPage() {
  return (
    <section className="section panel">
      <SectionIntro
        eyebrow="Portfolio"
        title="Interactive projects with real-world intent"
        text="Each project is crafted to balance product goals, responsive design behavior, and implementation quality."
      />

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
