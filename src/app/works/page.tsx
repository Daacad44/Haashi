import type { Metadata } from "next";
import { Header } from "@/components/hashitech/Header";
import { Footer } from "@/components/hashitech/Footer";
import { PageLayout } from "@/components/hashitech/PageLayout";
import { ProjectCard } from "@/components/hashitech/ProjectCard";
import { worksProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Works – Code With Haashi",
  description: "Portfolio of web design, mobile app, and branding projects by Mohamett Haashi.",
};

export default function WorksPage() {
  return (
    <>
      <Header />
      <main>
        <PageLayout>
          <section className="page-hero panel-dark">
            <h1 className="page-hero__title">My Projects</h1>
            <p className="page-hero__text">
              A selection of product design, web, and mobile projects delivered for clients.
            </p>
          </section>

          <div className="works-grid">
            {worksProjects.map((project) => (
              <ProjectCard key={`${project.title}-${project.date}`} project={project} />
            ))}
          </div>
        </PageLayout>
      </main>
      <Footer />
    </>
  );
}
