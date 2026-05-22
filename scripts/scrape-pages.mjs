import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const BASE = "https://hashitech.great-site.net";
const PAGES = [
  "/",
  "/about/",
  "/services/",
  "/service-details/",
  "/works/",
  "/contact/",
];
const OUT = path.join(process.cwd(), "scrape-output", "pages");

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  });

  const summary = [];

  for (const slug of PAGES) {
    const url = `${BASE}${slug === "/" ? "" : slug}`;
    const name = slug.replace(/\//g, "_") || "home";
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
      await page.waitForTimeout(3000);
      const html = await page.content();
      const title = await page.title();
      const headings = await page.evaluate(() =>
        [...document.querySelectorAll("h1,h2,h3")].map((el) => ({
          tag: el.tagName,
          text: el.textContent?.trim().slice(0, 120),
        }))
      );
      fs.writeFileSync(path.join(OUT, `${name}.html`), html);
      await page.screenshot({ path: path.join(OUT, `${name}.png`), fullPage: true });
      summary.push({ slug, url, title, headings: headings.slice(0, 15) });
      console.log("OK", slug, title);
    } catch (e) {
      console.warn("FAIL", slug, e.message);
    }
  }

  fs.writeFileSync(path.join(OUT, "summary.json"), JSON.stringify(summary, null, 2));
  await browser.close();
}

main();
