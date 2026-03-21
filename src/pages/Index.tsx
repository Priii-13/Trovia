import { useState, useMemo } from "react";
import { treks, type Difficulty, type Region } from "@/data/treks";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FilterBar from "@/components/FilterBar";
import TrekCard from "@/components/TrekCard";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  const [difficulty, setDifficulty] = useState<Difficulty | "All">("All");
  const [region, setRegion] = useState<Region | "All">("All");

  const filtered = useMemo(() =>
    treks.filter(t =>
      (difficulty === "All" || t.difficulty === difficulty) &&
      (region === "All" || t.region === region)
    ), [difficulty, region]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof treks>();
    filtered.forEach(t => {
      if (!map.has(t.region)) map.set(t.region, []);
      map.get(t.region)!.push(t);
    });
    return map;
  }, [filtered]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* Treks Section */}
      <section id="treks" className="trek-container py-16 md:py-24">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Explore Famous Treks</h2>
          <p className="mt-2 text-muted-foreground max-w-xl">From gentle weekend escapes to extreme frozen-river expeditions — find your next adventure.</p>
        </ScrollReveal>

        <ScrollReveal className="mt-8" delay={100}>
          <FilterBar difficulty={difficulty} setDifficulty={setDifficulty} region={region} setRegion={setRegion} />
        </ScrollReveal>

        {filtered.length === 0 ? (
          <ScrollReveal className="mt-12 text-center py-16">
            <p className="text-muted-foreground text-lg">No treks match your filters. Try adjusting your selection.</p>
          </ScrollReveal>
        ) : (
          <div id="regions" className="mt-10 space-y-14">
            {Array.from(grouped.entries()).map(([regionName, regionTreks]) => (
              <ScrollReveal key={regionName}>
                <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 rounded-full bg-primary" />
                  {regionName}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regionTreks.map((trek, i) => (
                    <ScrollReveal key={trek.id} delay={i * 80}>
                      <TrekCard trek={trek} />
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="bg-primary text-primary-foreground">
          <div className="trek-container py-16 md:py-24 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Ready for Your Next Adventure?</h2>
            <p className="mt-3 text-primary-foreground/80 max-w-lg mx-auto">Join thousands of trekkers who've discovered India's most incredible trails with TrailBharat.</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a href="#treks" className="px-7 py-3.5 rounded-lg bg-primary-foreground text-primary font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97]">
                Browse All Treks
              </a>
              <a href="mailto:hello@trailbharat.com" className="px-7 py-3.5 rounded-lg border border-primary-foreground/30 text-primary-foreground font-medium text-sm hover:bg-primary-foreground/10 transition-colors active:scale-[0.97]">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default Index;
