import type { Difficulty, Region } from "@/data/treks";
import { regions } from "@/data/treks";

interface FilterBarProps {
  difficulty: Difficulty | "All";
  setDifficulty: (d: Difficulty | "All") => void;
  region: Region | "All";
  setRegion: (r: Region | "All") => void;
}

const difficulties: (Difficulty | "All")[] = ["All", "Easy", "Moderate", "Hard"];

const FilterBar = ({ difficulty, setDifficulty, region, setRegion }: FilterBarProps) => (
  <div className="flex flex-wrap gap-3 items-center">
    <div className="flex flex-wrap gap-2">
      <span className="text-xs font-medium text-muted-foreground self-center mr-1">Difficulty:</span>
      {difficulties.map((d) => (
        <button
          key={d}
          onClick={() => setDifficulty(d)}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors active:scale-[0.96] ${
            difficulty === d
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-border"
          }`}
        >
          {d}
        </button>
      ))}
    </div>
    <div className="h-6 w-px bg-border hidden sm:block" />
    <div className="flex flex-wrap gap-2">
      <span className="text-xs font-medium text-muted-foreground self-center mr-1">Region:</span>
      <button
        onClick={() => setRegion("All")}
        className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors active:scale-[0.96] ${
          region === "All" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-border"
        }`}
      >
        All
      </button>
      {regions.map((r) => (
        <button
          key={r}
          onClick={() => setRegion(r)}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors active:scale-[0.96] ${
            region === r ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-border"
          }`}
        >
          {r}
        </button>
      ))}
    </div>
  </div>
);

export default FilterBar;
