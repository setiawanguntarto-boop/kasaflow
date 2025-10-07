import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 bg-card/80 backdrop-blur-md z-50 border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
        >
          Kasaflow
        </button>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection("hero")}
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection("about")}
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Tentang
          </button>
          <button 
            onClick={() => scrollToSection("how-it-works")}
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Cara Kerja
          </button>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="gradient-hero text-primary-foreground shadow-soft"
          >
            Hubungi Kami
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
          <button 
            onClick={() => scrollToSection("hero")}
            className="block w-full text-center py-3 text-sm text-foreground hover:bg-accent transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection("about")}
            className="block w-full text-center py-3 text-sm text-foreground hover:bg-accent transition-colors"
          >
            Tentang
          </button>
          <button 
            onClick={() => scrollToSection("how-it-works")}
            className="block w-full text-center py-3 text-sm text-foreground hover:bg-accent transition-colors"
          >
            Cara Kerja
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="block w-full text-center py-3 text-sm text-foreground hover:bg-accent transition-colors"
          >
            Hubungi Kami
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
