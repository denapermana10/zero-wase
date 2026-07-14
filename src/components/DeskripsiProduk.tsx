import React from "react";
import { Flame, ShoppingBag, Factory, Zap, Target } from "lucide-react";

export default function DeskripsiProduk() {
  const properties = [
    { title: "Kalori Tinggi", value: "4.200 - 4.800 Kcal/Kg", desc: "Mampu menyamai daya panas batu bara sub-bituminus industri." },
    { title: "Kelembapan Rendah", value: "< 10% Moisture", desc: "Tingkat pengeringan optimal mencegah jamur & awet disimpan bertahun-tahun." },
    { title: "Kadar Abu Minim", value: "< 4% Ash Content", desc: "Mengurangi sisa slag pembakaran di tungku batu bara / kiln." },
    { title: "Netral Karbon", value: "CO2 Neutral", desc: "Dibuat dari biomassa sampah organik, mereduksi emisi rumah kaca secara drastis." },
  ];

  const targetMarkets = [
    {
      title: "Kuliner & KUKM Lokal",
      desc: "Pabrik tahu/tempe, pembakaran genteng/keramik, penyulingan minyak atsiri, dan dapur usaha katering.",
      icon: <ShoppingBag className="h-5 w-5 text-amber-600" />,
    },
    {
      title: "Pabrik & Industri Biomassa",
      desc: "Perusahaan manufaktur tekstil, pengolahan makanan skala besar, dan pabrik pakan yang beralih dari solar/gas.",
      icon: <Factory className="h-5 w-5 text-amber-600" />,
    },
    {
      title: "PLTU Batu Bara (PLN Co-Firing)",
      desc: "Pembangkit listrik tenaga uap milik BUMN/Swasta yang wajib mencampur batu bara dengan biomassa sebesar 5% - 20% demi target Net Zero Emission.",
      icon: <Zap className="h-5 w-5 text-amber-600" />,
    },
  ];

  return (
    <section id="produk" className="py-20 bg-neutral-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 font-mono">
            Detail Output & Pasar
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mt-3">
            Mengenal Carbon Pellet: Komoditas Energi Masa Depan
          </h2>
          <div className="h-1.5 w-16 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Physical Specs Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {properties.map((prop, idx) => (
            <div key={idx} className="bg-neutral-950 border border-neutral-800 p-5 rounded-xl text-center">
              <span className="text-xs font-bold text-neutral-500 uppercase font-mono tracking-widest block mb-1">
                {prop.title}
              </span>
              <span className="text-2xl font-black text-amber-400 font-display block mb-2">
                {prop.value}
              </span>
              <p className="text-[11px] text-neutral-400 leading-normal">
                {prop.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Target Market Description block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Graphic image/icon overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 p-8 flex flex-col justify-between h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-transparent"></div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-mono block mb-2">
                  KOMODITAS EKSPOR & LOKAL
                </span>
                <h3 className="text-3xl font-black font-display text-white tracking-tight mb-4">
                  Permintaan Pasar Melimpah Ruah
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Krisis energi global dan dorongan regulasi dekarbonisasi memaksa ribuan pabrik menggantikan batu bara dengan energi bersih. Hasil produksi pelet dari mesin Anda memiliki kepastian serap tinggi!
                </p>
              </div>

              {/* Fire/Flame icon decorative badge */}
              <div className="mt-8 flex items-center gap-3 bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl">
                <Flame className="h-8 w-8 text-amber-500 flex-shrink-0 animate-pulse" />
                <div>
                  <span className="text-xs font-extrabold text-white block leading-none">HIGH CALORIFIC FUEL</span>
                  <span className="text-[10px] text-neutral-500 font-mono">REPLACE COAL CONVENTIONAL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Target markets explanation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2 bg-neutral-800 border border-neutral-700 w-fit px-3 py-1 rounded-lg">
              <Target className="h-4 w-4 text-amber-500" />
              <span className="text-xs font-bold uppercase tracking-widest font-mono text-amber-400">
                Segmentasi Pembeli Utama
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {targetMarkets.map((market, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-amber-500/30 transition-colors">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-500 h-fit">
                    {market.icon}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-neutral-100 mb-1">{market.title}</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">{market.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
