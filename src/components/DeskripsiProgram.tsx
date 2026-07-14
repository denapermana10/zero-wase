import React from "react";
import { CheckCircle2, RefreshCw, Zap, TrendingUp, HelpCircle } from "lucide-react";

export default function DeskripsiProgram() {
  const pillars = [
    {
      title: "100% Zero Waste",
      desc: "Tidak menyisakan residu pencemaran lingkungan. Seluruh material organik dan anorganik kering diolah tuntas tanpa sisa.",
      icon: <RefreshCw className="h-6 w-6 text-amber-500" />,
    },
    {
      title: "Sampah Jadi Produk Baru",
      desc: "Bahan baku sampah yang tadinya tak berharga dikompresi menjadi carbon pellet biomassa berdaya kalori tinggi pengganti batu bara.",
      icon: <CheckCircle2 className="h-6 w-6 text-amber-500" />,
    },
    {
      title: "Self-Sustainable",
      desc: "Program ini mendanai operasionalnya sendiri melalui efisiensi retribusi TPA dan penjualan langsung hasil produksi pelet.",
      icon: <Zap className="h-6 w-6 text-amber-500" />,
    },
    {
      title: "BEP Kurang Dari 1 Tahun",
      desc: "Dengan margin keuntungan yang stabil dan kepastian serapan pasar (kontrak buyback), modal investasi kembali dalam waktu singkat.",
      icon: <TrendingUp className="h-6 w-6 text-amber-500" />,
    },
  ];

  return (
    <section id="program" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-mono">
            Keunggulan Program
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mt-3">
            Inovasi Pengolahan Mandiri & Berkelanjutan
          </h2>
          <div className="h-1.5 w-16 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-neutral-50 rounded-2xl border border-neutral-100 p-6 shadow-sm hover:shadow-md hover:border-amber-500/30 transition-all flex flex-col items-start"
            >
              <div className="p-3 bg-amber-50 rounded-xl mb-4 border border-amber-100">
                {pillar.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-950 mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Input Process Output Flow Block */}
        <div className="bg-neutral-900 text-white rounded-2xl p-6 md:p-10 border border-neutral-800 shadow-xl">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
              Bagan Proses Pengubahan Sampah Menjadi Emas Hitam (Pellet)
            </h3>
            <p className="text-xs text-neutral-400">
              Formulasi ideal yang menggabungkan residu padat, pengikat alami, dan katalis arang untuk mencapai tingkat kekeringan serta kalori bahan bakar komersial.
            </p>
          </div>

          {/* Flow diagram SVG/HTML representation */}
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 items-center relative">
            {/* 1. INPUT BLOCK */}
            <div className="lg:col-span-3 bg-neutral-950 border border-neutral-800 rounded-xl p-5 text-center">
              <span className="text-xs font-bold tracking-wider font-mono text-amber-500 uppercase block mb-3">
                1. BAHAN BAKU INPUT
              </span>
              <ul className="text-xs text-neutral-300 space-y-2 text-left inline-block">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                  Sampah Organik/Anorganik (90%)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                  Bubuk Arang / Residu (7%)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                  Tepung Tapioka Alami (3%)
                </li>
              </ul>
            </div>

            {/* Transition arrow 1 */}
            <div className="lg:col-span-1 flex justify-center text-amber-500 font-mono text-xl animate-pulse font-bold">
              <span className="lg:rotate-0 rotate-90">➔</span>
            </div>

            {/* 2. PROCESSING BLOCK */}
            <div className="lg:col-span-3 bg-amber-500 text-neutral-950 rounded-xl p-5 text-center shadow-lg relative">
              <div className="absolute top-2 right-2 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-950 animate-ping"></span>
                <span className="text-[7px] font-bold font-mono tracking-widest text-neutral-800">
                  ACTIVE
                </span>
              </div>
              <span className="text-xs font-bold tracking-widest font-mono text-neutral-900 uppercase block mb-1">
                2. PROSES OPERASIONAL
              </span>
              <p className="text-[10px] text-neutral-900 font-semibold mb-3">
                Sistem Mesin RR Pro ZW-1500
              </p>
              <div className="text-xs bg-neutral-950 text-amber-400 p-2.5 rounded font-mono text-left">
                [PENGADUKAN] ➔ [PENCETAKAN] ➔ [KOMPRESI TINGGI]
              </div>
            </div>

            {/* Transition arrow 2 */}
            <div className="lg:col-span-1 flex justify-center text-amber-500 font-mono text-xl animate-pulse font-bold">
              <span className="lg:rotate-0 rotate-90">➔</span>
            </div>

            {/* 3. OUTPUT & REVENUE BLOCK */}
            <div className="lg:col-span-3 bg-neutral-950 border border-neutral-800 rounded-xl p-5 text-center">
              <span className="text-xs font-bold tracking-wider font-mono text-emerald-500 uppercase block mb-2">
                3. HASIL AKHIR & CUAN
              </span>
              <p className="text-xs font-bold text-white mb-2">
                Carbon Pellet Biomassa
              </p>
              <div className="text-[10px] text-emerald-400 font-mono bg-emerald-950/30 border border-emerald-900/40 p-2 rounded">
                DIBELI KEMBALI (BUYBACK): Rp 2.000 / KG
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
