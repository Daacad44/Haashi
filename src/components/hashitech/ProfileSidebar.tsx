import { SiteImage } from "./SiteImage";
import { profile, site, socialLinks } from "@/lib/data";

export function ProfileSidebar() {
  return (
    <aside className="profile-sidebar card-profile">
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
          Book a Call
        </a>
        <a href={site.email} className="btn-el btn-shadow btn-gradient">
          Send Email
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
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
    </aside>
  );
}
