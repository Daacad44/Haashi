import { Header } from "@/components/hashitech/Header";
import { BentoGrid } from "@/components/hashitech/BentoGrid";
import { Footer } from "@/components/hashitech/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <BentoGrid />
      </main>
      <Footer />
    </>
  );
}
