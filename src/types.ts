export interface Lead {
  id: string;
  name: string;
  whatsapp: string;
  instansi?: string;
  volume: number;
  pesan?: string;
  created_at: string;
}

export interface SimulationResult {
  volumeSampah: number;
  rendemenPellet: number;
  produksiPelletHarian: number;
  hargaJualPellet: number;
  tippingFeeRate: number;
  pendapatanPelletHarian: number;
  pendapatanTippingHarian: number;
  pendapatanTotalHarian: number;
  pendapatanTotalBulanan: number;
  biayaTapiokaHarian: number;
  biayaListrikHarian: number;
  biayaTenagaKerjaHarian: number;
  biayaPerawatanHarian: number;
  biayaTotalHarian: number;
  biayaTotalBulanan: number;
  profitHarian: number;
  profitBulanan: number;
  investasiAwal: number;
  bepBulan: number;
}
