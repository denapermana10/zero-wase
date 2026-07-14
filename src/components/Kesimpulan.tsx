import React from "react";
import { Sparkles, Presentation, FileText, ArrowRight } from "lucide-react";

export default function Kesimpulan() {
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
    <section className="py-20 bg-neutral-950 text-white relative overflow-hidden">
      {/* Decorative vector overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.1),transparent_50%)]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Little Icon */}
        <div className="inline-flex p-3 bg-amber-500/10 border border-amber-500/25 rounded-full text-amber-500 mb-6 animate-pulse">
          <Sparkles className="h-6 w-6" />
        </div>

        <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6">
          Wujudkan Kawasan Mandiri Sampah & Berkelanjutan Sekarang Juga
        </h2>

        {/* Narrative from page 12 */}
        <p className="text-sm md:text-base text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-10">
          Program Pengolahan Sampah Zero Waste dari RR Pro bukan sekadar inovasi teknologi ramah lingkungan, melainkan sebuah lompatan investasi sosial-ekonomi yang konkret. Dengan mendesentralisasi penanganan sampah mandiri tepat di sumbernya, kita melahirkan kemandirian energi biomassa baru, memutus ketergantungan retribusi TPA yang menguras anggaran, serta mendatangkan profit stabil yang dijamin oleh kontrak buyback tepercaya.
        </p>

        {/* CTA Actions Button Group */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("kontak")}
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-neutral-950 font-extrabold px-8 py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group"
          >
            Hubungi Tim Penjualan
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollToSection("kontak")}
            className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-neutral-100 font-semibold border border-neutral-800 px-8 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Presentation className="h-4.5 w-4.5 text-amber-500" />
            Jadwalkan Demo & Presentasi
          </button>
        </div>
      </div>
    </section>
  );
}
