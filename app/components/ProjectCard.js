import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          width={800}
          height={500}
          className="project-image"
          priority={false}
        />
      </div>
      <div className="project-content">
        <p className="project-kicker">Featured Build</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <p className="project-impact">{project.impact}</p>
        <div className="project-tags">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <Link href={project.href} className="button button-secondary" target="_blank">
          View Live
        </Link>
      </div>
    </article>
  );
}
