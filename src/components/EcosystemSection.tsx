import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const EcosystemSection = () => {
  return <section className="py-24 px-6 md:px-8 bg-background overflow-hidden ecosystem-bg">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <header className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in text-foreground">
            Ekosistem <span className="text-primary">Kasaflow</span> by <span className="text-purple-600">Naraflow</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground animate-fade-in">
            Integrasi ERP yang sempurna dengan Agent WhatsApp cerdas: Kasaflow untuk manajemen data lapangan, PoKu Agent untuk loyalitas pelanggan, dan Traki Agent untuk logistik pertanian.
          </p>
          
          {/* Dashboard Visualization */}
          <div className="flex justify-center my-8 animate-fade-in">
            <div className="relative w-80 h-64 md:w-[900px] md:h-[550px] flex items-center justify-center">
              <svg width="100%" height="100%" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
                {/* Data Flow Arrows */}
                <path d="M10 100 C 30 90, 45 80, 60 70" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" className="connector-line" />
                <circle cx="10" cy="100" r="3" fill="hsl(var(--primary))" />
                <path d="M63 70 L59 66 M63 70 L59 74" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
                
                <path d="M10 60 C 30 60, 45 50, 60 50" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" className="connector-line" />
                <circle cx="10" cy="60" r="3" fill="hsl(var(--primary))" />
                <path d="M63 50 L59 46 M63 50 L59 54" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
                
                <path d="M150 100 C 130 90, 115 80, 100 70" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" className="connector-line" />
                <circle cx="150" cy="100" r="3" fill="hsl(var(--primary))" />
                <path d="M97 70 L101 66 M97 70 L101 74" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
                
                <rect x="25" y="100" width="110" height="2" rx="1" fill="#444444" />
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
                      <div className="bg-muted/50 border border-border p-5 rounded animate-pulse-data" style={{
                      animationDelay: '1s'
                    }}>
                        <h5 className="text-primary font-bold mb-2 text-lg">PoKu</h5>
                        <p className="font-semibold text-xl">⭐ 6.200 Anggota Loyalti</p>
                        <p className="text-base">📊 Retensi 90%</p>
                        <p className="text-base">💰 Rata-rata Poin 750</p>
                      </div>
                      <div className="bg-muted/50 border border-border p-5 rounded animate-pulse-data" style={{
                      animationDelay: '2s'
                    }}>
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
          <div className="w-full bg-card p-6 rounded-2xl shadow-card transition-smooth hover:shadow-lg hover:-translate-y-1 flex flex-col items-center text-center animate-fade-in border-2 border-accent bg-accent/5 max-w-[380px]">
            <h3 className="text-2xl font-bold mb-3 text-accent">Kasaflow</h3>
            <p className="text-xs font-semibold text-accent/70 -mt-2 mb-3 bg-accent/10 px-3 py-1 rounded-full">📊 ERP-Integrated Feature</p>
            
            <div className="mockup-frame mb-4 w-full relative">
              <div className="absolute top-0 right-0 m-4 z-20">
                <svg className="w-5 h-5" fill="none" stroke="hsl(var(--primary))" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="mockup-screen whatsapp-bg flex flex-col">
                <div className="whatsapp-header p-3 flex items-center text-white text-sm font-semibold border-b border-gray-100">
                  <span className="bg-white rounded-full w-6 h-6 mr-3 flex items-center justify-center text-xs font-bold text-[#00A884]">K</span>
                  <span className="flex-grow text-base">Kasaflow Agent</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto">
                    <circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" />
                  </svg>
                </div>
                <div className="chat-scroll overflow-y-auto p-3 text-sm space-y-2">
                  <div className="flex justify-start">
                    <span className="agent-bubble p-2 max-w-[90%]">Selamat datang di Kasaflow! Asisten digital Anda untuk manajemen panen singkong. Nomor Anda terdaftar sebagai <b>Budi (Field Officer)</b>.</span>
                  </div>
                  <div className="flex justify-start">
                    <span className="agent-bubble p-2 max-w-[90%]">Menu:<br /><b>1. Ajukan Panen</b><br /><b>2. Verifikasi Lapang</b><br /><b>3. Penimbangan</b></span>
                  </div>
                  <div className="flex justify-end">
                    <span className="user-bubble p-2 max-w-[80%]">1<span className="timestamp ml-2">9:30</span></span>
                  </div>
                  <div className="flex justify-start">
                    <span className="agent-bubble p-2 max-w-[90%]">✅ ID Panen <b>PANEN-123</b> dibuat. Status <code>PENDING_VERIF</code>.</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground font-medium pt-2">
              Fitur pelengkap ERP untuk pencatatan lapangan & verifikasi real-time. Input panen, verifikasi lahan, dan hasil timbang terintegrasi langsung dengan sistem ERP pusat.
            </p>
          </div>

          {/* Card 2: PoKu */}
          <div className="w-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-2xl shadow-card transition-smooth hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1 flex flex-col items-center text-center animate-fade-in border-2 border-purple-500 max-w-[380px]">
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">PoKu</h3>
            <p className="text-xs font-semibold text-purple-600 -mt-2 mb-3 bg-purple-500/20 px-3 py-1 rounded-full">🤖 AI-Powered Agent</p>
            
            <div className="mockup-frame mb-4 w-full relative">
              <div className="absolute top-0 right-0 m-4 z-20">
                <svg className="w-5 h-5" fill="none" stroke="hsl(var(--primary))" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="mockup-screen whatsapp-bg flex flex-col">
                <div className="whatsapp-header p-3 flex items-center text-white text-sm font-semibold border-b border-gray-100">
                  <span className="bg-white rounded-full w-6 h-6 mr-3 flex items-center justify-center text-xs font-bold text-[#00A884]">P</span>
                  <span className="flex-grow text-base">Loyalitas PoKu Agent</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto">
                    <circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" />
                  </svg>
                </div>
                <div className="chat-scroll overflow-y-auto p-3 text-sm space-y-2">
                  <div className="flex justify-start">
                    <span className="agent-bubble p-2 max-w-[85%]">Selamat datang di LoyalKasaflow 👋<br />Program loyalty pelanggan KasaFlow.</span>
                  </div>
                  <div className="flex justify-end">
                    <span className="user-bubble p-2 max-w-[80%]">1<span className="timestamp ml-2">10:05</span></span>
                  </div>
                  <div className="flex justify-start">
                    <span className="agent-bubble p-2 max-w-[85%]">Ranking Anda saat ini: <b>#4 dari 100 customer</b>.<br />Periode: Sep 2025.</span>
                  </div>
                  <div className="flex justify-start">
                    <span className="agent-bubble p-2 max-w-[85%]">Total pengambilan Anda: ➡️ <b>3.720 kg</b>.</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground font-medium pt-2">
              Agent cerdas untuk loyalitas & pemasaran otomatis. AI-driven customer engagement dengan pemberian poin otomatis, rekapitulasi data pelanggan, dan rekomendasi marketing berbasis analisis panen.
            </p>
          </div>

          {/* Card 3: Traki */}
          <div className="w-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-2xl shadow-card transition-smooth hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1 flex flex-col items-center text-center animate-fade-in border-2 border-purple-500 max-w-[380px]">
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Traki</h3>
            <p className="text-xs font-semibold text-purple-600 -mt-2 mb-3 bg-purple-500/20 px-3 py-1 rounded-full">🤖 AI-Powered Agent</p>
            
            <div className="mockup-frame mb-4 w-full relative">
              <div className="absolute top-0 right-0 m-4 z-20">
                <svg className="w-5 h-5" fill="none" stroke="hsl(var(--primary))" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="mockup-screen whatsapp-bg flex flex-col">
                <div className="whatsapp-header p-3 flex items-center text-white text-sm font-semibold border-b border-gray-100">
                  <span className="bg-white rounded-full w-6 h-6 mr-3 flex items-center justify-center text-xs font-bold text-[#00A884]">T</span>
                  <span className="flex-grow text-base">Traki Logistics Agent</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto">
                    <circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" />
                  </svg>
                </div>
                <div className="chat-scroll overflow-y-auto p-3 text-sm space-y-2">
                  <div className="flex justify-end">
                    <span className="user-bubble p-2 max-w-[80%]">/sewa_traktor<span className="timestamp ml-2">11:10</span></span>
                  </div>
                  <div className="flex justify-start">
                    <span className="agent-bubble p-2 max-w-[80%]">Permintaan sewa diterima. Kebutuhan alat (Traktor) dari data Kasaflow: <b>PANEN-123</b>.</span>
                  </div>
                  <div className="flex justify-start">
                    <span className="agent-bubble p-2 max-w-[80%]">Jadwal tersedia: <b>tgl 15 Okt</b>. Biaya Rp 500rb/hari. Konfirmasi?</span>
                  </div>
                  <div className="flex justify-end">
                    <span className="user-bubble p-2 max-w-[80%]">Ya, konfirmasi<span className="timestamp ml-2">11:11</span></span>
                  </div>
                  <div className="flex justify-start">
                    <span className="agent-bubble p-2 max-w-[80%]">✅ Penyewaan Traktor tgl 15 Okt berhasil.</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground font-medium pt-2">
              Agent otomatis untuk manajemen logistik alat pertanian. AI mengatur jadwal optimal, koordinasi sewa alat, dan notifikasi pengembalian otomatis berdasarkan data kebutuhan panen real-time.
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
    </section>;
};
export default EcosystemSection;