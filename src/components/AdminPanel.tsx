import React, { useState, useEffect } from "react";
import { ShieldAlert, Trash2, Key, Download, RefreshCw, Eye, EyeOff, Search, PhoneCall } from "lucide-react";
import { Lead } from "../types";

export default function AdminPanel() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [pin, setPin] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const correctPin = "1234"; // Default simple pin for testing/admin usage

  const fetchLeads = async () => {
    setLoading(true);
    setErrorMsg("");
    try {
      const response = await fetch("/api/leads");
      const data = await response.json();
      if (data.success) {
        setLeads(data.data);
      } else {
        setErrorMsg("Gagal memuat data leads.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Koneksi jaringan gagal.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      fetchLeads();
    }
  }, [isAuthorized]);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === correctPin || pin === "admin") {
      setIsAuthorized(true);
      setErrorMsg("");
    } else {
      setErrorMsg("PIN salah. Gunakan PIN default '1234'.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Apakah Anda yakin ingin menghapus lead ini?")) return;
    try {
      const response = await fetch(`/api/leads/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) {
        setLeads(leads.filter((l) => l.id !== id));
      } else {
        alert("Gagal menghapus lead.");
      }
    } catch (err) {
      console.error(err);
      alert("Kesalahan koneksi saat menghapus.");
    }
  };

  // Convert leads to CSV download
  const handleDownloadCSV = () => {
    if (leads.length === 0) return;
    const headers = ["ID", "Nama", "WhatsApp", "Instansi", "Volume (Kg)", "Pesan", "Tanggal"];
    const rows = leads.map((l) => [
      l.id,
      l.name,
      l.whatsapp,
      l.instansi || "-",
      l.volume || 0,
      l.pesan?.replace(/\n/g, " ") || "-",
      l.created_at,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((r) => r.map((val) => `"${val}"`).join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `leads_rr_pro_zerowaste_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      (l.instansi || "").toLowerCase().includes(search.toLowerCase()) ||
      l.whatsapp.includes(search)
  );

  return (
    <div className="bg-neutral-950 border-t border-neutral-800 text-white py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-neutral-800 pb-6 mb-8">
          <div>
            <span className="text-[10px] text-amber-500 font-mono font-bold tracking-widest block uppercase">
              PORTAL ADMINISTRATOR (F9 - REQUIREMENT OPTIONAL)
            </span>
            <h3 className="text-lg font-bold font-display text-white mt-1">
              Admin Leads Inspector & Database Synchronization
            </h3>
          </div>
          <button
            onClick={() => {
              setShowAdmin(!showAdmin);
              if (!showAdmin) {
                setIsAuthorized(false);
                setPin("");
              }
            }}
            className="flex items-center gap-2 text-xs font-bold bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-300 px-4 py-2.5 rounded-lg cursor-pointer transition-colors"
          >
            {showAdmin ? (
              <>
                <EyeOff className="h-4 w-4" />
                Tutup Panel Admin
              </>
            ) : (
              <>
                <Eye className="h-4 w-4 text-amber-500" />
                Buka Panel Admin
              </>
            )}
          </button>
        </div>

        {showAdmin && (
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
            {!isAuthorized ? (
              /* PIN Authorization Form */
              <div className="max-w-sm mx-auto text-center py-6">
                <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-full w-fit mx-auto mb-4">
                  <Key className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-sm text-neutral-100 mb-2">Otorisasi Panel Admin</h4>
                <p className="text-xs text-neutral-400 mb-6">
                  Masukkan PIN keamanan untuk melihat database penangkap leads masuk. <strong className="text-amber-500">PIN default: 1234</strong>
                </p>

                <form onSubmit={handleAuth} className="space-y-4">
                  <input
                    type="password"
                    placeholder="Masukkan PIN keamanan..."
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="w-full text-center tracking-widest font-mono text-sm bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-amber-500"
                  />
                  {errorMsg && <p className="text-[11px] text-red-500 font-bold">{errorMsg}</p>}
                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold text-xs uppercase py-2.5 rounded-lg cursor-pointer transition-all"
                  >
                    Masuk Panel Admin
                  </button>
                </form>
              </div>
            ) : (
              /* Authorized Leads List Panel */
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 text-xs font-bold font-mono">
                      {leads.length} Leads Masuk
                    </span>
                    <button
                      onClick={fetchLeads}
                      disabled={loading}
                      className="p-2 hover:bg-neutral-800 rounded-lg text-neutral-400 hover:text-white transition-colors cursor-pointer"
                      title="Refresh"
                    >
                      <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                    </button>
                  </div>

                  {/* Actions buttons */}
                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      onClick={handleDownloadCSV}
                      disabled={leads.length === 0}
                      className="flex items-center gap-2 text-xs font-bold bg-neutral-950 border border-neutral-800 hover:bg-neutral-800 text-neutral-300 px-3.5 py-2 rounded-lg cursor-pointer w-full sm:w-auto justify-center disabled:opacity-40"
                    >
                      <Download className="h-4 w-4" />
                      Ekspor CSV
                    </button>
                  </div>
                </div>

                {/* Filter / Search input */}
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-neutral-500" />
                  <input
                    type="text"
                    placeholder="Cari berdasarkan nama, instansi, atau whatsapp..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-10 pr-4 py-2.5 text-xs text-neutral-200 focus:outline-none focus:border-amber-500 font-mono"
                  />
                </div>

                {/* Leads list database rows */}
                {loading ? (
                  <div className="text-center py-10">
                    <span className="h-6 w-6 border-2 border-amber-500 border-t-transparent rounded-full animate-spin inline-block mb-2"></span>
                    <p className="text-xs text-neutral-400 font-mono">Memuat database leads...</p>
                  </div>
                ) : filteredLeads.length === 0 ? (
                  <div className="text-center py-10 bg-neutral-950/40 border border-neutral-800 rounded-lg">
                    <p className="text-xs text-neutral-500 font-mono">Belum ada leads yang cocok / tersimpan.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left text-neutral-300 font-mono">
                      <thead>
                        <tr className="bg-neutral-950 border-b border-neutral-800 text-neutral-500 font-bold uppercase text-[10px]">
                          <th className="p-3">Nama Pengirim</th>
                          <th className="p-3">WhatsApp</th>
                          <th className="p-3">Instansi / Lokasi</th>
                          <th className="p-3">Volume (Kg)</th>
                          <th className="p-3">Pesan Tambahan</th>
                          <th className="p-3 text-right">Aksi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-800">
                        {filteredLeads.map((lead) => (
                          <tr key={lead.id} className="hover:bg-neutral-900/30">
                            <td className="p-3 font-bold text-white text-xs">{lead.name}</td>
                            <td className="p-3 text-amber-400 font-bold flex items-center gap-1.5">
                              {lead.whatsapp}
                              <a
                                href={`https://wa.me/62${lead.whatsapp.replace(/^0/, "")}`}
                                target="_blank"
                                rel="noreferrer"
                                className="p-1 hover:bg-amber-500/20 text-amber-500 rounded"
                                title="Kirim Chat WA"
                              >
                                <PhoneCall className="h-3.5 w-3.5" />
                              </a>
                            </td>
                            <td className="p-3 font-semibold text-neutral-400">{lead.instansi || "-"}</td>
                            <td className="p-3 font-semibold text-neutral-300">{lead.volume || 0} Kg</td>
                            <td className="p-3 text-neutral-500 text-[11px] truncate max-w-xs" title={lead.pesan}>
                              {lead.pesan || "-"}
                            </td>
                            <td className="p-3 text-right">
                              <button
                                onClick={() => handleDelete(lead.id)}
                                className="p-2 hover:bg-red-950/40 border border-transparent hover:border-red-900/40 text-neutral-500 hover:text-red-500 rounded-lg transition-colors cursor-pointer inline-block"
                                title="Hapus Lead"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
