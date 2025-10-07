import Header from "@/components/Header";
import TimelineStep from "@/components/TimelineStep";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 md:py-24 bg-accent/30">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
                Cara Kerja Kasaflow
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Dari pengajuan hingga rekap, semua proses panen tercatat dalam beberapa langkah mudah melalui WhatsApp.
              </p>
            </div>
            <div className="mt-16 max-w-3xl mx-auto">
              <TimelineStep
                number={1}
                title="Pengajuan Panen oleh Petani"
                description="Petani menghubungi petugas melalui WhatsApp untuk mengajukan panen."
                delay="0s"
              />
              <TimelineStep
                number={2}
                title="Input Data di Kasaflow"
                description="Petugas mengikuti instruksi otomatis dari agent: nama petani, lokasi lahan, estimasi tonase, dan tanggal panen."
                delay="0.1s"
              />
              <TimelineStep
                number={3}
                title="Verifikasi Lapangan"
                description="Petugas memverifikasi lahan dan memperbarui status menjadi 'Terverifikasi Lapang'."
                delay="0.2s"
              />
              <TimelineStep
                number={4}
                title="Penjadwalan & Penimbangan"
                description="Setelah disetujui, Kasaflow mengirimkan jadwal panen dan mencatat hasil timbang aktual."
                delay="0.3s"
              />
              <TimelineStep
                number={5}
                title="Rekap Otomatis"
                description="Semua data panen tersimpan otomatis dan dapat diunduh sebagai laporan."
                isLast={true}
                delay="0.4s"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HowItWorks;
