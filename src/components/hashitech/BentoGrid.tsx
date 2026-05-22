import { Link } from "react-router-dom";
import {
  profile,
  socialLinks,
  projects,
  services,
  expertise,
  experience,
  cta,
  site,
} from "@/lib/data";
import { ServiceIcon } from "./icons";
import { ProjectCard } from "./ProjectCard";
import { SiteImage } from "./SiteImage";

export function BentoGrid() {
  return (
    <div className="bento-wrap">
      <div className="bento-row">
        <div className="bento-col-profile">
          <div className="card-profile">
            <div className="profile-img-wrap">
              <SiteImage
                src={profile.image}
                alt={profile.name}
                width={200}
                height={124}
                className="profile-img"
                priority
              />
            </div>
            <h2>
              {profile.name} <span role="img" aria-label="wave">👋</span>
            </h2>
            <p className="bio">{profile.bio}</p>
            <div className="btn-row">
              <a href={site.phone} className="btn-el btn-shadow btn-shadow--light">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" style={{ marginRight: 4 }}>
                  <path
                    d="M12.9104 4.86696C13.6586 5.00354 14.3462 5.34592 14.8852 5.85028C15.4242 6.35463 15.7901 6.99801 15.9361 7.69808M12.9104 2C14.4648 2.16158 15.9143 2.81291 17.0209 3.84704C18.1275 4.88118 18.8254 6.23665 19 7.69091M18.234 13.4105V15.5607C18.2349 15.7603 18.1912 15.9579 18.1057 16.1408C18.0203 16.3237 17.8949 16.4879 17.7377 16.6228C17.5805 16.7578 17.3949 16.8605 17.1928 16.9244C16.9908 16.9884 16.7766 17.0121 16.5642 16.9942C14.2071 16.7545 11.943 16.0009 9.95371 14.7938C8.10295 13.6934 6.53384 12.2251 5.35779 10.4934C4.06326 8.62353 3.25765 6.49467 3.00622 4.27923C2.98708 4.08103 3.01225 3.88127 3.08014 3.69267C3.14802 3.50407 3.25713 3.33076 3.40052 3.18378C3.54391 3.0368 3.71843 2.91937 3.91298 2.83896C4.10753 2.75855 4.31785 2.71693 4.53053 2.71674H6.82849C7.20022 2.71332 7.56061 2.83649 7.84247 3.06331C8.12433 3.29012 8.30843 3.6051 8.36046 3.94953C8.45745 4.63765 8.63732 5.31329 8.89665 5.96357C8.99971 6.22011 9.02201 6.49891 8.96092 6.76695C8.89983 7.03498 8.7579 7.28101 8.55195 7.47589L7.57915 8.38614C8.66958 10.1805 10.2574 11.6663 12.1751 12.6866L13.1479 11.7763C13.3561 11.5836 13.6191 11.4508 13.9055 11.3936C14.192 11.3365 14.4899 11.3574 14.7641 11.4538C15.4591 11.6964 16.1811 11.8648 16.9165 11.9555C17.2886 12.0046 17.6284 12.18 17.8713 12.4483C18.1143 12.7165 18.2433 13.059 18.234 13.4105Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Book a Call
              </a>
              <a href={site.email} className="btn-el btn-shadow btn-gradient">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" style={{ marginRight: 4 }}>
                  <path d="M8.19769 14.2754V17.5606C8.19769 17.7901 8.34503 17.9934 8.56319 18.0657C8.61773 18.0834 8.67369 18.0919 8.72894 18.0919C8.89469 18.0919 9.05477 18.014 9.15677 17.8751L11.0785 15.26L8.19769 14.2754Z" fill="currentColor" />
                  <path d="M18.7769 1.89857C18.6139 1.78311 18.4 1.76753 18.2229 1.86032L2.28549 10.1832C2.09707 10.2817 1.98586 10.4828 2.00145 10.6946C2.01774 10.9071 2.1587 11.0885 2.35916 11.1572L6.78977 12.6716L16.2254 4.60369L8.92397 13.4004L16.3494 15.9384C16.4047 15.9568 16.4627 15.9667 16.5208 15.9667C16.6172 15.9667 16.7128 15.9405 16.7971 15.8895C16.9316 15.8074 17.023 15.6692 17.0464 15.5141L18.9943 2.40998C19.0234 2.21165 18.9398 2.01474 18.7769 1.89857Z" fill="currentColor" />
                </svg>
                Send mail
              </a>
            </div>
            <div className="icons-section">
              <h3>Follow Me</h3>
              <div className="social-icons">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                  >
                    {s.icon === "facebook" && (
                      <svg viewBox="0 0 320 512" width="16" height="16">
                        <path d="M279.14 288l14.22-92.66h-88.91V127.77c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S261.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.78V288h81.39v224h100.17V288z" />
                      </svg>
                    )}
                    {s.icon === "x" && (
                      <svg viewBox="0 0 512 512" width="16" height="16">
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zm-24.8 373.8h39.1L151.1 88h-42L364.4 421.8z" />
                      </svg>
                    )}
                    {s.icon === "instagram" && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M7.9987 5.83398C7.42406 5.83398 6.87296 6.06226 6.46663 6.46859C6.0603 6.87492 5.83203 7.42602 5.83203 8.00065C5.83203 8.57529 6.0603 9.12639 6.46663 9.53271C6.87296 9.93904 7.42406 10.1673 7.9987 10.1673C8.57333 10.1673 9.12443 9.93904 9.53076 9.53271C9.93709 9.12639 10.1654 8.57529 10.1654 8.00065C10.1654 7.42602 9.93709 6.87492 9.53076 6.46859C9.12443 6.06226 8.57333 5.83398 7.9987 5.83398Z" fill="#464D61" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.51256 2.0552C6.82991 1.79833 9.16855 1.79833 11.4859 2.0552C12.7519 2.19653 13.7726 3.1932 13.9212 4.46387C14.196 6.81364 14.196 9.18743 13.9212 11.5372C13.7726 12.8079 12.7519 13.8045 11.4866 13.9465C9.169 14.2035 6.83013 14.2035 4.51256 13.9465C3.24656 13.8045 2.2259 12.8079 2.07723 11.5379C1.80238 9.18787 1.80238 6.81386 2.07723 4.46387C2.2259 3.1932 3.24656 2.19653 4.51256 2.0552Z" fill="#464D61" />
                      </svg>
                    )}
                    {s.icon === "linkedin" && (
                      <svg viewBox="0 0 448 512" width="16" height="16">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bento-col-projects">
          <div className="panel-dark">
            <div className="panel-header">
              <h2>My Projects</h2>
              <Link to={site.worksUrl} className="btn-el btn-link">
                See All
              </Link>
            </div>
            <div className="projects-sec">
              {projects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </div>
        </div>

        <div className="bento-col-services">
          <div className="panel-dark">
            <div className="panel-header services">
              <h2>Services I Offered</h2>
              <Link to={site.servicesUrl} className="btn-el btn-link">
                See All
              </Link>
            </div>
            {services.map((s) => (
              <button key={s.name} type="button" className="service-btn">
                <ServiceIcon type={s.icon} />
                {s.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bento-row bento-row-2">
        <div className="bento-col-expertise">
          <div className="panel-dark" style={{ paddingBottom: 32 }}>
            <div className="panel-header">
              <h2>My Expertise Area</h2>
            </div>
            <div className="expertise-grid">
              {expertise.map((e) => (
                <div key={e.name} className="expertise-item">
                  <SiteImage src={e.image} alt={e.name} width={44} height={44} />
                  <span>{e.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bento-col-experience">
          <div className="panel-dark">
            <div className="panel-header">
              <h2>Work Experience</h2>
            </div>
            {experience.map((exp) => (
              <div key={exp.company} className="work-item">
                <div className="work-item-left">
                  <SiteImage src={exp.image} alt={exp.company} width={40} height={40} />
                  <div>
                    <h3>{exp.company}</h3>
                    <p>{exp.role}</p>
                  </div>
                </div>
                <span className="work-date">{exp.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bento-col-cta">
          <div className="card-cta">
            <h2>
              Let&apos;s 👋 <br />
              Work Together
            </h2>
            <p>{cta.description}</p>
            <a href={site.whatsapp} className="btn-el btn-shadow btn-gradient" target="_blank" rel="noopener noreferrer">
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
