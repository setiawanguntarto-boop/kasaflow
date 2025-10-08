import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import WhatsAppMockup from "@/components/WhatsAppMockup";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section id="hero" className="py-16 md:py-24 gradient-section">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
                Satu WhatsApp untuk seluruh proses panen singkong 🌿
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Kasaflow mempermudah petugas lapangan mencatat pengajuan panen, verifikasi lahan, dan hasil timbang secara otomatis. Tidak perlu formulir manual, semua tercatat langsung lewat chat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  size="lg"
                  className="gradient-hero text-primary-foreground shadow-soft hover:shadow-lg transition-smooth text-base px-8"
                  onClick={() => window.open("https://wa.me/6287731771859", "_blank")}
                >
                  Coba Simulasi Chat
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-base px-8"
                  asChild
                >
                  <Link to="/kontak">Hubungi Kasaflow</Link>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <WhatsAppMockup />
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-lg font-medium mb-2">⚙️ Powered by Naraflow</p>
          <p className="text-sm text-primary-foreground/70">&copy; 2025 Kasaflow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
