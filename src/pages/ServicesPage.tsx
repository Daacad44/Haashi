import { Link } from "react-router-dom";
import { CollaborateCta } from "@/components/hashitech/CollaborateCta";
import { Footer } from "@/components/hashitech/Footer";
import { Header } from "@/components/hashitech/Header";
import { PageLayout } from "@/components/hashitech/PageLayout";
import { PageMeta } from "@/components/hashitech/PageMeta";
import { ArrowIcon } from "@/components/hashitech/icons";
import { servicesList } from "@/lib/data";

export default function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Services – Code With Haashi"
        description="UI/UX design, branding, front-end development, Webflow, and mobile app design services."
      />
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
              <Link key={service.title} to={service.href} className="service-page-card service-item">
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
