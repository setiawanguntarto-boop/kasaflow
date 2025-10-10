import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Video, Phone, MoreVertical, Smile, Paperclip, Camera } from "lucide-react";
interface Message {
  sender: 'user' | 'bot';
  text: string;
  delay: number;
}
const conversationFlow: Message[] = [{
  sender: 'bot',
  text: 'Selamat datang di Kasaflow! Asisten digital Anda untuk manajemen panen singkong.',
  delay: 1500
}, {
  sender: 'bot',
  text: 'Sistem sedang memeriksa nomor Anda...',
  delay: 2000
}, {
  sender: 'bot',
  text: 'Nomor Anda terdaftar sebagai <b>Budi (Field Officer)</b> dari Unit Cikajang. Selamat datang kembali!',
  delay: 2500
}, {
  sender: 'bot',
  text: 'Berikut adalah menu utama yang tersedia:<br><b>1. Ajukan Panen</b><br><b>2. Verifikasi Lapang</b><br><b>3. Penjadwalan</b><br><b>4. Penimbangan (Timbang)</b><br><b>5. Laporan & Riwayat</b><br><b>6. Pengaturan</b><br><br>Silakan balas dengan angka untuk memilih menu.',
  delay: 2000
}, {
  sender: 'user',
  text: '1',
  delay: 3000
}, {
  sender: 'bot',
  text: 'Anda memilih <b>1. Ajukan Panen</b>.',
  delay: 1500
}, {
  sender: 'bot',
  text: 'Silakan kirim data pengajuan dengan format:<br><code>Nama Petani, Lokasi (ShareLoc/Link Peta), Estimasi (ton), Tgl Rencana Panen</code>',
  delay: 2000
}, {
  sender: 'user',
  text: 'Pak Subagyo, https://maps.app.goo.gl/xyz, 15 ton, 10 Oktober 2025',
  delay: 4000
}, {
  sender: 'bot',
  text: 'Data diterima. Sedang memvalidasi...',
  delay: 2000
}, {
  sender: 'bot',
  text: '<b>Konfirmasi Pengajuan:</b><br> • Petani: Pak Subagyo<br> • Lokasi: Valid<br> • Estimasi: 15 Ton<br> • Tgl Panen: 10/10/2025<br><br>Balas <b>OK</b> untuk konfirmasi.',
  delay: 2500
}, {
  sender: 'user',
  text: 'OK',
  delay: 2000
}, {
  sender: 'bot',
  text: '✅ Berhasil! ID Panen <b>PANEN-123</b> telah dibuat dengan status <code>PENDING_VERIF</code>. Silakan lanjutkan ke menu <b>2. Verifikasi Lapang</b>.',
  delay: 2500
}, {
  sender: 'bot',
  text: 'Silakan pilih menu selanjutnya:<br><b>1. Ajukan Panen</b><br><b>2. Verifikasi Lapang</b><br><b>3. Penjadwalan</b><br><b>4. Penimbangan (Timbang)</b><br><b>5. Laporan & Riwayat</b><br><b>6. Pengaturan</b>',
  delay: 2000
}, {
  sender: 'user',
  text: '2',
  delay: 3000
}, {
  sender: 'bot',
  text: 'Anda memilih <b>2. Verifikasi Lapang</b>. Masukkan ID Panen yang akan diverifikasi.',
  delay: 2000
}, {
  sender: 'user',
  text: 'PANEN-123',
  delay: 2000
}, {
  sender: 'bot',
  text: 'Baik. Untuk <b>PANEN-123</b>, silakan kirimkan <b>foto kebun</b> dan <b>lokasi live</b> Anda saat ini.',
  delay: 2500
}, {
  sender: 'user',
  text: '📸 [Foto kebun singkong terkirim]',
  delay: 3000
}, {
  sender: 'user',
  text: '📍 [Lokasi live terkirim]',
  delay: 1500
}, {
  sender: 'bot',
  text: 'Bukti diterima. Memvalidasi lokasi (dalam radius 50m) dan kualitas foto...',
  delay: 3000
}, {
  sender: 'bot',
  text: 'Validasi berhasil. Mohon isi checklist lapang:<br><code>Akses jalan, Perkiraan umur, Catatan risiko</code>',
  delay: 2500
}, {
  sender: 'user',
  text: 'Akses truk aman, Umur cukup, Risiko hujan',
  delay: 3500
}, {
  sender: 'bot',
  text: '✅ Checklist diterima. Status <b>PANEN-123</b> diubah menjadi <code>VERIF_OK</code>. Silakan lanjutkan ke <b>3. Penjadwalan</b>.',
  delay: 2500
}];
const WhatsAppMockup = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);
  useEffect(() => {
    const processMessage = () => {
      if (currentIndexRef.current >= conversationFlow.length) {
        setShowTyping(false);
        return;
      }
      const message = conversationFlow[currentIndexRef.current];
      if (message.sender === 'bot') {
        setShowTyping(true);
      }
      setTimeout(() => {
        if (message.sender === 'bot') {
          setShowTyping(false);
        }
        setMessages(prev => [...prev, message]);
        currentIndexRef.current++;
        processMessage();
      }, message.delay);
    };
    processMessage();
  }, []);
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages, showTyping]);
  const formatTime = () => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  };
  return <div className="w-full max-w-md bg-card rounded-3xl shadow-card border border-border overflow-hidden animate-scale-in flex flex-col" style={{
    height: '90vh',
    maxHeight: '800px'
  }}>
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-3 flex items-center shadow-md z-10">
        <ArrowLeft className="w-6 h-6 mr-4 cursor-pointer" />
        <div className="w-10 h-10 gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-bold mr-3">
          K
        </div>
        <div className="flex-grow">
          <h1 className="font-semibold text-base">Kasaflow Agent</h1>
          <p className="text-xs font-light">online</p>
        </div>
        <div className="flex items-center space-x-4">
          <Video className="w-5 h-5 cursor-pointer" />
          <Phone className="w-5 h-5 cursor-pointer" />
          <MoreVertical className="w-5 h-5 cursor-pointer" />
        </div>
      </header>

      {/* Chat Window */}
      <main ref={chatWindowRef} className="flex-grow p-4 overflow-y-auto bg-cover bg-center relative" style={{
      backgroundImage: "url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')"
    }}>
        <div className="absolute inset-0 bg-accent/40 backdrop-blur-[1px]"></div>
        
        <div className="relative z-10 space-y-2">
          {messages.map((message, index) => <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] p-3 rounded-lg shadow-card ${message.sender === 'user' ? 'bg-[#E2FDD6] rounded-tr-sm' : 'bg-card rounded-tl-sm'}`}>
                <p className="text-sm" dangerouslySetInnerHTML={{
              __html: message.text
            }}></p>
                <span className="block text-right mt-1 text-[0.7rem] text-muted-foreground">
                  {formatTime()}
                </span>
              </div>
            </div>)}
          
          {showTyping && <div className="flex justify-start">
              <div className="bg-card p-3 rounded-lg rounded-tl-sm shadow-card max-w-[75%]">
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{
                animationDelay: '0s'
              }}></span>
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{
                animationDelay: '0.2s'
              }}></span>
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{
                animationDelay: '0.4s'
              }}></span>
                </div>
              </div>
            </div>}
        </div>
      </main>

      {/* Input Area */}
      <footer className="bg-muted p-3 flex items-center">
        <Smile className="w-6 h-6 text-muted-foreground cursor-pointer" />
        <input type="text" placeholder="Ketik pesan" className="flex-grow bg-background rounded-full py-2 px-4 mx-2 focus:outline-none text-sm" disabled />
        <Paperclip className="w-6 h-6 text-muted-foreground cursor-pointer mr-2" />
        <Camera className="w-6 h-6 text-muted-foreground cursor-pointer" />
      </footer>
    </div>;
};
export default WhatsAppMockup;