"use client";

import { ShieldCheck, Cpu, Globe, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f1f5f9] dark:bg-[#f1f5f9] border-t border-[var(--border)] py-20 text-[#0b0c10] dark:text-white">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">

        <div className="mb-12">
          <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-2">
            BOSS <span className="text-[#0ea5e9]">REPAIR</span>
          </h2>
          <p className="text-[10px] font-mono tracking-[0.5em] uppercase opacity-70">
            Industrial_Service_Hub
          </p>
        </div>

        <div className="w-full bg-black/5 border border-[var(--border)] rounded-2xl p-8 mb-16">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-[#0ea5e9]">
            Emergency Response Unit
          </p>
          <a
            href="tel:8420424903"
            className="flex items-center justify-center gap-4 text-3xl md:text-5xl font-black italic tracking-tighter hover:text-[#0ea5e9]"
          >
            <PhoneCall size={32} className="text-[#FFD700]" />
            8420424903
          </a>
          <p className="mt-4 text-[11px] opacity-50 uppercase tracking-widest">
            Click to call immediately after form submission 2 hour response guranteed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {["Disclaimer", "Copyright"].map((t, i) => (
            <div key={i} className="space-y-4">
              <h5 className="text-[11px] font-black uppercase tracking-[0.3em]">
                {t}
              </h5>
              <p className="text-[13px] opacity-80 leading-relaxed">
                {t === "Disclaimer"
                  ? "Independent service provider. No brand authorization."
                  : "All trademarks belong to respective owners."}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-[var(--border)] flex flex-col items-center gap-8">
          <div className="flex gap-8 opacity-40">
            <ShieldCheck size={20} />
            <Cpu size={20} />
            <Globe size={20} />
          </div>

          <p className="text-[11px] font-bold tracking-[0.2em] opacity-40 uppercase">
            © 2026 Authorize Repair Care
          </p>
        </div>
      </div>
    </footer>
  );
}
