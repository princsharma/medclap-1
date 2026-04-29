import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Reviews from "@/components/sections/Reviews";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import WorkedWith from "@/components/sections/WorkedWith";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <WorkedWith />
        <Services />
        <Work />
        <Reviews />
        <FAQ />
        <Contact />
        {/* Next sections will be added here as we build them */}
      </main>
      <Footer />
    </>
  );
}