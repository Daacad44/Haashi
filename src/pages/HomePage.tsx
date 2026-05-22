import { BentoGrid } from "@/components/hashitech/BentoGrid";
import { Footer } from "@/components/hashitech/Footer";
import { Header } from "@/components/hashitech/Header";
import { PageMeta } from "@/components/hashitech/PageMeta";

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="Code With Haashi – Turning ideas into clean, creative code."
        description="Mohamett Haashi – creative web designer and developer. UI/UX, mobile apps, branding, and digital marketing."
      />
      <Header />
      <main>
        <BentoGrid />
      </main>
      <Footer />
    </>
  );
}
