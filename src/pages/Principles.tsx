import Header from "@/components/Header";
import PrincipleCard from "@/components/PrincipleCard";

const Principles = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
                Core Principles
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Fondasi yang menjadikan Kasaflow sebagai asisten lapangan yang andal dan efisien.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <PrincipleCard
                title="Agent, not App"
                description="Kasaflow adalah asisten digital, bukan aplikasi. Ia bekerja langsung di WhatsApp untuk mendampingi petugas lapangan."
                delay="0s"
              />
              <PrincipleCard
                title="Workflow Integrity"
                description="Alur percakapan dikendalikan oleh FSM, memastikan setiap langkah panen tercatat berurutan dan tidak bisa dilewati."
                delay="0.1s"
              />
              <PrincipleCard
                title="Data Discipline"
                description="Setiap input diubah menjadi data terstruktur yang siap diolah ke laporan atau dashboard."
                delay="0.2s"
              />
              <PrincipleCard
                title="Traceability"
                description="Semua aktivitas dapat dilacak per petani, petugas, dan tanggal panen."
                delay="0.3s"
              />
              <PrincipleCard
                title="Simplicity by Design"
                description="Dibuat agar tetap efisien di kondisi lapangan dengan sinyal terbatas dan beban kerja tinggi."
                delay="0.4s"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Principles;
