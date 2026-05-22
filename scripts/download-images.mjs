import fs from "fs";
import path from "path";

const OUT = path.join(process.cwd(), "public", "images");
const urls = [
  ["logo-header.png", "https://hashitech.great-site.net/wp-content/uploads/2025/09/LogoMakr-0N8DXv.png"],
  ["logo-footer.png", "https://hashitech.great-site.net/wp-content/uploads/2025/09/LogoMakr-4d74WR.png"],
  ["profile.jpg", "https://hashitech.great-site.net/wp-content/uploads/2025/09/5886489963682450851-300x300.jpg"],
  ["project-dashboard.png", "https://hashitech.great-site.net/wp-content/uploads/2025/09/Dashboard.png"],
  ["project-travel.png", "https://hashitech.great-site.net/wp-content/uploads/2025/09/image-1.png"],
  ["project-branding.png", "https://hashitech.great-site.net/wp-content/uploads/2025/09/image-3.png"],
  ["project-mobile.png", "https://hashitech.great-site.net/wp-content/uploads/2025/09/image-2.png"],
  ["project-jawiil.png", "https://hashitech.great-site.net/wp-content/uploads/2025/11/jawill-300x161.png"],
  ["project-ajwa.png", "https://hashitech.great-site.net/wp-content/uploads/2025/11/next.js-e1764524889884-300x143.png"],
  ["project-cv.png", "https://hashitech.great-site.net/wp-content/uploads/2025/12/cv-e1765128192492-300x134.png"],
  ["figma.png", "https://hashitech.great-site.net/wp-content/uploads/2025/09/Group-1-1.png"],
  ["gemini.png", "https://hashitech.great-site.net/wp-content/uploads/2026/02/gemania.png"],
  ["webflow.png", "https://hashitech.great-site.net/wp-content/uploads/2025/09/Group-3.png"],
  ["claude.png", "https://hashitech.great-site.net/wp-content/uploads/2026/02/claude.png"],
  ["prompt.png", "https://hashitech.great-site.net/wp-content/uploads/2026/02/ai-prompt.png"],
  ["notion.png", "https://hashitech.great-site.net/wp-content/uploads/2025/09/Group-3-3.png"],
  ["exp-jawi.png", "https://hashitech.great-site.net/wp-content/uploads/2026/01/jawi-150x150.png"],
  ["exp-ajwa.png", "https://hashitech.great-site.net/wp-content/uploads/2026/01/ajwa-150x150.png"],
  ["exp-idiris.png", "https://hashitech.great-site.net/wp-content/uploads/2026/01/LogoMakr-3n5wyr.png"],
];

fs.mkdirSync(OUT, { recursive: true });

for (const [name, url] of urls) {
  const res = await fetch(url);
  if (!res.ok) {
    console.warn("Failed:", name, res.status);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(path.join(OUT, name), buf);
  console.log("OK", name);
}
