import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { treks } from "@/data/treks";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import ScrollReveal from "@/components/ScrollReveal";
import BeforeYouGo from "@/components/BeforeYouGo";
import SpotsUrgency from "@/components/SpotsUrgency";
import {
  Clock, MapPin, TrendingUp, Thermometer, Calendar, Mountain,
  Star, ChevronLeft, ChevronRight, ArrowLeft
} from "lucide-react";

const TrekDetail = () => {
  const { slug } = useParams();
  const trek = treks.find(t => t.slug === slug);
  const [bookOpen, setBookOpen] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);

  if (!trek) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold">Trek not found</h1>
          <Link to="/" className="mt-4 inline-block text-primary underline text-sm">Go back to all treks</Link>
        </div>
      </div>
    );
  }

  const avgRating = trek.reviews.reduce((s, r) => s + r.rating, 0) / trek.reviews.length;
  const { trekFee, food, stay, permits } = trek.costBreakdown;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <BookingModal trek={trek} open={bookOpen} onClose={() => setBookOpen(false)} />

      {/* Hero Image Slider */}
      <section className="relative h-[55vh] min-h-[400px] mt-16 overflow-hidden">
        <img
          src={trek.images[imgIdx]}
          alt={trek.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
        {trek.images.length > 1 && (
          <>
            <button onClick={() => setImgIdx(i => (i - 1 + trek.images.length) % trek.images.length)} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-foreground/30 text-primary-foreground backdrop-blur-sm hover:bg-foreground/50 transition-colors active:scale-95">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => setImgIdx(i => (i + 1) % trek.images.length)} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-foreground/30 text-primary-foreground backdrop-blur-sm hover:bg-foreground/50 transition-colors active:scale-95">
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
        <div className="absolute bottom-6 left-0 right-0 trek-container">
          <Link to="/" className="inline-flex items-center gap-1.5 text-primary-foreground/70 text-sm mb-3 hover:text-primary-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Treks
          </Link>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">{trek.name}</h1>
          <p className="mt-1 text-primary-foreground/70 text-sm flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {trek.location}</p>
        </div>
      </section>

      {/* Key Details Bar */}
      <ScrollReveal>
        <section className="border-b border-border/50">
          <div className="trek-container py-5 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <span className="flex items-center gap-1.5 text-foreground"><Clock className="w-4 h-4 text-primary" /> {trek.duration}</span>
            <span className="flex items-center gap-1.5 text-foreground"><TrendingUp className="w-4 h-4 text-primary" /> {trek.altitude}</span>
            <span className="flex items-center gap-1.5 text-foreground"><Thermometer className="w-4 h-4 text-primary" /> {trek.weather}</span>
            <span className="flex items-center gap-1.5 text-foreground"><Calendar className="w-4 h-4 text-primary" /> {trek.bestTime}</span>
            <span className="flex items-center gap-1.5 text-foreground"><Mountain className="w-4 h-4 text-primary" /> {trek.distance}</span>
            <span className={`ml-auto px-3 py-1 rounded-full text-xs font-semibold ${
              trek.difficulty === "Easy" ? "bg-trek-forest-light text-trek-forest" :
              trek.difficulty === "Moderate" ? "bg-trek-amber-light text-trek-earth" :
              "bg-destructive/10 text-destructive"
            }`}>{trek.difficulty}</span>
          </div>
        </section>
      </ScrollReveal>

      <div className="trek-container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <ScrollReveal>
              <h2 className="font-display text-2xl font-bold text-foreground">About This Trek</h2>
              <p className="mt-4 text-foreground/80 leading-relaxed">{trek.description}</p>
            </ScrollReveal>

            {/* Itinerary */}
            <ScrollReveal>
              <h2 className="font-display text-2xl font-bold text-foreground">Day-by-Day Itinerary</h2>
              <div className="mt-6 space-y-0">
                {trek.itinerary.map((day, i) => (
                  <div key={day.day} className="relative pl-8 pb-8 last:pb-0">
                    {i < trek.itinerary.length - 1 && <div className="absolute left-[11px] top-7 bottom-0 w-px bg-border" />}
                    <div className="absolute left-0 top-0.5 w-6 h-6 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                      <span className="text-[10px] font-bold text-primary">{day.day}</span>
                    </div>
                    <h4 className="font-display text-base font-semibold text-foreground">{day.title}</h4>
                    {day.altitude && <p className="text-xs text-primary font-medium mt-0.5">📍 {day.altitude}</p>}
                    <p className="mt-1 text-sm text-foreground/70 leading-relaxed">{day.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Reviews */}
            <ScrollReveal>
              <div id="reviews">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="font-display text-2xl font-bold text-foreground">Trekker Reviews</h2>
                  <div className="flex items-center gap-1 text-trek-amber">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="text-lg font-bold">{avgRating.toFixed(1)}</span>
                    <span className="text-sm text-muted-foreground ml-1">({trek.reviews.length} reviews)</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {trek.reviews.map((review, i) => (
                    <ScrollReveal key={i} delay={i * 60}>
                      <div className="p-5 rounded-xl bg-muted/40 border border-border/40">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                            {review.initials}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">{review.name}</p>
                            <p className="text-xs text-muted-foreground">{review.date}</p>
                          </div>
                          <div className="ml-auto flex gap-0.5">
                            {Array.from({ length: 5 }).map((_, s) => (
                              <Star key={s} className={`w-3.5 h-3.5 ${s < review.rating ? "text-trek-amber fill-current" : "text-border"}`} />
                            ))}
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{review.comment}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar — Booking & Cost */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <ScrollReveal delay={100}>
                <div className="p-6 rounded-2xl bg-card border border-border/60 shadow-sm">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-foreground tabular-nums">₹{trek.price.toLocaleString("en-IN")}</span>
                    <span className="text-sm text-muted-foreground">per person</span>
                  </div>

                  {/* Cost Breakdown */}
                  <div className="mt-5 space-y-2.5">
                    <h4 className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">Cost Breakdown</h4>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Trek Fee</span>
                      <span className="font-medium tabular-nums">₹{trekFee.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Food & Meals</span>
                      <span className="font-medium tabular-nums">₹{food.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Camping & Stay</span>
                      <span className="font-medium tabular-nums">₹{stay.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Permits & Fees</span>
                      <span className="font-medium tabular-nums">₹{permits.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold pt-2 border-t border-border/50">
                      <span>Total</span>
                      <span className="tabular-nums">₹{trek.price.toLocaleString("en-IN")}</span>
                    </div>
                  </div>

                  <SpotsUrgency trekId={trek.id} />

                  <button
                    onClick={() => setBookOpen(true)}
                    className="mt-6 w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
                  >
                    Book This Trek
                  </button>
                  <p className="mt-3 text-xs text-center text-muted-foreground">Free cancellation up to 7 days before the trek</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="p-5 rounded-xl bg-trek-forest-light/50 border border-primary/10">
                  <h4 className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary" /> Best Time to Visit
                  </h4>
                  <p className="mt-1 text-sm text-foreground/80">{trek.bestTime}</p>
                  <h4 className="mt-4 text-sm font-semibold text-foreground flex items-center gap-1.5">
                    <Thermometer className="w-4 h-4 text-primary" /> Expected Weather
                  </h4>
                  <p className="mt-1 text-sm text-foreground/80">{trek.weather}</p>
                  <h4 className="mt-4 text-sm font-semibold text-foreground flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-primary" /> Max Altitude
                  </h4>
                  <p className="mt-1 text-sm text-foreground/80">{trek.altitude}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Bottom */}
      <ScrollReveal>
        <section className="bg-primary text-primary-foreground">
          <div className="trek-container py-14 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold">Secure Your Spot on {trek.name}</h2>
            <p className="mt-2 text-primary-foreground/80 max-w-md mx-auto text-sm">Limited batches available. Book now and start preparing for the adventure of a lifetime.</p>
            <button
              onClick={() => setBookOpen(true)}
              className="mt-6 px-8 py-3.5 rounded-lg bg-primary-foreground text-primary font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              Book Now — ₹{trek.price.toLocaleString("en-IN")}
            </button>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default TrekDetail;
