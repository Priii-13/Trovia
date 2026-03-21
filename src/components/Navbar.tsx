import { useState } from "react";
import { Link } from "react-router-dom";
import { Mountain, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="trek-container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-foreground">
          <Mountain className="w-6 h-6 text-primary" />
          Trovia
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="text-foreground/70 hover:text-foreground transition-colors">Treks</Link>
          <a href="#regions" className="text-foreground/70 hover:text-foreground transition-colors">Regions</a>
          <a href="#reviews" className="text-foreground/70 hover:text-foreground transition-colors">Reviews</a>
          <Link to="/" className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity active:scale-[0.97]">
            Explore Treks
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground active:scale-95 transition-transform">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md pb-4">
          <div className="trek-container flex flex-col gap-3 pt-3">
            <Link to="/" onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-foreground/70">Treks</Link>
            <a href="#regions" onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-foreground/70">Regions</a>
            <Link to="/" onClick={() => setOpen(false)} className="mt-1 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium text-center">
              Explore Treks
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
