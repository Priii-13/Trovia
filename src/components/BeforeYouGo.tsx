import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { FileText, Dumbbell, XCircle, CheckCircle2 } from "lucide-react";

interface ChecklistItem {
  id: string;
  label: string;
  category: "documents" | "fitness" | "avoid";
}

const defaultChecklist: ChecklistItem[] = [
  { id: "id-proof", label: "Government-issued photo ID (Aadhaar/Passport)", category: "documents" },
  { id: "medical-cert", label: "Medical fitness certificate", category: "documents" },
  { id: "permits", label: "Trek permits & printouts", category: "documents" },
  { id: "insurance", label: "Travel insurance policy copy", category: "documents" },
  { id: "cardio", label: "2 weeks of daily cardio (jogging/cycling)", category: "fitness" },
  { id: "squats", label: "Leg-strengthening exercises (squats, lunges)", category: "fitness" },
  { id: "altitude", label: "Practice deep breathing for altitude prep", category: "fitness" },
  { id: "no-alcohol", label: "Avoid alcohol 48 hrs before trek", category: "avoid" },
  { id: "no-junk", label: "Skip heavy/junk food the day before", category: "avoid" },
  { id: "no-new-shoes", label: "Don't wear brand-new trekking shoes", category: "avoid" },
];

const categoryMeta = {
  documents: { icon: FileText, title: "Documents Needed", color: "text-primary" },
  fitness: { icon: Dumbbell, title: "Fitness Prep", color: "text-trek-forest" },
  avoid: { icon: XCircle, title: "Things to Avoid", color: "text-destructive" },
} as const;

const BeforeYouGo = () => {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setChecked(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const progress = Math.round((checked.size / defaultChecklist.length) * 100);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold text-foreground">Before You Go</h2>
        <div className="flex items-center gap-2">
          {progress === 100 && <CheckCircle2 className="w-4 h-4 text-trek-forest" />}
          <span className="text-sm font-semibold text-foreground tabular-nums">{progress}%</span>
        </div>
      </div>

      <div className="space-y-1">
        <Progress value={progress} className="h-2.5 bg-muted" />
        <p className="text-xs text-muted-foreground">
          Preparation: {checked.size} of {defaultChecklist.length} items done
        </p>
      </div>

      {(["documents", "fitness", "avoid"] as const).map(cat => {
        const { icon: Icon, title, color } = categoryMeta[cat];
        const items = defaultChecklist.filter(i => i.category === cat);
        return (
          <div key={cat}>
            <h4 className={`text-sm font-semibold flex items-center gap-1.5 mb-3 ${color}`}>
              <Icon className="w-4 h-4" /> {title}
            </h4>
            <div className="space-y-2.5">
              {items.map(item => (
                <label
                  key={item.id}
                  className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                    checked.has(item.id)
                      ? "bg-primary/5 border-primary/20"
                      : "bg-card border-border/40 hover:border-border"
                  }`}
                >
                  <Checkbox
                    checked={checked.has(item.id)}
                    onCheckedChange={() => toggle(item.id)}
                    className="mt-0.5"
                  />
                  <span className={`text-sm leading-relaxed ${checked.has(item.id) ? "text-foreground/50 line-through" : "text-foreground/80"}`}>
                    {item.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BeforeYouGo;
