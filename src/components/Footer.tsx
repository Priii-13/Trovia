import { Mountain } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/70">
    <div className="trek-container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-primary-foreground">
            <Mountain className="w-5 h-5 text-primary" />
            Trovia
          </Link>
          <p className="mt-3 text-sm leading-relaxed max-w-xs">
            Curated Himalayan treks across India. Every trail hand-picked, every journey unforgettable.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold text-primary-foreground mb-3">Quick Links</h4>
          <div className="space-y-2 text-sm">
            <Link to="/" className="block hover:text-primary-foreground transition-colors">All Treks</Link>
            <a href="#regions" className="block hover:text-primary-foreground transition-colors">Browse by Region</a>
            <a href="#" className="block hover:text-primary-foreground transition-colors">About Us</a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold text-primary-foreground mb-3">Contact</h4>
          <div className="space-y-2 text-sm">
            <p>hello@trailbharat.com</p>
            <p>+91 98765 43210</p>
            <p>McLeodganj, Himachal Pradesh</p>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-xs text-primary-foreground/40 text-center">
        © 2026 TrailBharat. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
