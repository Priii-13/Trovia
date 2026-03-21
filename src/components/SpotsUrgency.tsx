import { useMemo } from "react";
import { Flame, Users } from "lucide-react";

const SpotsUrgency = ({ trekId }: { trekId: string }) => {
  // Deterministic "random" values seeded by trek ID for consistency
  const { spotsLeft, bookedToday } = useMemo(() => {
    let hash = 0;
    for (let i = 0; i < trekId.length; i++) {
      hash = ((hash << 5) - hash) + trekId.charCodeAt(i);
      hash |= 0;
    }
    return {
      spotsLeft: 3 + Math.abs(hash % 8),
      bookedToday: 8 + Math.abs((hash >> 4) % 15),
    };
  }, [trekId]);

  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-destructive/8 border border-destructive/15">
        <Flame className="w-4 h-4 text-destructive shrink-0" />
        <span className="text-sm font-medium text-destructive">
          Only {spotsLeft} spots left for this batch!
        </span>
      </div>
      <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-trek-forest-light/60 border border-primary/10">
        <Users className="w-4 h-4 text-trek-forest shrink-0" />
        <span className="text-sm text-foreground/70">
          <span className="font-semibold text-foreground">{bookedToday} people</span> booked today
        </span>
      </div>
    </div>
  );
};

export default SpotsUrgency;
