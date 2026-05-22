import { ContactForm } from "@/components/hashitech/ContactForm";
import { Footer } from "@/components/hashitech/Footer";
import { Header } from "@/components/hashitech/Header";
import { PageLayout } from "@/components/hashitech/PageLayout";
import { PageMeta } from "@/components/hashitech/PageMeta";
import { contactInfo, site } from "@/lib/data";

export default function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact – Code With Haashi"
        description="Get in touch with Mohamett Haashi for web design and development projects."
      />
      <Header />
      <main>
        <PageLayout>
          <section className="page-hero panel-dark">
            <h1 className="page-hero__title">Contact With Me</h1>
            <p className="page-hero__text">
              Have a project in mind? Send a message or reach out directly — I&apos;d love to hear from you.
            </p>
          </section>

          <div className="contact-layout">
            <ContactForm />

            <div className="contact-info-stack">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact-info-card panel-dark">
                  <h3>{item.label}</h3>
                  {item.href ? (
                    <a href={item.href}>{item.value}</a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              ))}

              <div className="contact-map panel-dark">
                <iframe
                  title="Office location map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&t=m&z=15&output=embed&iwloc=near`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </PageLayout>
      </main>
      <Footer />
    </>
  );
}
