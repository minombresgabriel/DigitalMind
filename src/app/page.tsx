import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portafolio";

export default function Page() {
  return (
    <main>
      {/* Navbar is client (uses state/scroll). Others are mixed. */}
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Portfolio />
      <Footer />
    </main>
  );
}