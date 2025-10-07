import Header from "@/components/Header";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 md:py-24 bg-accent/30">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
              Hubungi Kasaflow
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Ingin mencoba Kasaflow untuk tim lapangan Anda? Hubungi kami untuk demo dan integrasi awal.
            </p>
            <div className="mt-12 space-y-6 inline-block text-left animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-4 bg-card p-6 rounded-2xl shadow-card border border-border hover:shadow-soft transition-smooth">
                <Phone className="text-primary w-6 h-6" />
                <a 
                  href="https://wa.me/6287731771859" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors text-lg"
                >
                  +62 877-3177-1859
                </a>
              </div>
              <div className="flex items-center gap-4 bg-card p-6 rounded-2xl shadow-card border border-border hover:shadow-soft transition-smooth">
                <Mail className="text-primary w-6 h-6" />
                <a 
                  href="mailto:setiawan@naraflow.id" 
                  className="text-foreground hover:text-primary transition-colors text-lg"
                >
                  setiawan@naraflow.id
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
