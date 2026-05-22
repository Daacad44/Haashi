import type { Metadata } from "next";
import { Header } from "@/components/hashitech/Header";
import { Footer } from "@/components/hashitech/Footer";
import { PageLayout } from "@/components/hashitech/PageLayout";
import { CollaborateCta } from "@/components/hashitech/CollaborateCta";
import Image from "next/image";
import { aboutContent, testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "About – Code With Haashi",
  description: "Learn about Mohamett Haashi – front-end web developer and creative designer.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageLayout>
          <section className="page-hero panel-dark">
            <p className="page-hero__eyebrow">{aboutContent.animatedIntro}</p>
            <h1 className="page-hero__title">{aboutContent.role}</h1>
            <p className="page-hero__text">{aboutContent.description}</p>
          </section>

          <div className="stats-grid">
            {aboutContent.stats.map((stat) => (
              <div key={stat.title} className="stat-card achievements-section">
                <p className="stat-card__label">{stat.title}</p>
                <p className="stat-card__value">
                  {stat.value}
                  <span>{stat.suffix}</span>
                </p>
              </div>
            ))}
          </div>

          <section className="panel-dark section-block">
            <h2 className="section-title">Work Experience</h2>
            <div className="experience-list">
              {aboutContent.experienceAbout.map((exp) => (
                <div key={exp.company} className="work-item">
                  <div className="work-item-left">
                    <Image src={exp.image} alt={exp.company} width={40} height={40} />
                    <div>
                      <h3>{exp.company}</h3>
                      <p>{exp.role}</p>
                    </div>
                  </div>
                  <span className="work-date">{exp.date}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="panel-dark section-block">
            <h2 className="section-title">My Expertise Area</h2>
            <div className="expertise-grid">
              {aboutContent.expertiseAbout.map((item) => (
                <div key={item.name} className="expertise-item">
                  <Image src={item.image} alt={item.name} width={44} height={44} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="panel-dark section-block">
            <h2 className="section-title">What Clients Say!</h2>
            <div className="testimonials-grid">
              {testimonials.map((t) => (
                <blockquote key={t.name} className="testimonial-card">
                  <footer>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </footer>
                  <p>{t.text}</p>
                </blockquote>
              ))}
            </div>
          </section>

          <CollaborateCta />
        </PageLayout>
      </main>
      <Footer />
    </>
  );
}
