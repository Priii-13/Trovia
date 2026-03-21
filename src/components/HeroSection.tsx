import heroImage from "@/assets/hero-trek.jpg";

const HeroSection = () => (
  <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
    <img src={heroImage} alt="Himalayan trekking trail through green meadows towards snow-capped peaks" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
    <div className="relative h-full trek-container flex flex-col justify-end pb-16 md:pb-24">
      <p className="text-primary-foreground/70 text-sm font-medium tracking-widest uppercase mb-3 animate-fade-up">Discover India's Finest Trails</p>
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05] max-w-3xl animate-fade-up delay-100">
        Walk Where Mountains Touch the Sky
      </h1>
      <p className="mt-4 text-primary-foreground/80 text-base sm:text-lg max-w-xl leading-relaxed animate-fade-up delay-200">
        Curated Himalayan treks across India — from gentle meadow walks to frozen river expeditions. Find your trail.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 animate-fade-up delay-300">
        <a href="#treks" className="px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97]">
          Browse All Treks
        </a>
        <a href="#regions" className="px-7 py-3.5 rounded-lg bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/20 backdrop-blur-sm font-medium text-sm hover:bg-primary-foreground/25 transition-colors active:scale-[0.97]">
          Explore by Region
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
