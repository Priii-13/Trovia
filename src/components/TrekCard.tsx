import { Link } from "react-router-dom";
import { Clock, MapPin, TrendingUp, Star } from "lucide-react";
import type { Trek } from "@/data/treks";

const difficultyColor: Record<string, string> = {
  Easy: "bg-trek-forest-light text-trek-forest",
  Moderate: "bg-trek-amber-light text-trek-earth",
  Hard: "bg-destructive/10 text-destructive",
};

const TrekCard = ({ trek }: { trek: Trek }) => {
  const avg = trek.reviews.reduce((s, r) => s + r.rating, 0) / trek.reviews.length;
  return (
    <Link
      to={`/trek/${trek.slug}`}
      className="group block rounded-xl overflow-hidden bg-card border border-border/60 shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={trek.images[0]} alt={trek.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${difficultyColor[trek.difficulty]}`}>
          {trek.difficulty}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-semibold text-foreground leading-snug">{trek.name}</h3>
          <div className="flex items-center gap-1 text-trek-amber shrink-0">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="text-xs font-semibold">{avg.toFixed(1)}</span>
          </div>
        </div>
        <p className="mt-1 text-sm text-muted-foreground flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5" /> {trek.location}
        </p>
        <p className="mt-3 text-sm text-foreground/70 line-clamp-2 leading-relaxed">{trek.shortDescription}</p>
        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{trek.duration}</span>
          <span className="flex items-center gap-1"><TrendingUp className="w-3.5 h-3.5" />{trek.altitude}</span>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-4">
          <div>
            <span className="text-xs text-muted-foreground">Starting from</span>
            <p className="text-lg font-bold text-foreground tabular-nums">₹{trek.price.toLocaleString("en-IN")}</p>
          </div>
          <span className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium group-hover:opacity-90 transition-opacity">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TrekCard;
