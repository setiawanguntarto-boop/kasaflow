const WhatsAppMockup = () => {
  return (
    <div className="w-full max-w-sm bg-card rounded-3xl shadow-card border border-border overflow-hidden animate-scale-in">
      <div className="bg-primary p-4 flex items-center gap-3">
        <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-soft">
          K
        </div>
        <div>
          <h3 className="font-semibold text-primary-foreground">Kasaflow Agent</h3>
          <p className="text-xs text-primary-foreground/80">online</p>
        </div>
      </div>
      
      <div 
        className="h-96 p-4 space-y-3 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-accent/40 backdrop-blur-[1px]"></div>
        
        <div className="relative z-10 space-y-3">
          <div className="flex justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card rounded-2xl rounded-tr-sm p-3 max-w-xs text-sm shadow-card">
              Ajukan panen baru
            </div>
          </div>
          
          <div className="flex justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="bg-accent/90 backdrop-blur-sm rounded-2xl rounded-tl-sm p-3 max-w-xs text-sm shadow-card">
              Baik. Mohon ketik nama petani.
            </div>
          </div>
          
          <div className="flex justify-end animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="bg-card rounded-2xl rounded-tr-sm p-3 max-w-xs text-sm shadow-card">
              Bapak Slamet
            </div>
          </div>
          
          <div className="flex justify-start animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="bg-accent/90 backdrop-blur-sm rounded-2xl rounded-tl-sm p-3 max-w-xs text-sm shadow-card">
              ✅ Data tersimpan. Lokasi lahan?
            </div>
          </div>
          
          <div className="flex justify-start animate-fade-in" style={{ animationDelay: "1s" }}>
            <div className="bg-accent/90 backdrop-blur-sm rounded-2xl rounded-tl-sm p-3 max-w-xs text-sm shadow-card">
              Status panen an. Bpk Slamet: <span className="font-semibold text-primary">Terverifikasi Lapang</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-3 bg-muted text-center text-xs text-muted-foreground">
        Simulasi Chat Interaktif
      </div>
    </div>
  );
};

export default WhatsAppMockup;
