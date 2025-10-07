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

        {/* Features Overview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Kenapa Kasaflow?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Solusi praktis untuk mengelola proses panen singkong dari awal hingga akhir
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard 
                icon="📱"
                title="Praktis"
                description="Cukup lewat WhatsApp, tanpa aplikasi tambahan."
                delay="0.1s"
              />
              <FeatureCard 
                icon="🌾"
                title="Terstruktur"
                description="Alur percakapan mengikuti format standar panen."
                delay="0.2s"
              />
              <FeatureCard 
                icon="⏱️"
                title="Real-time"
                description="Status panen diperbarui otomatis."
                delay="0.3s"
              />
              <FeatureCard 
                icon="🧾"
                title="Tertelusur"
                description="Riwayat data panen dapat diakses kapan saja."
                delay="0.4s"
              />
            </div>

            <div className="mt-12 text-center space-y-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-accent">
                  <Link to="/tentang">Pelajari Lebih Lanjut</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-accent">
                  <Link to="/cara-kerja">Lihat Cara Kerja</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-accent">
                  <Link to="/prinsip">Core Principles</Link>
                </Button>
              </div>
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
