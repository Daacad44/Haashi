import { collaborate, site } from "@/lib/data";

export function CollaborateCta({ buttonText = "Let's Talk With Us" }: { buttonText?: string }) {
  return (
    <section className="collaborate-cta panel-dark">
      <h2 className="collaborate-cta__title">
        {collaborate.title.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i === 0 && <br />}
          </span>
        ))}
      </h2>
      <p className="collaborate-cta__text">{collaborate.description}</p>
      <a
        href={site.whatsapp}
        className="btn-el btn-shadow btn-gradient collaborate-cta__btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonText}
      </a>
    </section>
  );
}
