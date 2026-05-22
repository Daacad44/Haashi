import { Link } from "react-router-dom";
import { SiteImage } from "./SiteImage";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="header-section">
        <Link to="/">
          <SiteImage src="/images/logo-footer.png" alt="HaashiTech" width={200} height={34} />
        </Link>
        <p>© Haashi 2025, All Rights Reserved.</p>
      </div>
    </footer>
  );
}
