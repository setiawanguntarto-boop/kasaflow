import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-card/80 backdrop-blur-md z-50 border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link 
          to="/"
          className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
        >
          Kasaflow
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/"
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Home
          </Link>
          <Link 
            to="/tentang"
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Tentang
          </Link>
          <Link 
            to="/cara-kerja"
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Cara Kerja
          </Link>
          <Link 
            to="/prinsip"
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Prinsip
          </Link>
          <Button asChild className="gradient-hero text-primary-foreground shadow-soft">
            <Link to="/kontak">
              Hubungi Kami
            </Link>
          </Button>
        </nav>
        
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border animate-fade-in">
          <Link 
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center py-3 text-sm text-foreground hover:bg-accent transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/tentang"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center py-3 text-sm text-foreground hover:bg-accent transition-colors"
          >
            Tentang
          </Link>
          <Link 
            to="/cara-kerja"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center py-3 text-sm text-foreground hover:bg-accent transition-colors"
          >
            Cara Kerja
          </Link>
          <Link 
            to="/prinsip"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center py-3 text-sm text-foreground hover:bg-accent transition-colors"
          >
            Prinsip
          </Link>
          <Link 
            to="/kontak"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center py-3 text-sm text-foreground hover:bg-accent transition-colors"
          >
            Hubungi Kami
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
