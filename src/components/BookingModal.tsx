import { useState } from "react";
import { X, Check, Users, Calendar, Phone, Mail, User } from "lucide-react";
import type { Trek } from "@/data/treks";

interface Props {
  trek: Trek;
  open: boolean;
  onClose: () => void;
}

const BookingModal = ({ trek, open, onClose }: Props) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", phone: "", travelers: "1", date: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const totalPrice = trek.price * Number(form.travelers || 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reset = () => {
    setStep(1);
    setForm({ name: "", email: "", phone: "", travelers: "1", date: "" });
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={reset} />
      <div className="relative w-full max-w-lg bg-card rounded-2xl shadow-2xl overflow-hidden animate-fade-up">
        <div className="flex items-center justify-between p-5 border-b border-border/50">
          <h3 className="font-display text-xl font-semibold">{submitted ? "Booking Confirmed!" : `Book ${trek.name}`}</h3>
          <button onClick={reset} className="p-1.5 rounded-full hover:bg-muted transition-colors active:scale-95">
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-trek-forest-light flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <p className="text-lg font-semibold text-foreground">Your trek is booked!</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Confirmation sent to <strong>{form.email}</strong>. We'll reach out within 24 hours with full details.
            </p>
            <p className="mt-4 text-2xl font-bold text-foreground tabular-nums">₹{totalPrice.toLocaleString("en-IN")}</p>
            <p className="text-xs text-muted-foreground">for {form.travelers} traveler{Number(form.travelers) > 1 ? "s" : ""}</p>
            <button onClick={reset} className="mt-6 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium active:scale-[0.97]">
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="p-5 space-y-4">
                <div>
                  <label className="text-xs font-medium text-foreground/70 flex items-center gap-1.5 mb-1.5"><User className="w-3.5 h-3.5" />Full Name</label>
                  <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring/30" placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground/70 flex items-center gap-1.5 mb-1.5"><Mail className="w-3.5 h-3.5" />Email</label>
                  <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring/30" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground/70 flex items-center gap-1.5 mb-1.5"><Phone className="w-3.5 h-3.5" />Phone</label>
                  <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring/30" placeholder="+91 98765 43210" />
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="p-5 space-y-4">
                <div>
                  <label className="text-xs font-medium text-foreground/70 flex items-center gap-1.5 mb-1.5"><Users className="w-3.5 h-3.5" />Number of Travelers</label>
                  <select value={form.travelers} onChange={e => setForm({ ...form, travelers: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring/30">
                    {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? "person" : "people"}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground/70 flex items-center gap-1.5 mb-1.5"><Calendar className="w-3.5 h-3.5" />Preferred Date</label>
                  <input required type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring/30" />
                </div>
                <div className="p-4 rounded-lg bg-muted/50 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Trek fee × {form.travelers}</span>
                    <span className="tabular-nums">₹{(trek.costBreakdown.trekFee * Number(form.travelers)).toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Food × {form.travelers}</span>
                    <span className="tabular-nums">₹{(trek.costBreakdown.food * Number(form.travelers)).toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Stay × {form.travelers}</span>
                    <span className="tabular-nums">₹{(trek.costBreakdown.stay * Number(form.travelers)).toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Permits × {form.travelers}</span>
                    <span className="tabular-nums">₹{(trek.costBreakdown.permits * Number(form.travelers)).toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold pt-2 border-t border-border/50">
                    <span>Total</span>
                    <span className="tabular-nums">₹{totalPrice.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>
            )}
            <div className="flex items-center justify-between p-5 border-t border-border/50">
              {step === 2 ? (
                <>
                  <button type="button" onClick={() => setStep(1)} className="px-5 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted transition-colors active:scale-[0.97]">
                    Back
                  </button>
                  <button type="submit" className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity active:scale-[0.97]">
                    Confirm Booking — ₹{totalPrice.toLocaleString("en-IN")}
                  </button>
                </>
              ) : (
                <>
                  <div />
                  <button type="button" onClick={() => setStep(2)} className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity active:scale-[0.97]">
                    Next — Select Date
                  </button>
                </>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
