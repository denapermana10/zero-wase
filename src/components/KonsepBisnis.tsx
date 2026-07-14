import React, { useState, useEffect } from "react";
import { Calculator, TrendingUp, ShieldCheck, HelpCircle, DollarSign, RefreshCw, FileText } from "lucide-react";
import { SimulationResult } from "../types";

export default function KonsepBisnis() {
  // Slider states
  const [volumeSampah, setVolumeSampah] = useState<number>(1500); // Default max capacity of the machine (1500 kg)
  const [hargaJualPellet, setHargaJualPellet] = useState<number>(2000); // Default buyback price Rp 2,000 / kg
  const [tippingFeeRate, setTippingFeeRate] = useState<number>(300); // Default tipping fee charge Rp 300 / kg

  const [results, setResults] = useState<SimulationResult>({
    volumeSampah: 1500,
    rendemenPellet: 35,
    produksiPelletHarian: 525,
    hargaJualPellet: 2000,
    tippingFeeRate: 300,
    pendapatanPelletHarian: 1050000,
    pendapatanTippingHarian: 450000,
    pendapatanTotalHarian: 1500000,
    pendapatanTotalBulanan: 39000000,
    biayaTapiokaHarian: 141750,
    biayaListrikHarian: 55000,
    biayaTenagaKerjaHarian: 250000,
    biayaPerawatanHarian: 50000,
    biayaTotalHarian: 496750,
    biayaTotalBulanan: 12915500,
    profitHarian: 1003250,
    profitBulanan: 26084500,
    investasiAwal: 182000000,
    bepBulan: 6.98,
  });

  const modelPillars = [
    {
      title: "Skema Retribusi Masuk (Tipping Fee)",
      desc: "Sebagai pengelola sampah kawasan, Anda berhak memungut jasa pengolahan sampah dari warga/pasar sekitar berkisar Rp 200 - Rp 500 per kg.",
      icon: "📥",
    },
    {
      title: "Pemotongan Biaya Angkut TPA",
      desc: "Kawasan industri/hotel memangkas biaya sewa truk sampah & retribusi TPA swasta yang tadinya menelan puluhan juta per bulan menjadi Rp 0.",
      icon: "🚛",
    },
    {
      title: "Kontrak Jaminan Buyback 2 Tahun",
      desc: "RR Pro memberikan jaminan kontrak tertulis untuk membeli kembali seluruh carbon pellet hasil produksi Anda minimal selama 2 tahun.",
      icon: "✍️",
    },
    {
      title: "Ekosistem Self-Sustainable",
      desc: "Tidak ada ketergantungan dana hibah. Bisnis berjalan mandiri sepenuhnya disokong oleh margin keuntungan harian pellet & tipping fee.",
      icon: "♻️",
    },
  ];

  useEffect(() => {
    // 1. Production output (35% yield conversion rate of waste to dried pellets)
    const rendemen = 35; 
    const produksiPellet = volumeSampah * (rendemen / 100);

    // 2. Revenue calculation
    const pendapatanPellet = produksiPellet * hargaJualPellet;
    const pendapatanTipping = volumeSampah * tippingFeeRate;
    const pendapatanHarian = pendapatanPellet + pendapatanTipping;
    const pendapatanBulanan = pendapatanHarian * 26; // 26 working days/month

    // 3. Operational Expenses (HPP)
    // Tapioka binding: 3% of pellet mass. Price of tapioka: Rp 9.000 / kg
    const tapiokaMass = produksiPellet * 0.03;
    const biayaTapioka = tapiokaMass * 9000;
    
    // Electricity flat rate (2.2kW x 8h x Rp 1.500/kWh + fuel safety overheads) = Rp 55,000 / day
    const biayaListrik = 55000; 

    // Labor: 2 operators @ Rp 125,000 / day = Rp 250,000 / day
    const biayaTenagaKerja = 250000; 

    // Machine maintenance & grease/lubrication = Rp 50,000 / day
    const biayaPerawatan = 50000;

    const biayaHarian = biayaTapioka + biayaListrik + biayaTenagaKerja + biayaPerawatan;
    const biayaBulanan = biayaHarian * 26;

    // 4. Profit & BEP
    const profitHarian = pendapatanHarian - biayaHarian;
    const profitBulanan = profitHarian * 26;
    const investasi = 182000000; // Price of machine ZW-1500

    // Prevent divide-by-zero or negative profit
    const bep = profitBulanan > 0 ? parseFloat((investasi / profitBulanan).toFixed(1)) : 999;

    setResults({
      volumeSampah,
      rendemenPellet: rendemen,
      produksiPelletHarian: parseFloat(produksiPellet.toFixed(1)),
      hargaJualPellet,
      tippingFeeRate,
      pendapatanPelletHarian: Math.round(pendapatanPellet),
      pendapatanTippingHarian: Math.round(pendapatanTipping),
      pendapatanTotalHarian: Math.round(pendapatanHarian),
      pendapatanTotalBulanan: Math.round(pendapatanBulanan),
      biayaTapiokaHarian: Math.round(biayaTapioka),
      biayaListrikHarian: biayaListrik,
      biayaTenagaKerjaHarian: biayaTenagaKerja,
      biayaPerawatanHarian: biayaPerawatan,
      biayaTotalHarian: Math.round(biayaHarian),
      biayaTotalBulanan: Math.round(biayaBulanan),
      profitHarian: Math.round(profitHarian),
      profitBulanan: Math.round(profitBulanan),
      investasiAwal: investasi,
      bepBulan: bep,
    });
  }, [volumeSampah, hargaJualPellet, tippingFeeRate]);

  // Currency helper formatting IDR
  const formatIDR = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section id="bisnis" className="py-20 bg-neutral-50 border-b border-neutral-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-mono">
            Model Kemitraan & Finansial
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mt-3">
            Simulasi Investasi & Konsep Bisnis
          </h2>
          <p className="text-sm text-neutral-500 mt-2 max-w-xl mx-auto">
            Pelajari rincian skema monetisasi pengolahan sampah dan gunakan kalkulator interaktif untuk mengestimasi pengembalian modal (BEP).
          </p>
          <div className="h-1.5 w-16 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 4 Model Business Pillars (deck h. 9) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {modelPillars.map((pillar, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
              <div className="text-2xl mb-3">{pillar.icon}</div>
              <h4 className="font-bold text-sm text-neutral-900 mb-1.5">{pillar.title}</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* INTERACTIVE CALCULATOR BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          {/* Inputs Section (sliders) */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl border border-neutral-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Calculator className="h-5 w-5 text-amber-500" />
                <h3 className="font-display font-extrabold text-lg text-neutral-900">
                  Kalkulator Simulasi Bisnis
                </h3>
              </div>

              {/* Slider 1: Volume Sampah */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-neutral-700">Volume Sampah Masuk (Harian)</span>
                  <span className="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded font-mono">
                    {volumeSampah} Kg / hari
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1500"
                  step="50"
                  value={volumeSampah}
                  onChange={(e) => setVolumeSampah(parseInt(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 font-semibold font-mono">
                  <span>100 Kg (MIN)</span>
                  <span>1.500 Kg (MAX CAP)</span>
                </div>
              </div>

              {/* Slider 2: Harga Jual Pellet */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-neutral-700">Harga Jual Pellet (Buyback)</span>
                  <span className="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded font-mono">
                    {formatIDR(hargaJualPellet)} / Kg
                  </span>
                </div>
                <input
                  type="range"
                  min="1500"
                  max="3000"
                  step="100"
                  value={hargaJualPellet}
                  onChange={(e) => setHargaJualPellet(parseInt(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 font-semibold font-mono">
                  <span>Rp 1.500</span>
                  <span>Rp 3.000</span>
                </div>
              </div>

              {/* Slider 3: Tipping Fee Rate */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-neutral-700">Tarif Tipping Fee (Sampah Masuk)</span>
                  <span className="font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded font-mono">
                    {formatIDR(tippingFeeRate)} / Kg
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="50"
                  value={tippingFeeRate}
                  onChange={(e) => setTippingFeeRate(parseInt(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 font-semibold font-mono">
                  <span>Rp 0 (Tanpa Tarif)</span>
                  <span>Rp 1.000 (Maks)</span>
                </div>
              </div>
            </div>

            {/* Live Estimations indicators */}
            <div className="bg-amber-50 p-4 border border-amber-200 rounded-xl">
              <span className="text-[10px] font-mono font-bold text-amber-800 tracking-wider uppercase block mb-1">
                Keluaran Produksi Otomatis:
              </span>
              <div className="flex justify-between items-center text-xs text-neutral-700">
                <span>Rendemen Konversi (35%):</span>
                <span className="font-bold text-neutral-900 font-mono">
                  {results.produksiPelletHarian} Kg pelet/hari
                </span>
              </div>
            </div>
          </div>

          {/* Outputs Summary Section (results) */}
          <div className="lg:col-span-7 bg-neutral-950 text-white p-6 md:p-8 rounded-2xl border border-neutral-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-neutral-800 pb-4 mb-6">
                <h3 className="font-display font-extrabold text-lg text-white">
                  Rincian Profitabilitas Bulanan
                </h3>
                <span className="text-[9px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-900/60 px-2 py-0.5 rounded font-bold">
                  PROYEKSI 26 HARI KERJA
                </span>
              </div>

              {/* Profit breakdown */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
                  <span className="text-[9px] text-neutral-400 uppercase font-bold tracking-widest block mb-1">
                    Pendapatan Bulanan
                  </span>
                  <span className="text-xl font-extrabold text-emerald-400 font-mono">
                    {formatIDR(results.pendapatanTotalBulanan)}
                  </span>
                  <span className="text-[8px] text-neutral-500 block mt-1">
                    Pellet: {formatIDR(results.pendapatanPelletHarian * 26)} | Tipping: {formatIDR(results.pendapatanTippingHarian * 26)}
                  </span>
                </div>

                <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl">
                  <span className="text-[9px] text-neutral-400 uppercase font-bold tracking-widest block mb-1">
                    Operasional HPP Bulanan
                  </span>
                  <span className="text-xl font-extrabold text-red-400 font-mono">
                    {formatIDR(results.biayaTotalBulanan)}
                  </span>
                  <span className="text-[8px] text-neutral-500 block mt-1">
                    Tapioka, Listrik, 2 Tenaga Kerja & Maintenance
                  </span>
                </div>
              </div>

              {/* Final net profit display */}
              <div className="border-t border-b border-neutral-800 py-4 mb-6 flex justify-between items-center">
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-widest block">
                    PROFIT BERSIH BULANAN
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                    {results.profitBulanan > 0 ? formatIDR(results.profitBulanan) : "Rp 0 (Kerugian)"}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-widest block">
                    PROFIT HARIAN
                  </span>
                  <span className="text-sm font-bold text-neutral-300 font-mono">
                    {results.profitHarian > 0 ? formatIDR(results.profitHarian) : "Rp 0"} / hari
                  </span>
                </div>
              </div>
            </div>

            {/* BEP indicator large highlight */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-neutral-900 p-5 border border-neutral-800 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-amber-500 text-neutral-950 rounded-lg">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 font-bold block uppercase leading-none">ESTIMASI BALIK MODAL (BEP)</span>
                  <span className="text-xs text-neutral-300 mt-1 block">Rasio terhadap investasi mesin Rp 182M</span>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <span className="text-3xl font-black text-white font-mono">
                  {results.profitBulanan > 0 ? `${results.bepBulan} Bulan` : "N/A"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* TABLE BREAKDOWN BENTO BLOCK */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="h-5 w-5 text-amber-500" />
            <h3 className="font-display font-extrabold text-base text-neutral-900">
              Rincian Biaya Operasional Harian (HPP)
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="bg-neutral-100 text-neutral-500 font-bold uppercase tracking-wider font-mono border-b border-neutral-200">
                  <th className="p-3">Kategori Biaya</th>
                  <th className="p-3">Deskripsi / Dasar Rumus</th>
                  <th className="p-3 text-right">Biaya Harian</th>
                  <th className="p-3 text-right">Biaya Bulanan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-150 text-neutral-700 font-semibold">
                <tr>
                  <td className="p-3 font-bold text-neutral-950">Tepung Tapioka (Perekat)</td>
                  <td className="p-3 font-medium text-neutral-500">3% dari berat pellet dihasilkan ({Math.round(results.produksiPelletHarian * 0.03)} kg) @ Rp 9.000 / kg</td>
                  <td className="p-3 text-right font-mono">{formatIDR(results.biayaTapiokaHarian)}</td>
                  <td className="p-3 text-right font-mono">{formatIDR(results.biayaTapiokaHarian * 26)}</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-950">Listrik & Energi Utama</td>
                  <td className="p-3 font-medium text-neutral-500">Motor penggerak 2.2 kW flat operating 8-10 jam operasional</td>
                  <td className="p-3 text-right font-mono">{formatIDR(results.biayaListrikHarian)}</td>
                  <td className="p-3 text-right font-mono">{formatIDR(results.biayaListrikHarian * 26)}</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-950">Upah Tenaga Kerja</td>
                  <td className="p-3 font-medium text-neutral-500">2 Operator lokal terlatih @ Rp 125.000 / hari</td>
                  <td className="p-3 text-right font-mono">{formatIDR(results.biayaTenagaKerjaHarian)}</td>
                  <td className="p-3 text-right font-mono">{formatIDR(results.biayaTenagaKerjaHarian * 26)}</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-950">Maintenance & Pelumas</td>
                  <td className="p-3 font-medium text-neutral-500">Perawatan berkala, minyak grease bearing & keausan spareparts</td>
                  <td className="p-3 text-right font-mono">{formatIDR(results.biayaPerawatanHarian)}</td>
                  <td className="p-3 text-right font-mono">{formatIDR(results.biayaPerawatanHarian * 26)}</td>
                </tr>
                <tr className="bg-neutral-50 font-extrabold text-neutral-950 border-t border-neutral-300">
                  <td className="p-3">TOTAL OPERASIONAL HPP</td>
                  <td className="p-3 text-neutral-500 font-medium">Beban pengeluaran operasional terstandarisasi</td>
                  <td className="p-3 text-right font-mono text-red-600">{formatIDR(results.biayaTotalHarian)}</td>
                  <td className="p-3 text-right font-mono text-red-600">{formatIDR(results.biayaTotalBulanan)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Financial Disclaimer */}
          <div className="mt-6 text-[10px] text-neutral-400 leading-normal bg-neutral-100 p-3 rounded-xl border border-neutral-200">
            <strong>*Disclaimer & Penyangkalan:</strong> Angka simulasi bisnis di atas bersifat estimasi atau proyeksi teoritis berdasarkan spesifikasi rancangan mesin ZW-1500. Angka riil di lapangan dapat bervariasi bergantung pada ketersediaan bahan baku sampah lokal, harga pasar perekat tapioka, tarif listrik daerah, kesepakatan tipping fee warga setempat, serta kualitas pemilahan sampah organik basah.
          </div>
        </div>
      </div>
    </section>
  );
}
