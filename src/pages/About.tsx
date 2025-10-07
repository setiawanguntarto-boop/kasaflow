import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
              Tentang Kasaflow
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Kasaflow adalah agent cerdas berbasis WhatsApp yang dirancang untuk membantu perusahaan trading singkong mengelola data panen di lapangan dengan cepat dan tertib. Setiap interaksi menghasilkan catatan terstruktur — mulai dari data petani, lokasi lahan, estimasi tonase, hingga hasil timbang aktual.
            </p>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon="📱"
                title="Praktis"
                description="Cukup lewat WhatsApp, tanpa aplikasi tambahan."
                delay="0s"
              />
              <FeatureCard
                icon="🌾"
                title="Terstruktur"
                description="Alur percakapan mengikuti format standar panen."
                delay="0.1s"
              />
              <FeatureCard
                icon="⏱️"
                title="Real-time"
                description="Status panen diperbarui otomatis."
                delay="0.2s"
              />
              <FeatureCard
                icon="🧾"
                title="Tertelusur"
                description="Riwayat data panen dapat diakses kapan saja."
                delay="0.3s"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
