import React, { useState, useEffect } from 'react';

// --- Component Bantuan: Header ---
const Header = () => (
  <header className="bg-white shadow-sm sticky top-0 z-10">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-extrabold text-[#1B4332] font-['Inter',_sans-serif]">
        Kasaflow
      </div>
      <nav>
        <button
          onClick={() => window.location.href = '/'}
          className="text-sm md:text-base bg-[#2E7D32] text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-[#1B4332] transition duration-300"
        >
          Kembali ke Beranda
        </button>
      </nav>
    </div>
  </header>
);

// --- Component Bantuan: ProductCard ---
const ProductCard = ({ icon, title, subtitle, description, points, colorClass, delay, isMounted }) => (
  <div
    className={`
      bg-white rounded-xl p-8 shadow-lg transition-all duration-700 transform border-b-4 ${colorClass} 
      ${isMounted ? 'opacity-100 translate-y-0 hover:-translate-y-1 hover:shadow-xl' : 'opacity-0 translate-y-8'}
    `}
    style={{ transitionDelay: isMounted ? delay : '0s' }}
  >
    <div className={`text-4xl mb-4 p-3 w-fit rounded-lg bg-opacity-10 ${colorClass.replace('border-b-4', 'text')}`}>{icon}</div>
    
    <h3 className={`text-2xl font-extrabold ${colorClass.replace('border-b-4', 'text')} mb-1`}>
      {title}
    </h3>
    <p className="text-sm font-semibold text-gray-500 mb-4">{subtitle}</p>
    
    <p className="text-gray-700 text-sm leading-relaxed mb-4">
      {description}
    </p>
    
    <ul className="space-y-2 pt-2 border-t border-gray-100">
      {points.map((point, index) => (
        <li key={index} className="flex items-start text-xs text-gray-600">
          <svg className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${colorClass.replace('border-b-4', 'text')}`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          {point}
        </li>
      ))}
    </ul>
  </div>
);

// --- Komponen Utama: About ---
const About = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const kasaflowProducts = [
    {
      icon: '📷',
      title: 'Kasaflow BOT',
      subtitle: 'Agent Pelaporan Timbang Otomatis',
      description: 'Agent lapangan untuk pelaporan hasil timbang pabrik. Field officer cukup mengirim foto nota timbang ke WhatsApp, dan sistem akan mem-parsing otomatis data penting (tonase, tanggal, petani). Data langsung terhubung ke ERP via API.',
      points: [
        'Upload nota timbang di WhatsApp (Multi-Foto)',
        'Parsing data otomatis berbasis OCR',
        'Sinkronisasi real-time ke sistem ERP'
      ],
      colorClass: 'border-[#2E7D32] text-[#2E7D32]',
      delay: '0.1s'
    },
    {
      icon: '⭐️',
      title: 'PoKu',
      subtitle: 'Poin & CRM Agent untuk Petani',
      description: 'Agent yang berfungsi sebagai CRM dan loyalty hub bagi petani mitra. PoKu menginformasikan jumlah poin, merekap pengambilan hasil panen, dan menampilkan program promo atau reward yang sedang berjalan. Merekam interaksi untuk analisis retensi.',
      points: [
        'Notifikasi poin dan rekap hasil panen',
        'Informasi promo & program loyalitas',
        'Analisis retensi & engagement petani'
      ],
      colorClass: 'border-[#4CAF50] text-[#4CAF50]',
      delay: '0.2s'
    },
    {
      icon: '🚜',
      title: 'Traki',
      subtitle: 'Logistik & Sparepart Agent',
      description: 'Agent untuk manajemen logistik, jual-beli sparepart traktor, dan layanan sewa alat pertanian. Traki membantu tim lapangan memesan alat, menjadwalkan penggunaan, serta memonitor pengembalian dan perawatan unit secara otomatis.',
      points: [
        'Penjadwalan & penyewaan traktor via WhatsApp',
        'Transaksi sparepart langsung ke gudang',
        'Integrasi pengingat servis & pengembalian'
      ],
      colorClass: 'border-[#81C784] text-[#81C784]',
      delay: '0.3s'
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-gray-800 font-['Inter',_sans-serif]">
      <Header />
      
      <main>
        <section className="py-20 md:py-28 text-center overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            <h1
              className={`text-4xl md:text-6xl font-extrabold text-[#1B4332] mb-6 transition-opacity duration-1000 transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Otomasi Bisnis Trading Singkong
            </h1>
            <p
              className={`mt-4 max-w-4xl mx-auto text-lg md:text-xl text-gray-600 transition-opacity duration-1000 leading-relaxed ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: isMounted ? "0.2s" : "0s" }}
            >
              <strong className="text-[#2E7D32]">Kasaflow</strong> adalah ekosistem agent cerdas berbasis WhatsApp yang dirancang untuk mengelola seluruh rantai operasional trading singkong. Dari 
              <span className="font-semibold text-gray-700"> pelaporan panen otomatis, loyalitas petani, hingga manajemen alat berat</span>, semua data dikirim ke sistem ERP Anda secara real-time melalui API, memastikan proses bisnis berjalan cepat, akurat, dan terintegrasi penuh.
            </p>
          </div>
        </section>

        <section className="pb-24 pt-10">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] text-center mb-16">
              3 Pilar Solusi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
              {kasaflowProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  icon={product.icon}
                  title={product.title}
                  subtitle={product.subtitle}
                  description={product.description}
                  points={product.points}
                  colorClass={product.colorClass}
                  delay={product.delay}
                  isMounted={isMounted}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-200">
        © {new Date().getFullYear()} Kasaflow. All Rights Reserved.
      </footer>
    </div>
  );
};

export default About;
