import { Approach } from "@/components/Approach";
import { Capabilities } from "@/components/Capabilities";
import { ClosingCta } from "@/components/ClosingCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Positioning } from "@/components/Positioning";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Positioning />
        <Capabilities />
        <Approach />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
