import Hero from "@/components/sections/Hero";
import Reviews from "@/components/sections/Reviews";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import WorkedWith from "@/components/sections/WorkedWith";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WorkedWith />
      <Services />
      <Work />
      <Reviews />
      {/* Next sections will be added here as we build them */}
    </main>
  );
}
