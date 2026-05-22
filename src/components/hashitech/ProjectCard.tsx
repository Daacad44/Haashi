import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./icons";

export type Project = {
  title: string;
  date: string;
  image: string;
  href: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link href={project.href}>
        <Image src={project.image} alt={project.title} width={332} height={184} />
      </Link>
      <div className="project-card-footer">
        <div>
          <h3>{project.title}</h3>
          <p className="date">{project.date}</p>
        </div>
        <Link href={project.href} className="btn-arrow" aria-label={`View ${project.title}`}>
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}
