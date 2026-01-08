"use client";

import { ShieldCheck, Cpu, Globe, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#18181b] border-t border-white/10 py-20 text-white">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* BRAND SECTION */}
        <div className="mb-12">
          <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-2">
            BOSS <span className="text-[#0ea5e9]">REPAIR</span>
          </h2>
          <p className="text-[10px] font-mono tracking-[0.5em] uppercase opacity-70">
            Industrial_Service_Hub
          </p>
        </div>

        {/* PREMIUM CALL NOW SECTION */}
        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-8 mb-16 backdrop-blur-sm">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-[#0ea5e9]">
            Emergency Response Unit
          </p>
          <a 
            href="tel:8420424903" 
            className="flex items-center justify-center gap-4 text-3xl md:text-5xl font-black italic tracking-tighter hover:text-[#0ea5e9] transition-all"
          >
            <PhoneCall size={32} className="text-[#FFD700]" />
            8420424903
          </a>
          <p className="mt-4 text-[11px] font-medium opacity-50 uppercase tracking-widest">
            Click to initiate 2-hour response protocol
          </p>
        </div>

        {/* NAVIGATION */}
        <nav className="flex flex-wrap justify-center gap-10 text-[12px] font-black uppercase tracking-[0.3em] mb-16">
          <a href="#home" className="hover:text-[#0ea5e9] transition-colors">Interface</a>
          <a href="#services" className="hover:text-[#0ea5e9] transition-colors">Solutions</a>
          <a href="#contact" className="hover:text-[#0ea5e9] transition-colors">Manifest</a>
        </nav>

        {/* DISCLOSURE GRID (CENTERED & BROKEN DOWN) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-4 flex flex-col items-center">
            <h5 className="text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#0ea5e9]"></span> 
              Disclaimer 
              <span className="w-8 h-[1px] bg-[#0ea5e9]"></span>
            </h5>
            <p className="text-[13px] leading-relaxed opacity-80 max-w-[300px]">
              We are an independent service provider.<br/>
              Not authorized partners of any brands.<br/>
              Local vendors perform all service calls.<br/>
              We do not hold brand authorizations.
            </p>
          </div>

          <div className="space-y-4 flex flex-col items-center">
            <h5 className="text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#0ea5e9]"></span> 
              Copyright 
              <span className="w-8 h-[1px] bg-[#0ea5e9]"></span>
            </h5>
            <p className="text-[13px] leading-relaxed opacity-80 max-w-[300px]">
              All products are trademarks™ or registered®<br/>
              trademarks of their respective holders.<br/>
              Use of them does not imply affiliation<br/>
              or endorsement by brand owners.
            </p>
          </div>
        </div>

        {/* FINAL BAR */}
        <div className="w-full pt-10 border-t border-white/5 flex flex-col items-center gap-8">
          <div className="flex items-center gap-8 opacity-40">
            <ShieldCheck size={20} />
            <Cpu size={20} />
            <Globe size={20} />
          </div>
          
          <p className="text-[11px] font-bold tracking-[0.2em] opacity-40 uppercase">
            Copyright © 2026 Authorize Repair Care.<br className="md:hidden"/> All Rights Reserved.
          </p>

          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest opacity-60">
            <a href="#" className="hover:text-[#0ea5e9]">Privacy</a>
            <a href="#" className="hover:text-[#0ea5e9]">Terms</a>
            <a href="#" className="hover:text-[#0ea5e9]">Status</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
