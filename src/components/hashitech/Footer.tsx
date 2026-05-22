import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="header-section">
        <Link href="/">
          <Image src="/images/logo-footer.png" alt="HaashiTech" width={200} height={34} />
        </Link>
        <p>© Haashi 2025, All Rights Reserved.</p>
      </div>
    </footer>
  );
}
