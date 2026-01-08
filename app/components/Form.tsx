"use client";

import { ChevronRight, User, Mail, Phone, MapPin, Hash, Settings, ShieldAlert, Edit3, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function RequestForm() {
  return (
    <section className="py-24 px-4 bg-[#0b0c10] flex items-center justify-center">
      {/* Centered Premium Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full max-w-[1000px] bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] overflow-hidden"
      >
        
        {/* Tech Giant Header */}
        <div className="bg-black py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-orbitron)] font-black italic uppercase tracking-tighter text-white">
            Service Manifest
          </h2>
          <div className="h-1 w-20 bg-[#0ea5e9] mx-auto mt-4" />
        </div>

        <div className="p-8 md:p-20">
          {/* Symmetrical Grid: Forced 2-column layout */}
          <form action="mailto:service@bossrepair.com" method="post" className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
            
            {/* 1. Full Name */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase flex items-center gap-3">
                <User size={16} className="text-[#0ea5e9]" /> Full Name
              </label>
              <input type="text" required placeholder="NAME" className="w-full bg-zinc-50 border-b-4 border-zinc-100 focus:border-[#0ea5e9] h-20 px-6 text-lg font-bold outline-none text-black rounded-xl transition-all" />
            </div>

            {/* 2. Email */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase flex items-center gap-3">
                <Mail size={16} className="text-[#0ea5e9]" /> Email
              </label>
              <input type="email" required placeholder="EMAIL" className="w-full bg-zinc-50 border-b-4 border-zinc-100 focus:border-[#0ea5e9] h-20 px-6 text-lg font-bold outline-none text-black rounded-xl transition-all" />
            </div>

            {/* 3. Phone Number */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase flex items-center gap-3">
                <Phone size={16} className="text-[#0ea5e9]" /> Phone Number
              </label>
              <input type="tel" required placeholder="PHONE" className="w-full bg-zinc-50 border-b-4 border-zinc-100 focus:border-[#0ea5e9] h-20 px-6 text-lg font-bold outline-none text-black rounded-xl transition-all" />
            </div>

            {/* 4. Pincode */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase flex items-center gap-3">
                <Hash size={16} className="text-[#0ea5e9]" /> Pincode
              </label>
              <input type="text" required placeholder="000 000" className="w-full bg-zinc-50 border-b-4 border-zinc-100 focus:border-[#0ea5e9] h-20 px-6 text-lg font-bold outline-none text-black rounded-xl transition-all" />
            </div>

            {/* 5. Address */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase flex items-center gap-3">
                <MapPin size={16} className="text-[#0ea5e9]" /> Address
              </label>
              <input type="text" required placeholder="LOCATION" className="w-full bg-zinc-50 border-b-4 border-zinc-100 focus:border-[#0ea5e9] h-20 px-6 text-lg font-bold outline-none text-black rounded-xl transition-all" />
            </div>

            {/* 6. Warranty Status */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase flex items-center gap-3">
                <ShieldCheck size={16} className="text-[#0ea5e9]" /> Under Warranty
              </label>
              <select required className="w-full bg-zinc-50 border-b-4 border-zinc-100 focus:border-[#0ea5e9] h-20 px-6 text-lg font-bold outline-none text-black appearance-none rounded-xl cursor-pointer">
                <option value="">SELECT STATUS</option>
                <option>Under Warranty</option>
                <option>Out of Warranty</option>
                <option>Extended Care</option>
              </select>
            </div>

            {/* 7. Hardware (Expanded List) */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase flex items-center gap-3">
                <Settings size={16} className="text-[#0ea5e9]" /> Hardware
              </label>
              <select required className="w-full bg-zinc-50 border-b-4 border-zinc-100 focus:border-[#0ea5e9] h-20 px-6 text-lg font-bold outline-none text-black appearance-none rounded-xl cursor-pointer">
                <option value="">SELECT UNIT</option>
                <option>Refrigerator</option>
                <option>Washing Machine</option>
                <option>Air Conditioner</option>
                <option>Microwave</option>
                <option>Geyser</option>
                <option>TV</option>
              </select>
            </div>

            {/* 8. Brand */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase flex items-center gap-3">
                <ShieldAlert size={16} className="text-[#0ea5e9]" /> Brand
              </label>
              <input type="text" required placeholder="MANUFACTURER" className="w-full bg-zinc-50 border-b-4 border-zinc-100 focus:border-[#0ea5e9] h-20 px-6 text-lg font-bold outline-none text-black rounded-xl transition-all" />
            </div>

            {/* 9. Issue (Full Width) */}
            <div className="md:col-span-2 flex flex-col gap-3">
              <label className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase flex items-center gap-3">
                <Edit3 size={16} className="text-[#0ea5e9]" /> Issue
              </label>
              <textarea required placeholder="Describe your issue." rows={4} className="w-full bg-zinc-50 border-b-4 border-zinc-100 focus:border-[#0ea5e9] p-6 text-lg font-bold outline-none text-black resize-none rounded-2xl transition-all" />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 pt-6">
              <button type="submit" className="w-full bg-black text-white font-black italic uppercase tracking-[0.6em] py-10 rounded-2xl hover:bg-[#0ea5e9] transition-all flex items-center justify-center gap-6 group shadow-xl text-xl">
                BOOK NOW <ChevronRight size={32} className="group-hover:translate-x-2 transition-transform duration-500" />
              </button>
            </div>

          </form>
        </div>
      </motion.div>
    </section>
  );
}
