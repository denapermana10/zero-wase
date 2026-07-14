import React from "react";
import { ArrowDown, DollarSign, Fuel, AlertTriangle, ShieldCheck, TrendingUp, Sparkles, Truck } from "lucide-react";
import { motion } from "motion/react";

export default function AlurMasalahSolusi() {
  const conventionalSteps = [
    { title: "Sumber Sampah", desc: "Rumah tangga, pasar, hotel, kawasan industri.", icon: "🏠" },
    { title: "Petugas Ambil", desc: "Sampah disatukan tanpa pemilahan material.", icon: "🧑‍🌾" },
    { title: "TPS Kawasan", desc: "Penumpukan sementara, bau menyengat & lalat.", icon: "🗑️" },
    { title: "Mobilitas Armada", desc: "Truk menempuh rute jauh berbakar solar mahal.", icon: "🚛" },
    { title: "Landfill TPA", desc: "Ditumpuk terbuka, gas metana & pencemaran air tanah.", icon: "⛰️" },
  ];

  const rrProSteps = [
    { title: "Sumber Sampah", desc: "Dipilah ringan di lokasi kawasan.", icon: "🏠" },
    { title: "Local Hopper", desc: "Masuk penampungan langsung tanpa biaya angkut jauh.", icon: "📥" },
    { title: "Mesin ZW-1500", desc: "Proses cepat pengeringan, pencacahan, pencetakan.", icon: "⚙️" },
    { title: "Carbon Pellet", desc: "Tercipta bahan bakar biomassa kalori 4.500+ kcal.", icon: "🔥" },
    { title: "Kontrak Buyback", desc: "Langsung dibeli oleh mitra industri / PLTU (Cuan!).", icon: "💰" },
  ];

  return (
    <section id="solusi" className="py-20 bg-neutral-900 text-white relative overflow-hidden">
      {/* Visual background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 font-mono">
            Rantai Nilai & Alur Kerja
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mt-3">
            Mengubah Beban Pengeluaran Menjadi Sumber Pendapatan
          </h2>
          <div className="h-1.5 w-16 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 1. Alur Masalah Konvensional */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6 bg-red-950/40 border border-red-900/50 w-fit px-4 py-2 rounded-xl">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <h3 className="font-display font-extrabold text-base tracking-wide uppercase text-red-200">
              Alur Konvensional: Mahal & Merusak Lingkungan
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {conventionalSteps.map((step, idx) => (
              <div key={idx} className="relative group bg-neutral-950 border border-neutral-800 rounded-xl p-5 hover:border-red-900/60 transition-colors">
                <div className="text-3xl mb-3">{step.icon}</div>
                <div className="text-[11px] font-bold text-neutral-500 font-mono mb-1">LANGKAH 0{idx + 1}</div>
                <h4 className="font-bold text-sm text-neutral-100 mb-1.5">{step.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{step.desc}</p>

                {/* Arrow to next item for desktop */}
                {idx < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-20">
                    <svg className="w-8 h-8 text-neutral-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* High Cost Badge */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-red-950/40 border border-red-900/50">
            <div className="flex items-center gap-3 text-red-200">
              <DollarSign className="h-6 w-6 text-red-500 flex-shrink-0" />
              <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                <strong className="text-red-400">Kerugian Finansial:</strong> Tipping fee tinggi, biaya solar truk pengangkut melonjak terus-menerus, dan ketergantungan 100% pada pihak ketiga tanpa ada timbal balik produk.
              </p>
            </div>
            <span className="px-4 py-2 rounded bg-red-600/90 text-xs font-bold font-mono tracking-wider text-white uppercase text-center w-full sm:w-auto">
              BIAYA SANGAT MAHAL
            </span>
          </div>
        </div>

        {/* Dynamic Transition Panah */}
        <div className="flex flex-col items-center justify-center my-10 py-4 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-24 w-[1px] bg-gradient-to-b from-red-500 via-amber-500 to-emerald-500 opacity-60"></div>
          </div>
          <div className="relative bg-amber-500 text-neutral-950 rounded-full p-3 font-display font-extrabold text-xs tracking-widest shadow-xl flex items-center gap-1.5 animate-bounce">
            SOLUSI RR PRO
            <ArrowDown className="h-4 w-4" />
          </div>
        </div>

        {/* 2. Alur Solusi RR Pro */}
        <div>
          <div className="flex items-center gap-3 mb-6 bg-emerald-950/40 border border-emerald-900/50 w-fit px-4 py-2 rounded-xl">
            <ShieldCheck className="h-5 w-5 text-emerald-500" />
            <h3 className="font-display font-extrabold text-base tracking-wide uppercase text-emerald-200">
              Alur RR Pro: Zero Waste, Mandiri & Menghasilkan Keuntungan
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {rrProSteps.map((step, idx) => (
              <div key={idx} className="relative group bg-neutral-950 border border-neutral-800 rounded-xl p-5 hover:border-amber-500/50 transition-all">
                <div className="text-3xl mb-3">{step.icon}</div>
                <div className="text-[11px] font-bold text-amber-500 font-mono mb-1">LANGKAH 0{idx + 1}</div>
                <h4 className="font-bold text-sm text-neutral-100 mb-1.5">{step.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{step.desc}</p>

                {/* Arrow to next item for desktop */}
                {idx < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-20">
                    <svg className="w-8 h-8 text-amber-500/40 group-hover:text-amber-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Profit Revenue Badge */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-emerald-950/40 border border-emerald-900/50">
            <div className="flex items-center gap-3 text-emerald-200">
              <TrendingUp className="h-6 w-6 text-emerald-500 flex-shrink-0" />
              <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                <strong className="text-emerald-400">Keuntungan Ganda:</strong> 100% memangkas biaya transportasi & retribusi TPA, dan menghasilkan carbon pellet bernilai ekonomi yang kami buyback langsung melalui jaminan kerja sama minimal 2 tahun.
              </p>
            </div>
            <span className="px-4 py-2 rounded bg-emerald-600/90 text-xs font-bold font-mono tracking-wider text-white uppercase text-center w-full sm:w-auto">
              MENGUNTUNGKAN & MANDIRI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
