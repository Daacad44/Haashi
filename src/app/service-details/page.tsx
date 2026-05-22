import type { Metadata } from "next";
import { Header } from "@/components/hashitech/Header";
import { Footer } from "@/components/hashitech/Footer";
import { PageLayout } from "@/components/hashitech/PageLayout";
import { CollaborateCta } from "@/components/hashitech/CollaborateCta";
import { serviceDetails } from "@/lib/data";

export const metadata: Metadata = {
  title: "Service Details – Code With Haashi",
  description: "Webflow design and development service details, pricing, and deliverables.",
};

export default function ServiceDetailsPage() {
  const d = serviceDetails;

  return (
    <>
      <Header />
      <main>
        <PageLayout>
          <section className="page-hero panel-dark">
            <p className="page-hero__eyebrow">{d.tag}</p>
            <h1 className="page-hero__title">{d.title}</h1>
            <p className="page-hero__meta">
              <span>{d.category}</span> · <span>{d.timeline}</span>
            </p>
            <p className="page-hero__text">{d.intro}</p>
          </section>

          <section className="panel-dark section-block">
            <h2 className="section-title">{d.analysis.title}</h2>
            <div className="detail-grid">
              <div className="detail-card">
                <h3>Performance</h3>
                <p>{d.analysis.performance}</p>
              </div>
              <div className="detail-card">
                <h3>Responsiveness</h3>
                <p>{d.analysis.responsiveness}</p>
              </div>
            </div>
          </section>

          <section className="panel-dark section-block">
            <h2 className="section-title">{d.improvement.title}</h2>
            <p className="section-text">{d.improvement.description}</p>
            <h3 className="section-subtitle">Site and Service Improvement</h3>
          </section>

          <section className="panel-dark section-block">
            <h2 className="section-title">Single services Pricing</h2>
            <div className="pricing-grid">
              {d.pricing.map((plan) => (
                <div key={plan.name} className="pricing-card">
                  <h3>{plan.name}</h3>
                  <p className="pricing-card__price">
                    {plan.price} <span>{plan.currency}</span>
                  </p>
                </div>
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
