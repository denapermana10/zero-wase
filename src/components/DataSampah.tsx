import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { BarChart3, Database, Info } from "lucide-react";

// Official SIPSN KLHK Waste Composition Data
const compositionData = [
  { name: "Sisa Makanan (Organik)", value: 40.5, color: "#D97706" }, // Amber 600
  { name: "Plastik", value: 18.2, color: "#EA580C" }, // Orange 600
  { name: "Kertas / Karton", value: 10.9, color: "#F59E0B" }, // Amber 500
  { name: "Kayu / Ranting", value: 12.8, color: "#78350F" }, // Brown 900
  { name: "Lainnya (Logam/Kaca)", value: 17.6, color: "#4B5563" }, // Gray 600
];

// Official SIPSN KLHK Waste Source Data
const sourceData = [
  { name: "Rumah Tangga", value: 37.6, color: "#111111" },
  { name: "Pasar Tradisional", value: 16.4, color: "#D97706" },
  { name: "Pusat Niaga", value: 15.2, color: "#EA580C" },
  { name: "Fasilitas Publik", value: 12.5, color: "#78350F" },
  { name: "Lain-lain", value: 18.3, color: "#6B7280" },
];

export default function DataSampah() {
  return (
    <section id="statistik" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full text-xs font-bold text-neutral-800 uppercase tracking-widest mb-3 font-mono">
            <Database className="h-3 w-3" />
            Statistik Nasional
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Distribusi & Sumber Sampah Nasional
          </h2>
          <p className="text-sm text-neutral-500 mt-2 max-w-xl mx-auto">
            Berdasarkan data Sistem Informasi Pengelolaan Sampah Nasional (SIPSN) KLHK, sampah sisa makanan dan rumah tangga mendominasi rantai pasokan sampah yang melimpah setiap harinya.
          </p>
          <div className="h-1 w-16 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Charts Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Chart 1: Composition (Pie) */}
          <div className="bg-neutral-50 rounded-2xl border border-neutral-150 p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-bold text-lg text-neutral-900 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-amber-500" />
                  Jenis & Komposisi Sampah Indonesia
                </h3>
                <span className="text-[10px] font-mono bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">
                  SIPSN KLHK
                </span>
              </div>
              <p className="text-xs text-neutral-500 mb-6">
                Mayoritas sampah nasional merupakan material organik basah (sisa makanan & kayu) serta plastik. Keduanya adalah bahan baku sempurna untuk diolah menjadi Carbon Pellet berkualitas tinggi.
              </p>
            </div>

            {/* Recharts Pie */}
            <div className="h-64 relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={compositionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={85}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {compositionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: any) => [`${value}%`, "Persentase"]}
                    contentStyle={{
                      backgroundColor: "#111",
                      borderRadius: "8px",
                      color: "#fff",
                      border: "none",
                      fontSize: "12px",
                      fontFamily: "monospace",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute flex flex-col justify-center items-center pointer-events-none">
                <span className="text-3xl font-extrabold text-neutral-900">40.5%</span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                  Organik
                </span>
              </div>
            </div>

            {/* Custom Legend */}
            <div className="grid grid-cols-2 gap-2.5 mt-6 border-t border-neutral-100 pt-6">
              {compositionData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span
                    className="h-3 w-3 rounded-sm flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  <span className="text-xs text-neutral-600 font-medium truncate">
                    {item.name}: <strong className="text-neutral-900">{item.value}%</strong>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Chart 2: Source (Bar) */}
          <div className="bg-neutral-50 rounded-2xl border border-neutral-150 p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-bold text-lg text-neutral-900 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-amber-500" />
                  Sumber Asal Sampah Nasional
                </h3>
                <span className="text-[10px] font-mono bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">
                  SIPSN KLHK
                </span>
              </div>
              <p className="text-xs text-neutral-500 mb-6">
                Rumah tangga dan pasar menyuplai lebih dari setengah total timbulan sampah. Ini membuka peluang kerja sama yang besar bagi pengelola kawasan pemukiman, RT/RW, dan pasar daerah.
              </p>
            </div>

            {/* Recharts Bar */}
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sourceData} layout="vertical" margin={{ left: 10, right: 30, top: 10, bottom: 10 }}>
                  <XAxis type="number" unit="%" stroke="#9CA3AF" fontSize={11} />
                  <YAxis dataKey="name" type="category" stroke="#9CA3AF" fontSize={11} width={100} />
                  <Tooltip
                    formatter={(value: any) => [`${value}%`, "Kontribusi"]}
                    contentStyle={{
                      backgroundColor: "#111",
                      borderRadius: "8px",
                      color: "#fff",
                      border: "none",
                      fontSize: "12px",
                      fontFamily: "monospace",
                    }}
                  />
                  <Bar dataKey="value" fill="#D97706" radius={[0, 4, 4, 0]}>
                    {sourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Custom Description Label */}
            <div className="mt-6 border-t border-neutral-100 pt-6 flex gap-2.5 items-start p-3 bg-amber-50 rounded-xl border border-amber-200">
              <Info className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-neutral-700 leading-normal">
                <strong className="font-semibold text-neutral-900">Mengapa Ini Penting?</strong> Sampah dari Rumah Tangga (37.6%) dan Pasar (16.4%) bernilai kalori ideal setelah diolah. Memasang mesin RR Pro di lokasi ini akan memotong 100% biaya angkut pembuangan sampah ke TPA!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
