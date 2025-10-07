import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import WhatsAppMockup from "@/components/WhatsAppMockup";
import FeatureCard from "@/components/FeatureCard";
import TimelineStep from "@/components/TimelineStep";
import PrincipleCard from "@/components/PrincipleCard";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                  onClick={() => scrollToSection("contact")}
                >
                  Hubungi Kasaflow
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <WhatsAppMockup />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Tentang Kasaflow</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kasaflow adalah agent cerdas berbasis WhatsApp yang dirancang untuk membantu perusahaan trading singkong mengelola data panen di lapangan dengan cepat dan tertib. Setiap interaksi menghasilkan catatan terstruktur — mulai dari data petani, lokasi lahan, estimasi tonase, hingga hasil timbang aktual.
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
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24 gradient-section">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Cara Kerja Kasaflow</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dari pengajuan hingga rekap, semua proses panen tercatat dalam beberapa langkah mudah melalui WhatsApp.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <TimelineStep 
                number={1}
                title="Pengajuan Panen oleh Petani"
                description="Petani menghubungi petugas melalui WhatsApp untuk mengajukan panen."
                delay="0.1s"
              />
              <TimelineStep 
                number={2}
                title="Input Data di Kasaflow"
                description="Petugas mengikuti instruksi otomatis dari agent: nama petani, lokasi lahan, estimasi tonase, dan tanggal panen."
                delay="0.2s"
              />
              <TimelineStep 
                number={3}
                title="Verifikasi Lapangan"
                description="Petugas memverifikasi lahan dan memperbarui status menjadi 'Terverifikasi Lapang'."
                delay="0.3s"
              />
              <TimelineStep 
                number={4}
                title="Penjadwalan & Penimbangan"
                description="Setelah disetujui, Kasaflow mengirimkan jadwal panen dan mencatat hasil timbang aktual."
                delay="0.4s"
              />
              <TimelineStep 
                number={5}
                title="Rekap Otomatis"
                description="Semua data panen tersimpan otomatis dan dapat diunduh sebagai laporan."
                isLast
                delay="0.5s"
              />
            </div>
          </div>
        </section>

        {/* Core Principles Section */}
        <section id="principles" className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Core Principles</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fondasi yang menjadikan Kasaflow sebagai asisten lapangan yang andal dan efisien.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <PrincipleCard 
                title="Agent, not App"
                description="Kasaflow adalah asisten digital, bukan aplikasi. Ia bekerja langsung di WhatsApp untuk mendampingi petugas lapangan."
                delay="0.1s"
              />
              <PrincipleCard 
                title="Workflow Integrity"
                description="Alur percakapan dikendalikan oleh FSM, memastikan setiap langkah panen tercatat berurutan dan tidak bisa dilewati."
                delay="0.2s"
              />
              <PrincipleCard 
                title="Data Discipline"
                description="Setiap input diubah menjadi data terstruktur yang siap diolah ke laporan atau dashboard."
                delay="0.3s"
              />
              <PrincipleCard 
                title="Traceability"
                description="Semua aktivitas dapat dilacak per petani, petugas, dan tanggal panen."
                delay="0.4s"
              />
              <PrincipleCard 
                title="Simplicity by Design"
                description="Dibuat agar tetap efisien di kondisi lapangan dengan sinyal terbatas dan beban kerja tinggi."
                delay="0.5s"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 gradient-section">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Hubungi Kasaflow</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ingin mencoba Kasaflow untuk tim lapangan Anda? Hubungi kami untuk demo dan integrasi awal.
              </p>
              
              <div className="space-y-4 inline-block">
                <a 
                  href="https://wa.me/6287731771859" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-card p-4 rounded-xl shadow-card hover:shadow-soft transition-smooth hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center shadow-soft">
                    <MessageCircle className="text-primary-foreground h-6 w-6" />
                  </div>
                  <span className="text-foreground group-hover:text-primary transition-colors font-medium">
                    +62 877-3177-1859
                  </span>
                </a>
                
                <a 
                  href="mailto:setiawan@naraflow.id"
                  className="flex items-center gap-4 bg-card p-4 rounded-xl shadow-card hover:shadow-soft transition-smooth hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center shadow-soft">
                    <Mail className="text-primary-foreground h-6 w-6" />
                  </div>
                  <span className="text-foreground group-hover:text-primary transition-colors font-medium">
                    setiawan@naraflow.id
                  </span>
                </a>
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
