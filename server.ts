import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;
const LEADS_FILE = path.join(process.cwd(), "leads.json");

app.use(express.json());

// Initialize Supabase if credentials are provided
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
let supabase: any = null;

if (supabaseUrl && supabaseAnonKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
    console.log("Supabase client initialized successfully.");
  } catch (error) {
    console.error("Failed to initialize Supabase:", error);
  }
} else {
  console.log("Supabase credentials not found. Falling back to local JSON database storage.");
}

// Helper to read leads from local file
function readLeadsLocal(): any[] {
  try {
    if (fs.existsSync(LEADS_FILE)) {
      const data = fs.readFileSync(LEADS_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading local leads:", error);
  }
  return [];
}

// Helper to write leads to local file
function writeLeadsLocal(leads: any[]) {
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing local leads:", error);
  }
}

// Ensure local file exists on start
if (!fs.existsSync(LEADS_FILE)) {
  writeLeadsLocal([]);
}

// ==================== API ROUTES ====================

// GET: Fetch all leads (from local or Supabase if synced)
app.get("/api/leads", async (req, res) => {
  try {
    let leads = readLeadsLocal();

    if (supabase) {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Supabase select error:", error);
      } else if (data) {
        // Sync local with Supabase data
        leads = data;
        writeLeadsLocal(leads);
      }
    }

    res.json({ success: true, data: leads });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST: Add a new lead
app.post("/api/leads", async (req, res) => {
  try {
    const { name, whatsapp, instansi, volume, pesan } = req.body;

    if (!name || !whatsapp) {
      return res.status(400).json({ success: false, error: "Nama dan nomor WhatsApp wajib diisi." });
    }

    const newLead = {
      id: "lead_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9),
      name,
      whatsapp,
      instansi: instansi || "-",
      volume: parseFloat(volume) || 0,
      pesan: pesan || "-",
      created_at: new Date().toISOString(),
    };

    // 1. Save locally
    const leads = readLeadsLocal();
    leads.unshift(newLead);
    writeLeadsLocal(leads);

    // 2. Save to Supabase if available
    let supabaseSaved = false;
    if (supabase) {
      const { data, error } = await supabase.from("leads").insert([
        {
          id: newLead.id,
          name: newLead.name,
          whatsapp: newLead.whatsapp,
          instansi: newLead.instansi,
          volume: newLead.volume,
          pesan: newLead.pesan,
          created_at: newLead.created_at,
        },
      ]);

      if (error) {
        console.error("Supabase insert error (continuing with local copy):", error);
      } else {
        supabaseSaved = true;
      }
    }

    res.json({
      success: true,
      data: newLead,
      syncedToSupabase: supabaseSaved,
      message: "Lead berhasil disimpan."
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// DELETE: Delete a lead
app.delete("/api/leads/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    // Delete locally
    let leads = readLeadsLocal();
    leads = leads.filter((l) => l.id !== id);
    writeLeadsLocal(leads);

    // Delete from Supabase if available
    if (supabase) {
      const { error } = await supabase.from("leads").delete().eq("id", id);
      if (error) {
        console.error("Supabase delete error:", error);
      }
    }

    res.json({ success: true, message: "Lead berhasil dihapus." });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== VITE & STATIC HANDLING ====================

async function initServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

initServer();
