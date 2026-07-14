import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pendahuluan from "./components/Pendahuluan";
import DataSampah from "./components/DataSampah";
import AlurMasalahSolusi from "./components/AlurMasalahSolusi";
import DeskripsiProgram from "./components/DeskripsiProgram";
import ProsesProduksi from "./components/ProsesProduksi";
import SpesifikasiMesin from "./components/SpesifikasiMesin";
import DeskripsiProduk from "./components/DeskripsiProduk";
import KonsepBisnis from "./components/KonsepBisnis";
import Kesimpulan from "./components/Kesimpulan";
import LeadsForm from "./components/LeadsForm";
import AdminPanel from "./components/AdminPanel";
import RRProLogo from "./components/RRProLogo";
import { MessageSquare } from "lucide-react";

export default function App() {
  const primaryWhatsapp = "081324421411"; // Requested CTA WA
  const waPrefilledText = encodeURIComponent(
    "Halo RR Pro, saya tertarik dengan Program Pengolahan Sampah Zero Waste. Bisa tolong hubungi saya untuk menjadwalkan konsultasi?"
  );
  const waLink = `https://wa.me/62${primaryWhatsapp.substring(1)}?text=${waPrefilledText}`;

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans antialiased selection:bg-amber-500 selection:text-neutral-950">
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* Main page content sections */}
      <main>
        {/* 2. Hero banner */}
        <Hero />

        {/* 3. Latar belakang / Isu Sampah */}
        <Pendahuluan />

        {/* 4. SIPSN KLHK Charts */}
        <DataSampah />

        {/* 5. Alur Masalah vs Solusi */}
        <AlurMasalahSolusi />

        {/* 6. Deskripsi Program & Pillars */}
        <DeskripsiProgram />

        {/* 7. Proses Produksi 8-Tahap */}
        <ProsesProduksi />

        {/* 8. Spesifikasi Mesin ZW-1500 */}
        <SpesifikasiMesin />

        {/* 9. Deskripsi Carbon Pellet Output */}
        <DeskripsiProduk />

        {/* 10. Konsep & Simulasi Kalkulator Bisnis */}
        <KonsepBisnis />

        {/* 11. Kesimpulan & Ringkasan */}
        <Kesimpulan />

        {/* 12. Leads Contact Form & Map */}
        <LeadsForm />
      </main>

      {/* 13. Admin leads viewer / Synchronizer Panel (F9) */}
      <AdminPanel />

      {/* 14. Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-12 text-center text-neutral-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex justify-center">
            <RRProLogo className="h-9 w-9" showText={true} />
          </div>
          <p className="max-w-md mx-auto leading-relaxed">
            Penyedia Solusi Waste-To-Energy & Pengolahan Sampah Berkelanjutan Terintegrasi di Indonesia.
          </p>
          <div className="flex justify-center gap-6 text-[11px] font-semibold text-neutral-500">
            <a href="#hero" className="hover:text-amber-500 transition-colors">Beranda</a>
            <a href="#isu" className="hover:text-amber-500 transition-colors">Urgensi</a>
            <a href="#program" className="hover:text-amber-500 transition-colors">Program</a>
            <a href="#bisnis" className="hover:text-amber-500 transition-colors">Finansial</a>
            <a href="#kontak" className="hover:text-amber-500 transition-colors">Hubungi Kami</a>
          </div>
          <div className="pt-6 border-t border-neutral-900 text-neutral-600 text-[10px]">
            &copy; {new Date().getFullYear()} RR Pro Zero Waste. All rights reserved. Designed & built with high-contrast precision.
          </div>
        </div>
      </footer>

      {/* 15. FLOATING WHATSAPP CTA BUTTON */}
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 group border border-emerald-400 cursor-pointer"
        title="Hubungi Admin WA (Fast Response)"
      >
        <MessageSquare className="h-6 w-6 animate-pulse" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap text-xs font-bold font-display pl-0 group-hover:pl-2">
          Chat WA (Fast Response)
        </span>
      </a>
    </div>
  );
}
