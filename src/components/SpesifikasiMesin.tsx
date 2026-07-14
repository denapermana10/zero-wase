import React from "react";
import { Settings, Cpu, HardDrive, DollarSign, PenTool, CheckCircle, HelpCircle } from "lucide-react";

export default function SpesifikasiMesin() {
  const specs = [
    { label: "Nama Unit / Model", value: "Mesin Carbon Pellet RR Pro ZW-1500" },
    { label: "Fungsi Utama", value: "Mengubah residu sampah organik & anorganik menjadi carbon pellet padat" },
    { label: "Kapasitas Pengolahan", value: "1,5 Ton sampah basah / hari (operasional 8-10 jam)" },
    { label: "Kebutuhan Daya / Listrik", value: "2.200 Watt (Koneksi Listrik 3-Phase / Genset Biomassa)" },
    { label: "Tekanan Maksimum Press", value: "12,5 MPa (MegaPascal) - Kepadatan Pelet Tinggi" },
    { label: "Dimensi Unit Utama", value: "240 cm x 110 cm x 165 cm" },
    { label: "Bobot Kosong Mesin", value: "± 680 Kg (Rangka Baja Solid)" },
    { label: "Katalis Perekat Alami", value: "Tepung Tapioka (Rendah Emisi, Aman untuk Tungku)" },
  ];

  const packageIncludes = [
    "1 Set Unit Mesin Pencacah & Pencetak Terintegrasi",
    "Pelatihan Teknis Operator Lokal (2 Hari di Lokasi)",
    "Buku Panduan Standar Operasional & Pemeliharaan (SOP)",
    "Garansi Suku Cadang Pabrik Selama 1 Tahun",
    "Pendampingan Kalibrasi Kelembapan Pellet Batch Pertama",
    "Brosur & Dokumen Pemasaran untuk Sosialisasi RT/RW",
  ];

  return (
    <section id="spesifikasi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-mono">
            Detail Unit & Teknologi
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mt-3">
            Spesifikasi Teknis Mesin ZW-1500
          </h2>
          <p className="text-sm text-neutral-500 mt-2 max-w-xl mx-auto">
            Dirancang dengan struktur baja berspesifikasi industri tinggi, menjamin daya tahan operasional konstan selama 24 jam non-stop.
          </p>
          <div className="h-1.5 w-16 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Technical Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Spec Table */}
          <div className="lg:col-span-7 bg-neutral-50 rounded-2xl border border-neutral-150 p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Settings className="h-5 w-5 text-amber-500" />
                <h3 className="font-display font-bold text-lg text-neutral-900">
                  Tabel Spesifikasi Teknis
                </h3>
              </div>

              {/* Table */}
              <div className="divide-y divide-neutral-200">
                {specs.map((spec, idx) => (
                  <div key={idx} className="py-3.5 flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                    <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider font-mono sm:w-1/3">
                      {spec.label}
                    </span>
                    <span className="text-xs font-semibold text-neutral-800 sm:w-2/3">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price tag block inside table */}
            <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-neutral-400 block uppercase tracking-widest">
                  Harga Investasi Alat (Unit Only)
                </span>
                <span className="text-3xl font-extrabold text-neutral-950 font-display tracking-tight">
                  Rp 182.000.000 <span className="text-xs text-neutral-400 font-normal">/ set</span>
                </span>
              </div>
              <span className="text-[10px] text-neutral-500 bg-neutral-200/60 px-3 py-1.5 rounded font-bold">
                *Belum termasuk instalasi & ongkos kirim
              </span>
            </div>
          </div>

          {/* Right Column: Spec Card Graphic + Package Includes */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Visual Callout Card */}
            <div className="bg-neutral-950 text-white rounded-2xl p-6 border border-neutral-800 shadow-lg relative overflow-hidden flex-1 flex flex-col justify-between">
              {/* Background gradient mask */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-transparent"></div>

              <div>
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-500">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <span className="px-2 py-1 rounded bg-amber-500 text-neutral-950 text-[10px] font-mono font-bold tracking-wider uppercase">
                    PRODUKSI LOKAL
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-xl text-white mb-2 relative z-10">
                  Paket Investasi Siap Operasi
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6 relative z-10">
                  RR Pro tidak hanya menjual mesin. Kami menyediakan solusi menyeluruh dari penyiapan lahan, sertifikasi keamanan alat, hingga kontrak penyerapan hasil produksi pelet.
                </p>
              </div>

              {/* Package Bullets */}
              <div className="space-y-3 relative z-10 border-t border-neutral-800 pt-6">
                <span className="text-[10px] font-mono font-bold text-neutral-500 block uppercase tracking-wider">
                  SUDAH TERMASUK DALAM PEMBELIAN:
                </span>
                <ul className="grid grid-cols-1 gap-2.5">
                  {packageIncludes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle className="h-4.5 w-4.5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
