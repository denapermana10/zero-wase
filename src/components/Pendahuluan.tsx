import React from "react";
import { AlertCircle, Trash2, ArrowUpRight } from "lucide-react";

export default function Pendahuluan() {
  return (
    <section id="isu" className="py-20 bg-neutral-50 border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3 font-mono">
            Latar Belakang & Urgensi
          </h2>
          <p className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Indonesia Darurat Sampah: Krisis TPA & Retribusi Mahal
          </p>
          <div className="h-1.5 w-16 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Core Narrative & Image Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex gap-4 p-4 rounded-xl bg-amber-500/10 border border-amber-200 text-amber-900">
              <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-neutral-900">Landfill Overcapacity (TPA Penuh)</h4>
                <p className="text-xs text-neutral-700 mt-1 leading-relaxed">
                  TPA Sariwukti, Sarimukti, Bantargebang, dan puluhan TPA daerah lainnya sudah melebihi kapasitas operasional. Layanan pembuangan sampah konvensional terancam dihentikan sewaktu-waktu.
                </p>
              </div>
            </div>

            <h3 className="font-display text-2xl font-bold text-neutral-900 tracking-tight leading-snug">
              Mengapa Metode Pembuangan Konvensional Tidak Lagi Berkelanjutan?
            </h3>

            <p className="text-sm text-neutral-600 leading-relaxed">
              Setiap hari, ribuan ton sampah rumah tangga, pasar, industri, dan hotel diangkut bermil-mil jauhnya hanya untuk ditimbun. Proses ini tidak hanya merusak sanitasi lingkungan sekitar TPA, melainkan juga menuntut biaya logistik, bahan bakar armada, dan tipping fee/retribusi pengangkutan yang luar biasa mahal.
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              Pemerintah daerah mulai menerapkan kebijakan pembatasan pembuangan sampah ke TPA dan mengenakan tarif progresif yang memberatkan para pengelola kawasan. Solusi satu-satunya adalah <strong className="text-neutral-900 font-semibold">desentralisasi pengolahan sampah</strong> tepat di sumbernya, langsung mengubah residu berbiaya tinggi tersebut menjadi bahan bakar alternatif bernilai ekonomis tinggi.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-neutral-100 rounded-xl shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-neutral-900 font-bold text-sm">
                  <Trash2 className="h-5 w-5 text-amber-500" />
                  Biaya Tinggi
                </div>
                <p className="text-xs text-neutral-500 leading-normal">
                  Ratusan juta rupiah mengalir setiap tahun hanya untuk menyewa armada angkutan dan retribusi sampah swasta tanpa ada timbal balik nilai.
                </p>
              </div>

              <div className="p-4 bg-white border border-neutral-100 rounded-xl shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-neutral-900 font-bold text-sm">
                  <ArrowUpRight className="h-5 w-5 text-amber-500" />
                  Krisis Regulasi
                </div>
                <p className="text-xs text-neutral-500 leading-normal">
                  Tindakan tegas menanti bagi instansi yang melanggar aturan pemilahan & pengolahan mandiri sampah organik di kawasan perkotaan.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Visuals */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* Visual Card 1: Domestic Waste Crisis */}
            <div className="group relative rounded-2xl overflow-hidden shadow-md bg-white border border-neutral-200">
              <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80&w=600"
                  alt="Overflowing waste land"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 px-2 py-1 rounded bg-red-600/95 text-[10px] font-bold text-white uppercase tracking-wider font-mono">
                  Darurat Nasional
                </span>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-neutral-900 text-sm mb-1">
                  Gunungan Sampah Tak Terkelola
                </h4>
                <p className="text-xs text-neutral-500 leading-normal">
                  Lebih dari 60% sampah di Indonesia berakhir di TPA terbuka tanpa pemilahan, memicu emisi gas metana yang merusak atmosfer.
                </p>
              </div>
            </div>

            {/* Visual Card 2: Pellet Solution */}
            <div className="group relative rounded-2xl overflow-hidden shadow-md bg-white border border-neutral-200">
              <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1605600611283-c45c44d8a1fc?auto=format&fit=crop&q=80&w=600"
                  alt="Eco biomass fuel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 px-2 py-1 rounded bg-amber-500/95 text-[10px] font-bold text-white uppercase tracking-wider font-mono">
                  Solusi RR Pro
                </span>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-neutral-900 text-sm mb-1">
                  Energi Biomassa Baru (Carbon Pellet)
                </h4>
                <p className="text-xs text-neutral-500 leading-normal">
                  Teknologi kami mengeringkan, mencacah, dan mencetak residu sampah tersebut menjadi briket/pelet berkalori tinggi pengganti batu bara.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
