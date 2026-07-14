import React from "react";
import { ArrowRight, Leaf, Shield, Flame, Activity } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      {/* Background visual grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 w-fit mb-6">
              <Leaf className="h-4 w-4 text-amber-600 animate-pulse" />
              <span className="text-xs font-bold text-amber-700 tracking-wide uppercase">
                Program Waste-To-Energy Resmi RR Pro
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-6">
              Program Pengolahan Sampah{" "}
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
                Zero Waste
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl leading-relaxed">
              Ubah sampah organik & anorganik menjadi <strong className="text-neutral-950 font-bold">Carbon Pellet</strong> bernilai kalori tinggi menggunakan mesin canggih berkapasitas <strong className="text-neutral-950 font-bold">1,5 Ton/Hari</strong>. Solusi tuntas, ramah lingkungan, dan menghasilkan cuan melimpah.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => scrollToSection("kontak")}
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-base px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3 group cursor-pointer"
              >
                Konsultasi Gratis
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection("bisnis")}
                className="bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold text-base px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer border border-neutral-200"
              >
                Kalkulasi Potensi Bisnis
              </button>
            </div>

            {/* Core Badges */}
            <div className="grid grid-cols-3 gap-4 border-t border-neutral-100 pt-8">
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-neutral-900 tracking-tight font-display">
                  1,5 Ton
                </span>
                <span className="text-xs text-neutral-500 mt-1 font-medium">
                  Kapasitas Mesin/Hari
                </span>
              </div>
              <div className="flex flex-col border-x border-neutral-100 px-4">
                <span className="text-3xl font-extrabold text-amber-500 tracking-tight font-display">
                  9 Bulan
                </span>
                <span className="text-xs text-neutral-500 mt-1 font-medium">
                  Estimasi Balik Modal
                </span>
              </div>
              <div className="flex flex-col pl-4">
                <span className="text-3xl font-extrabold text-neutral-900 tracking-tight font-display">
                  Contract
                </span>
                <span className="text-xs text-neutral-500 mt-1 font-medium">
                  Garansi Kontrak Buyback
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Blueprint Schematic Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative radial glows */}
              <div className="absolute -inset-10 bg-amber-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

              {/* Technical Schematic Card Container */}
              <div className="relative bg-neutral-950 border border-neutral-800 rounded-2xl p-6 shadow-2xl overflow-hidden font-mono text-[10px] text-amber-500">
                {/* Blueprint grid effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.02)_1px,transparent_1px)] bg-[size:15px_15px]"></div>

                {/* Header status */}
                <div className="flex justify-between items-center border-b border-neutral-800 pb-3 mb-4 relative z-10">
                  <div className="flex items-center gap-1.5">
                    <Activity className="h-4 w-4 text-amber-400 animate-pulse" />
                    <span className="text-white font-bold tracking-wider uppercase">
                      SYSTEM_SCHEMATIC: ZW-1500
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="text-[9px] text-neutral-400 font-semibold tracking-widest">
                      ONLINE
                    </span>
                  </div>
                </div>

                {/* Schematic Draw */}
                <div className="relative h-64 border border-neutral-800 rounded-lg bg-neutral-900/50 flex items-center justify-center p-4">
                  <svg className="w-full h-full max-h-56" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Hopper / Input block */}
                    <path d="M40 40 L100 40 L90 80 L50 80 Z" stroke="#D97706" strokeWidth="2" fill="rgba(217,119,6,0.1)" />
                    <text x="45" y="60" fill="#F59E0B" className="text-[10px] font-bold">HOPPER IN</text>

                    {/* Conveyor to Shredder */}
                    <line x1="90" y1="80" x2="160" y2="80" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4,4" />
                    <polygon points="155,77 165,80 155,83" fill="#E5E7EB" />

                    {/* Shredder/Pencacah Cylinder */}
                    <rect x="160" y="55" width="60" height="50" rx="4" stroke="#D97706" strokeWidth="2" fill="rgba(217,119,6,0.15)" />
                    <circle cx="190" cy="80" r="15" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3,2" className="animate-spin" style={{ transformOrigin: "190px 80px", animationDuration: "10s" }} />
                    <text x="165" y="118" fill="#F59E0B" className="text-[8px]">SHREDDER</text>

                    {/* Pellet molding chamber */}
                    <rect x="270" y="55" width="70" height="90" rx="4" stroke="#D97706" strokeWidth="2" fill="rgba(217,119,6,0.2)" />
                    <path d="M280 80 L330 80 M280 100 L330 100 M280 120 L330 120" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="280" y="45" fill="#E5A93B" className="text-[8px] font-bold">MOLDING PRESS</text>

                    {/* Connection Shredder to Mold */}
                    <line x1="220" y1="80" x2="270" y2="80" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4,4" />

                    {/* Outputs Pellet cylinder icons */}
                    <rect x="300" y="170" width="10" height="25" rx="2" transform="rotate(45 300 170)" stroke="#F59E0B" strokeWidth="2" fill="rgba(217,119,6,0.3)" />
                    <rect x="330" y="165" width="10" height="25" rx="2" transform="rotate(30 330 165)" stroke="#F59E0B" strokeWidth="2" fill="rgba(217,119,6,0.3)" />
                    <text x="270" y="215" fill="#10B981" className="text-[9px] font-bold">CARBON PELLET OUT</text>
                  </svg>

                  {/* Flow label */}
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-amber-500/20 text-[8px] font-semibold text-amber-300">
                    FLOW CAPACITY: 1,500 KG/DAY
                  </div>
                </div>

                {/* Telemetry data list */}
                <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-neutral-800 pt-4 text-[9px] text-neutral-400">
                  <div className="flex justify-between">
                    <span>CAPACITY:</span>
                    <span className="text-white font-semibold">1,500 KG/24H</span>
                  </div>
                  <div className="flex justify-between">
                    <span>MOTOR POWER:</span>
                    <span className="text-white font-semibold">2,200 W (3-PHASE)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PRESSURE RANGE:</span>
                    <span className="text-white font-semibold">12.5 MPA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>OUTPUT CALORIE:</span>
                    <span className="text-amber-400 font-bold">4.200 - 4.800 KCAL</span>
                  </div>
                </div>
              </div>

              {/* Little info tag floating below */}
              <div className="mt-4 flex items-center gap-2 px-4 py-3 rounded-lg bg-amber-50 border border-amber-200">
                <Shield className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <p className="text-xs text-neutral-700 leading-normal">
                  <strong className="font-semibold text-neutral-900">Garansi Pabrik & Pendampingan:</strong> Instalasi, pelatihan teknis operator, dan optimalisasi mesin dijamin oleh tim ahli RR Pro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
