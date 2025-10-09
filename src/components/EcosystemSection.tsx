import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import KasaflowMockup from "@/components/KasaflowMockup";
import PokuMockup from "@/components/PokuMockup";
import TrakiMockup from "@/components/TrakiMockup";

const EcosystemSection = () => {
  return (
    <section className="py-24 px-6 md:px-8 bg-background overflow-hidden ecosystem-bg">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <header className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in text-foreground">
            Ekosistem <span className="text-primary">Kasaflow</span> by <span className="text-purple-600">Naraflow</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground animate-fade-in">
            Sistem Agent WhatsApp terpadu: data lapangan, loyalitas pelanggan (PoKu), dan logistik pertanian, semua terhubung.
          </p>
          
          {/* Dashboard Visualization */}
          <div className="flex justify-center my-8 animate-fade-in">
            <div className="relative w-80 h-64 md:w-[900px] md:h-[550px] flex items-center justify-center">
              <svg width="100%" height="100%" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
                {/* Data Flow Arrows */}
                <path d="M10 100 C 30 90, 45 80, 60 70" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" className="connector-line"/>
                <circle cx="10" cy="100" r="3" fill="hsl(var(--primary))"/>
                <path d="M63 70 L59 66 M63 70 L59 74" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round"/>
                
                <path d="M10 60 C 30 60, 45 50, 60 50" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" className="connector-line"/>
                <circle cx="10" cy="60" r="3" fill="hsl(var(--primary))"/>
                <path d="M63 50 L59 46 M63 50 L59 54" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round"/>
                
                <path d="M150 100 C 130 90, 115 80, 100 70" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" className="connector-line"/>
                <circle cx="150" cy="100" r="3" fill="hsl(var(--primary))"/>
                <path d="M97 70 L101 66 M97 70 L101 74" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round"/>
                
                <rect x="25" y="100" width="110" height="2" rx="1" fill="#444444"/>
              </svg>

              {/* Laptop Body */}
              <div className="absolute w-5/6 h-4/6 rounded-lg bg-[#1a1a1a] border border-black shadow-2xl">
                <div className="w-full h-full p-1 rounded-lg bg-[#212121]">
                  <div className="w-full h-full bg-white rounded-md flex flex-col items-center">
                    {/* Dashboard Header */}
                    <div className="flex justify-between items-center text-sm w-full p-3 bg-muted border-b">
                      <span className="font-semibold text-base">🌿 Naraflow Console</span>
                      <span className="text-sm text-muted-foreground">Synced 2 mins ago</span>
                    </div>

                    <h4 className="text-2xl font-extrabold my-5 text-primary">OPERATIONAL EXCELLENCE</h4>

                    {/* Three Column Metrics */}
                    <div className="grid grid-cols-3 gap-5 w-full px-5 text-left text-sm mb-8">
                      <div className="bg-muted/50 border border-border p-5 rounded animate-pulse-data">
                        <h5 className="text-primary font-bold mb-2 text-lg">Kasaflow</h5>
                        <p className="font-semibold text-xl">📈 128 Panen aktif</p>
                        <p className="text-base">✅ 98% Verifikasi Lapang</p>
                        <p className="text-base">📍 12 Desa Terkoneksi</p>
                      </div>
                      <div className="bg-muted/50 border border-border p-5 rounded animate-pulse-data" style={{animationDelay: '1s'}}>
                        <h5 className="text-primary font-bold mb-2 text-lg">PoKu</h5>
                        <p className="font-semibold text-xl">⭐ 6.200 Anggota Loyalti</p>
                        <p className="text-base">📊 Retensi 90%</p>
                        <p className="text-base">💰 Rata-rata Poin 750</p>
                      </div>
                      <div className="bg-muted/50 border border-border p-5 rounded animate-pulse-data" style={{animationDelay: '2s'}}>
                        <h5 className="text-primary font-bold mb-2 text-lg">Traki</h5>
                        <p className="font-semibold text-xl">🚜 45 Unit aktif</p>
                        <p className="text-base">⏱️ Siklus 4.5 jam</p>
                        <p className="text-base">📉 Efisiensi Biaya 12%</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mt-auto pt-4 italic text-center w-full px-4">
                      Data sinkron dari 12 desa — 5 permintaan alat, 3 panen baru, 2 loyalti aktif diperbarui.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Three Cards */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 justify-items-center relative z-10">
          {/* Card 1: Kasaflow */}
          <div className="w-full bg-card p-6 rounded-2xl shadow-card transition-smooth hover:shadow-lg hover:-translate-y-1 flex flex-col items-center text-center animate-fade-in max-w-[380px]">
            <h3 className="text-2xl font-bold mb-4 text-primary">Kasaflow</h3>
            
            <div className="mb-4 flex justify-center">
              <KasaflowMockup />
            </div>
            
            <p className="text-sm text-muted-foreground font-medium pt-2">
              Pencatatan Lapangan & Verifikasi Real-time. Input panen, verifikasi lahan, dan hasil timbang. Data real-time terpusat.
            </p>
          </div>

          {/* Card 2: PoKu */}
          <div className="w-full bg-card p-6 rounded-2xl shadow-card transition-smooth hover:shadow-lg hover:-translate-y-1 flex flex-col items-center text-center animate-fade-in max-w-[380px]">
            <h3 className="text-2xl font-bold mb-4 text-primary">PoKu (Poin Pelanggan)</h3>
            
            <div className="mb-4 flex justify-center">
              <PokuMockup />
            </div>
            
            <p className="text-sm text-muted-foreground font-medium pt-2">
              Loyalitas & Pemasaran Cerdas. Pemberian poin, rekapitulasi data, dan rekomendasi marketing berbasis analisis panen.
            </p>
          </div>

          {/* Card 3: Traki */}
          <div className="w-full bg-card p-6 rounded-2xl shadow-card transition-smooth hover:shadow-lg hover:-translate-y-1 flex flex-col items-center text-center animate-fade-in max-w-[380px]">
            <h3 className="text-2xl font-bold mb-4 text-primary">Traki</h3>
            
            <div className="mb-4 flex justify-center">
              <TrakiMockup />
            </div>
            
            <p className="text-sm text-muted-foreground font-medium pt-2">
              Manajemen Logistik Alat. Pengaturan jadwal, biaya sewa alat, dan notifikasi pengembalian otomatis berdasarkan kebutuhan panen.
            </p>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="mt-16 md:mt-24 text-center animate-fade-in relative z-10">
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" className="px-8 py-3 text-lg" asChild>
              <Link to="/tentang">Pelajari Ekosistem Naraflow</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <Link to="/kontak">Hubungi Tim Kami</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
