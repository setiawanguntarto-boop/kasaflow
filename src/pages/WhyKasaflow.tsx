import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";

const WhyKasaflow = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Kenapa Kasaflow?</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default WhyKasaflow;
