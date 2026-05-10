import React, { useState } from "react";
import { Lock, X } from "lucide-react";

// MASUKKAN MAKLUMAT SUPABASE ANDA DI SINI
const SUPABASE_URL = "URL_SUPABASE_ANDA";
const SUPABASE_ANON_KEY = "KEY_SUPABASE_ANDA";

export default function App() {
  const [view, setView] = useState("home");
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4 font-sans">
      <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-2">e-MASUK</h1>
        <p className="text-slate-500 mb-8 font-medium">
          Sistem Pendaftaran Murid
        </p>

        <button
          onClick={() => alert("Sistem sudah berfungsi!")}
          className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
        >
          Daftar Sekarang
        </button>

        <button
          onClick={() => setShowAdminLogin(true)}
          className="mt-6 text-slate-400 text-sm hover:text-slate-600 flex items-center justify-center w-full"
        >
          <Lock size={14} className="mr-2" /> Akses Admin
        </button>
      </div>

      {showAdminLogin && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-3xl w-full max-w-sm relative">
            <button
              onClick={() => setShowAdminLogin(false)}
              className="absolute top-4 right-4 text-slate-400"
            >
              <X size={20} />
            </button>
            <h2 className="text-2xl font-bold mb-6">Log Masuk Admin</h2>
            <input
              type="email"
              placeholder="E-mel"
              className="w-full p-4 border rounded-xl mb-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Kata Laluan"
              className="w-full p-4 border rounded-xl mb-6 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full py-4 bg-slate-800 text-white rounded-xl font-bold">
              Masuk
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
