import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertTriangle } from "lucide-react";

export default function LeadsForm() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [instansi, setInstansi] = useState("");
  const [volume, setVolume] = useState("");
  const [pesan, setPesan] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const primaryWhatsapp = "081324421411"; // Requested CTA WA
  const waPrefilledText = encodeURIComponent(
    "Halo RR Pro, saya tertarik dengan Program Pengolahan Sampah Zero Waste. Bisa tolong kirimkan rincian presentasi dan jadwal konsultasi?"
  );
  const waLink = `https://wa.me/62${primaryWhatsapp.substring(1)}?text=${waPrefilledText}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !whatsapp) {
      setStatus("error");
      setErrorMessage("Nama dan nomor WhatsApp wajib diisi.");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          whatsapp,
          instansi,
          volume,
          pesan,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setName("");
        setWhatsapp("");
        setInstansi("");
        setVolume("");
        setPesan("");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Gagal mengirimkan data.");
      }
    } catch (err) {
      console.error("Leads post error:", err);
      setStatus("error");
      setErrorMessage("Terjadi kesalahan jaringan. Silakan coba kembali.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-mono">
            Formulir Konsultasi
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mt-3">
            Ajukan Pertemuan & Konsultasi Gratis
          </h2>
          <p className="text-sm text-neutral-500 mt-2 max-w-xl mx-auto">
            Isi formulir di bawah untuk mendaftarkan ketertarikan Anda. Tim RR Pro akan menghubungi dalam waktu maksimal 1x24 jam kerja.
          </p>
          <div className="h-1.5 w-16 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-neutral-950 font-display">
              Informasi Kontak Kantor Pusat
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Anda juga bisa langsung datang ke kantor kami atau menghubungi perwakilan administrasi untuk menjadwalkan survei kecocokan lokasi penempatan mesin.
            </p>

            {/* Quick Contact Details */}
            <div className="space-y-4 pt-2">
              <div className="flex gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-150">
                <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-neutral-400 font-mono block uppercase">ALAMAT</span>
                  <span className="text-xs font-semibold text-neutral-800 leading-normal block">
                    Komplek Graha Margaasih, Bandung, Jawa Barat
                  </span>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-150">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-neutral-400 font-mono block uppercase">WHATSAPP ADMIN</span>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-neutral-900 hover:text-amber-600 transition-colors block"
                  >
                    0813-2442-1411 (Hotline Utama)
                  </a>
                  <span className="text-[10px] text-neutral-500 block mt-0.5">
                    Hubungi Dini: 0821-2934-4775 (Perwakilan Kantor)
                  </span>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-150">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-neutral-400 font-mono block uppercase">EMAIL</span>
                  <a
                    href="mailto:admin@rrpro.my.id"
                    className="text-xs font-bold text-neutral-900 hover:text-amber-600 transition-colors block"
                  >
                    admin@rrpro.my.id
                  </a>
                </div>
              </div>
            </div>

            {/* Embed Google Maps */}
            <div className="h-52 w-full rounded-xl overflow-hidden border border-neutral-200 shadow-sm relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5695779147514!2d107.5255474!3d-6.9419163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ee2e89694e9f%3A0xe5a3c2007802b115!2sGraha%20Margaasih!5e0!3m2!1sen!2sid!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right: Submission Form */}
          <div className="lg:col-span-7 bg-neutral-50 rounded-2xl border border-neutral-200 p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-neutral-950 font-display mb-2">
              Kirim Formulir Pemesanan & Kemitraan
            </h3>
            <p className="text-xs text-neutral-500 mb-6">
              Lengkapi data secara akurat agar proposal pendampingan finansial RR Pro dapat dikirimkan langsung ke instansi Anda.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nama */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider font-mono">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 font-semibold"
                  />
                </div>

                {/* WhatsApp */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider font-mono">
                    Nomor WhatsApp aktif *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 081234567890"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 font-semibold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Instansi/Lokasi */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider font-mono">
                    Nama Instansi / Perusahaan
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: RT 03 RW 05 Margaasih / PT Maju"
                    value={instansi}
                    onChange={(e) => setInstansi(e.target.value)}
                    className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 font-semibold"
                  />
                </div>

                {/* Volume Sampah */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider font-mono">
                    Est. Volume Sampah Harian (Kg)
                  </label>
                  <input
                    type="number"
                    placeholder="Contoh: 500"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 font-semibold"
                  />
                </div>
              </div>

              {/* Pesan */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider font-mono">
                  Pesan Tambahan / Rencana Penempatan
                </label>
                <textarea
                  rows={3}
                  placeholder="Ceritakan singkat kendala pengelolaan sampah yang Anda hadapi..."
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  className="w-full bg-white border border-neutral-200 rounded-lg px-3 py-2.5 text-xs text-neutral-800 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 font-semibold"
                ></textarea>
              </div>

              {/* Status messages */}
              {status === "success" && (
                <div className="flex gap-2.5 items-center p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-600" />
                  <span>Lead Anda berhasil dikirim! Tim RR Pro akan segera menghubungi Anda.</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex gap-2.5 items-center p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-xs">
                  <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-extrabold py-3.5 rounded-xl transition-all shadow hover:shadow-md flex items-center justify-center gap-2 cursor-pointer text-xs uppercase tracking-wider"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Mengirim Data...
                  </>
                ) : (
                  <>
                    <Send className="h-4.5 w-4.5" />
                    Kirim Formulir & Mulai Konsultasi
                  </>
                )}
              </button>
            </form>

            {/* Quick direct WA float equivalent button */}
            <div className="mt-4 text-center">
              <span className="text-[10px] text-neutral-400 font-bold block mb-2">ATAU HUBUNGI LANGSUNG VIA CHAT FAST RESPONSE</span>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-extrabold text-amber-600 hover:text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-5 py-2.5 rounded-xl transition-colors shadow-sm"
              >
                💬 Chat WhatsApp Sekarang (Fast Response)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
