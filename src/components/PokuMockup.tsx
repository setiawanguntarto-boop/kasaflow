import { useState, useEffect } from "react";

interface Message {
  text: string;
  type: "sent" | "received";
  time: string;
}

const PokuMockup = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  
  const conversation: Message[] = [
    {
      text: "Selamat datang di <b>LoyalKasaflow</b> 👋<br><br>Program loyalty pelanggan KasaFlow.",
      type: "received",
      time: "10:05",
    },
    {
      text: "Silakan pilih:<br><b>1. Cek Ranking Saya</b><br><b>2. Lihat Total Pengambilan</b><br><b>3. Info Program Loyalty</b>",
      type: "received",
      time: "10:05",
    },
    {
      text: "1",
      type: "sent",
      time: "10:06",
    },
    {
      text: "Sedang mengecek ranking Anda...",
      type: "received",
      time: "10:06",
    },
    {
      text: "Ranking Anda saat ini: <b>#4 dari 100 customer</b>.<br><br>Periode: Sep 2025.",
      type: "received",
      time: "10:06",
    },
    {
      text: "0",
      type: "sent",
      time: "10:07",
    },
    {
      text: "Silakan pilih:<br><b>1. Cek Ranking Saya</b><br><b>2. Lihat Total Pengambilan</b><br><b>3. Info Program Loyalty</b>",
      type: "received",
      time: "10:07",
    },
    {
      text: "2",
      type: "sent",
      time: "10:08",
    },
    {
      text: "Total pengambilan Anda: ➡️ <b>3.720 kg</b>.<br><br>Periode: Sep 2025.<br><br>Data tercatat. ✅",
      type: "received",
      time: "10:08",
    },
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (messages.length < conversation.length) {
      timer = setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, conversation[prevMessages.length]]);
      }, messages.length === 0 ? 1000 : 1800);
    } else {
      timer = setTimeout(() => {
        setMessages([]);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [messages, conversation]);

  return (
    <div className="w-full max-w-[320px] h-[500px] bg-card rounded-[2rem] shadow-card flex flex-col overflow-hidden border-2 border-primary">
      {/* WhatsApp Header */}
      <div className="bg-[#075E54] text-white p-3 flex items-center">
        <div className="flex items-center flex-1">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold text-[#00A884] mr-3">
            P
          </div>
          <div>
            <div className="text-sm font-semibold">Loyalitas PoKu BOT</div>
            <div className="text-xs opacity-80">online</div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>
        </svg>
      </div>
      
      {/* Chat Area */}
      <div className="flex-1 bg-[#EAE6DF] p-3 overflow-y-auto flex flex-col gap-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`
              max-w-[85%] p-2.5 rounded-xl text-xs break-words animate-fade-in
              ${msg.type === "sent" 
                ? "bg-[#E2FDD6] self-end rounded-br-sm" 
                : "bg-white self-start rounded-bl-sm shadow-sm"
              }
            `}
            style={{ 
              animationDelay: `${i * 0.3}s`,
            }}
            dangerouslySetInnerHTML={{ 
              __html: msg.text + `<div class='text-[0.6rem] opacity-60 mt-1.5 text-right'>${msg.time}</div>` 
            }}
          />
        ))}
      </div>
      
      {/* Input Area */}
      <div className="bg-[#F0F2F5] p-2.5 flex items-center gap-2">
        <input
          type="text"
          className="flex-1 px-3 py-2 bg-white rounded-full text-xs outline-none border border-border"
          placeholder="Ketik pesan..."
          disabled
        />
        <div className="w-8 h-8 bg-[#00A884] rounded-full flex justify-center items-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PokuMockup;
