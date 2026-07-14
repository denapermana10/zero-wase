import React, { useState } from "react";
import { ListChecks, Flame, Package, ArrowRight, ShieldCheck } from "lucide-react";

export default function ProsesProduksi() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: "1. Pengumpulan Sampah",
      short: "Sampah",
      desc: "Sampah organik (sisa makanan, dedaunan, sayuran) dan anorganik kering (kertas, kardus, plastik tipis) dikumpulkan di lokasi.",
      icon: "🧹",
      highlight: "Pemilahan Awal",
    },
    {
      title: "2. Pengeringan Awal",
      short: "Pengeringan",
      desc: "Sampah dengan kadar air tinggi dijemur atau dikeringkan secara alami untuk mengurangi kadar air hingga di bawah 25% agar mudah dicacah.",
      icon: "☀️",
      highlight: "Kadar Air < 25%",
    },
    {
      title: "3. Pencacahan Mekanis",
      short: "Pencacahan",
      desc: "Material sampah dimasukkan ke dalam mesin pencacah berkecepatan tinggi hingga menjadi serpihan halus ukuran 2-5 mm.",
      icon: "✂️",
      highlight: "Ukuran Seragam",
    },
    {
      title: "4. Pengadukan & Formulasi",
      short: "Pengadukan",
      desc: "Serbuk cacahan diaduk rata bersama bubuk arang (katalis kalori) dan larutan perekat tepung tapioka alami (3% dari total berat).",
      icon: "🌀",
      highlight: "Campuran Homogen",
    },
    {
      title: "5. Pencetakan Pellet",
      short: "Pencetakan",
      desc: "Adonan basah ditekan dengan roller bertekanan tinggi (12.5 MPa) melewati die/cetakan besi untuk menghasilkan silinder pelet padat.",
      icon: "⚙️",
      highlight: "Tekanan Tinggi",
    },
    {
      title: "6. Pengeringan Akhir Pellet",
      short: "Pengeringan Pellet",
      desc: "Butiran pellet basah dijemur di rak pengering atau ditiup udara hangat hingga kering total dengan tingkat kelembapan akhir < 10%.",
      icon: "💨",
      highlight: "Kering Sempurna",
    },
    {
      title: "7. Pengemasan (Packaging)",
      short: "Pengemasan",
      desc: "Pellet yang telah dingin dikemas ke dalam karung anyam plastik tebal (biasanya ukuran 25kg atau 50kg) agar terhindar dari lembap.",
      icon: "📦",
      highlight: "Karung Kedap Air",
    },
    {
      title: "8. Distribusi & Penjualan",
      short: "Penjualan",
      desc: "Pellet siap dikirim ke gudang RR Pro untuk dicairkan berdasarkan kontrak buyback, atau dipasok langsung ke KUKM & PLTU.",
      icon: "💰",
      highlight: "Kontrak Buyback",
    },
  ];

  return (
    <section id="proses" className="py-20 bg-neutral-50 border-b border-neutral-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-mono">
            Rantai Produksi
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mt-3">
            8 Tahap Alur Produksi Carbon Pellet
          </h2>
          <p className="text-sm text-neutral-500 mt-2 max-w-xl mx-auto">
            Sistem pengolahan terstandarisasi yang menjamin stabilitas kualitas pelet biomassa dari hulu hingga siap dipasarkan.
          </p>
          <div className="h-1.5 w-16 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Desktop Step Selectors (horizontal row) */}
        <div className="hidden lg:grid grid-cols-8 gap-2 bg-neutral-200/50 p-2 rounded-xl mb-8">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`py-3 px-1 rounded-lg text-xs font-bold font-display transition-all cursor-pointer text-center flex flex-col items-center justify-center gap-1 ${
                activeStep === idx
                  ? "bg-amber-500 text-white shadow-md scale-[1.03]"
                  : "text-neutral-600 hover:bg-white hover:text-neutral-900"
              }`}
            >
              <span className="text-base">{step.icon}</span>
              <span className="truncate max-w-full">{step.short}</span>
            </button>
          ))}
        </div>

        {/* Selected Step Detail Panel (with gorgeous animation style) */}
        <div className="bg-white rounded-2xl border border-neutral-200/80 p-6 md:p-8 shadow-sm mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Visual focus of step */}
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-amber-50 rounded-xl border border-amber-100 h-64">
              <span className="text-6xl mb-4 animate-bounce">{steps[activeStep].icon}</span>
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-amber-700 bg-amber-200/55 px-3 py-1 rounded-full">
                {steps[activeStep].highlight}
              </span>
              <span className="text-xs text-neutral-400 mt-3 font-semibold">LANGKAH {activeStep + 1} DARI 8</span>
            </div>

            {/* Explanation */}
            <div className="md:col-span-8 space-y-4">
              <h3 className="text-2xl font-extrabold text-neutral-900 font-display">
                {steps[activeStep].title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div className="flex gap-4 pt-4 border-t border-neutral-100">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <span className="text-xs text-neutral-500 font-bold">Kualitas Output Terjaga</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                  <span className="text-xs text-neutral-500 font-bold">Prosedur Standard Operasional (SOP)</span>
                </div>
              </div>

              {/* Navigation button inside detail box */}
              <div className="pt-2 flex justify-end gap-3">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(activeStep - 1)}
                  className={`text-xs font-bold px-4 py-2 rounded-lg cursor-pointer ${
                    activeStep === 0 ? "text-neutral-300 cursor-not-allowed" : "text-neutral-700 bg-neutral-100 hover:bg-neutral-200"
                  }`}
                >
                  Sebelumnya
                </button>
                <button
                  onClick={() => setActiveStep((activeStep + 1) % steps.length)}
                  className="text-xs font-bold bg-neutral-900 hover:bg-neutral-800 text-white px-5 py-2.5 rounded-lg flex items-center gap-1.5 cursor-pointer"
                >
                  {activeStep === steps.length - 1 ? "Ulangi Dari Awal ↺" : "Langkah Berikutnya ➔"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Roadmap Grid for Mobile/Print */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`bg-white p-5 rounded-xl border transition-all cursor-pointer text-left relative flex flex-col justify-between ${
                activeStep === idx
                  ? "border-amber-500 shadow-md ring-1 ring-amber-500/30"
                  : "border-neutral-200 hover:border-neutral-300"
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-2xl">{step.icon}</span>
                  <span className="text-xs font-mono font-bold text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded">
                    STAGE {idx + 1}
                  </span>
                </div>
                <h4 className="font-bold text-sm text-neutral-900 mb-1">{step.title}</h4>
                <p className="text-[11px] text-neutral-500 line-clamp-2 leading-relaxed">{step.desc}</p>
              </div>
              <div className="mt-3 text-[10px] font-bold text-amber-600 uppercase tracking-widest font-mono flex items-center gap-1">
                Selengkapnya
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
