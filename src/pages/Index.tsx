import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import EcosystemSection from "@/components/EcosystemSection";
import cassavaHarvest from "@/assets/cassava-harvest.png";
const Index = () => {
  return <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section id="hero" className="py-16 md:py-24 gradient-section">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">Satu WhatsApp untuk Proses Panen Singkong</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Kasaflow mempermudah petugas lapangan mencatat pengajuan panen, verifikasi lahan, dan hasil timbang secara otomatis. Tidak perlu formulir manual, semua tercatat langsung lewat chat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="gradient-hero text-primary-foreground shadow-soft hover:shadow-lg transition-smooth text-base px-8" onClick={() => window.open("https://wa.me/62881024280797", "_blank")}>
                  Coba Simulasi Chat
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-base px-8" asChild>
                  <Link to="/kontak">Hubungi Kasaflow</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <div className="relative rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-smooth">
                <img src={cassavaHarvest} alt="Petani singkong memuat hasil panen ke truk merah - proses panen singkong tradisional" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </section>

        {/* Ecosystem Section */}
        <EcosystemSection />

      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-lg font-medium mb-2">⚙️ Powered by Naraflow</p>
          <p className="text-sm text-primary-foreground/70">&copy; 2025 Kasaflow. All rights reserved.</p>
        </div>
      </footer>
    </div>;
};
export default Index;