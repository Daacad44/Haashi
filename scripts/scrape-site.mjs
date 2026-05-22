import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const URL = "https://hashitech.great-site.net/";
const OUT = path.join(process.cwd(), "scrape-output");

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  await page.goto(URL, { waitUntil: "networkidle", timeout: 120000 });
  await page.waitForTimeout(5000);

  const html = await page.content();
  fs.writeFileSync(path.join(OUT, "page.html"), html);

  await page.screenshot({ path: path.join(OUT, "full-page.png"), fullPage: true });

  const designTokens = await page.evaluate(() => {
    const pick = (el) => {
      if (!el) return null;
      const s = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        tag: el.tagName,
        className: el.className?.toString?.() || "",
        id: el.id || "",
        text: (el.textContent || "").trim().slice(0, 80),
        color: s.color,
        backgroundColor: s.backgroundColor,
        backgroundImage: s.backgroundImage,
        fontFamily: s.fontFamily,
        fontSize: s.fontSize,
        fontWeight: s.fontWeight,
        letterSpacing: s.letterSpacing,
        lineHeight: s.lineHeight,
        padding: s.padding,
        margin: s.margin,
        border: s.border,
        borderRadius: s.borderRadius,
        boxShadow: s.boxShadow,
        transform: s.transform,
        transition: s.transition,
        width: r.width,
        height: r.height,
      };
    };

    const links = [...document.querySelectorAll('link[rel="stylesheet"]')].map((l) => l.href);
    const styles = [...document.querySelectorAll("style")].map((s) => s.textContent?.slice(0, 5000));

    const headings = [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")].map(pick);
    const sections = [...document.querySelectorAll("section, main, header, footer, nav, article, [class*='section']")].slice(0, 40).map(pick);
    const cards = [...document.querySelectorAll("[class*='project'], [class*='card'], [class*='service'], [class*='work'], a, button")].slice(0, 60).map(pick);

    const root = pick(document.documentElement);
    const body = pick(document.body);

    return {
      title: document.title,
      links,
      inlineStyleCount: styles.length,
      inlineStylesSample: styles.slice(0, 3),
      root,
      body,
      headings: headings.slice(0, 20),
      sections: sections.slice(0, 25),
      interactive: cards.filter(Boolean).slice(0, 40),
      cssVars: [...document.styleSheets]
        .flatMap((sheet) => {
          try {
            return [...sheet.cssRules]
              .filter((r) => r.cssText?.includes("--"))
              .map((r) => r.cssText)
              .slice(0, 50);
          } catch {
            return [];
          }
        })
        .slice(0, 100),
    };
  });

  fs.writeFileSync(path.join(OUT, "design-tokens.json"), JSON.stringify(designTokens, null, 2));

  // Hover states on interactive elements
  const hoverStates = await page.evaluate(async () => {
    const results = [];
    const els = [...document.querySelectorAll("a, button, [class*='project'], [class*='card'], [role='button']")].slice(0, 30);
    for (const el of els) {
      const before = getComputedStyle(el);
      const base = {
        text: (el.textContent || "").trim().slice(0, 40),
        className: el.className?.toString?.() || "",
        color: before.color,
        backgroundColor: before.backgroundColor,
        transform: before.transform,
        boxShadow: before.boxShadow,
        border: before.border,
      };
      el.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));
      await new Promise((r) => setTimeout(r, 100));
      const after = getComputedStyle(el);
      results.push({
        ...base,
        hover: {
          color: after.color,
          backgroundColor: after.backgroundColor,
          transform: after.transform,
          boxShadow: after.boxShadow,
          border: after.border,
        },
      });
    }
    return results;
  });

  fs.writeFileSync(path.join(OUT, "hover-states.json"), JSON.stringify(hoverStates, null, 2));

  console.log("Scrape complete:", OUT);
  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
