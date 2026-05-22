import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/hashitech/Header";
import { Footer } from "@/components/hashitech/Footer";
import { PageLayout } from "@/components/hashitech/PageLayout";
import { CollaborateCta } from "@/components/hashitech/CollaborateCta";
import { servicesList } from "@/lib/data";
import { ArrowIcon } from "@/components/hashitech/icons";

export const metadata: Metadata = {
  title: "Services – Code With Haashi",
  description: "UI/UX design, branding, front-end development, Webflow, and mobile app design services.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageLayout>
          <section className="page-hero panel-dark">
            <h1 className="page-hero__title">Services I Offered</h1>
            <p className="page-hero__text">
              Professional design and development services tailored to help your brand grow online.
            </p>
          </section>

          <div className="services-page-grid">
            {servicesList.map((service) => (
              <Link key={service.title} href={service.href} className="service-page-card service-item">
                <div className="service-page-card__head">
                  <span className="service-page-card__emoji">{service.emoji}</span>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
                <span className="service-page-card__link">
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>

          <CollaborateCta />
        </PageLayout>
      </main>
      <Footer />
    </>
  );
}
