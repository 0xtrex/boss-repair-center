"use client";

import {
  ChevronRight,
  User,
  Mail,
  Phone,
  MapPin,
  Hash,
  Settings,
  ShieldAlert,
  Edit3,
  ShieldCheck
} from "lucide-react";
import { motion } from "framer-motion";

export default function RequestForm() {
  return (
    <section className="py-24 px-4 bg-[var(--bg)] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full max-w-[1000px] bg-[var(--card)] rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] overflow-hidden"
      >
        {/* HEADER */}
        <div className="bg-black py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-orbitron)] font-black italic uppercase tracking-tighter text-white">
            Service Manifest
          </h2>
          <div className="h-1 w-20 bg-[#0ea5e9] mx-auto mt-4" />
        </div>

        <div className="p-8 md:p-20">
          <form
            action="mailto:service@bossrepair.com"
            method="post"
            className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10"
          >
            {[
              ["Full Name", User, "NAME", "text"],
              ["Email", Mail, "EMAIL", "email"],
              ["Phone Number", Phone, "PHONE", "tel"],
              ["Pincode", Hash, "000 000", "text"],
              ["Address", MapPin, "LOCATION", "text"],
            ].map(([label, Icon, placeholder, type]: any, i) => (
              <div key={i} className="flex flex-col gap-3">
                <label className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase flex items-center gap-3">
                  <Icon size={16} className="text-[#0ea5e9]" /> {label}
                </label>
                <input
                  type={type}
                  required
                  placeholder={placeholder}
                  className="w-full bg-zinc-50 border-b-4 border-zinc-100 focus:border-[#0ea5e9] h-20 px-6 text-lg font-bold outline-none text-black rounded-xl transition-all"
                />
              </div>
            ))}

            {/* WARRANTY */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase flex items-center gap-3">
                <ShieldCheck size={16} className="text-[#0ea5e9]" /> Under Warranty
              </label>
              <select className="w-full bg-zinc-50 border-b-4 border-zinc-100 focus:border-[#0ea5e9] h-20 px-6 text-lg font-bold outline-none text-black rounded-xl cursor-pointer">
                <option value="">SELECT STATUS</option>
                <option>Under Warranty</option>
                <option>Out of Warranty</option>
                <option>Extended Care</option>
              </select>
            </div>

            {/* HARDWARE */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase flex items-center gap-3">
                <Settings size={16} className="text-[#0ea5e9]" /> Hardware
              </label>
              <select className="w-full bg-zinc-50 border-b-4 border-zinc-100 focus:border-[#0ea5e9] h-20 px-6 text-lg font-bold outline-none text-black rounded-xl cursor-pointer">
                <option value="">SELECT UNIT</option>
                <option>Refrigerator</option>
                <option>Washing Machine</option>
                <option>Air Conditioner</option>
                <option>Microwave</option>
                <option>Geyser</option>
                <option>TV</option>
              </select>
            </div>

            {/* BRAND */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase flex items-center gap-3">
                <ShieldAlert size={16} className="text-[#0ea5e9]" /> Brand
              </label>
              <input
                type="text"
                placeholder="MANUFACTURER"
                className="w-full bg-zinc-50 border-b-4 border-zinc-100 focus:border-[#0ea5e9] h-20 px-6 text-lg font-bold outline-none text-black rounded-xl"
              />
            </div>

            {/* ISSUE */}
            <div className="md:col-span-2 flex flex-col gap-3">
              <label className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase flex items-center gap-3">
                <Edit3 size={16} className="text-[#0ea5e9]" /> Issue
              </label>
              <textarea
                rows={4}
                placeholder="Describe your issue."
                className="w-full bg-zinc-50 border-b-4 border-zinc-100 focus:border-[#0ea5e9] p-6 text-lg font-bold outline-none text-black rounded-2xl resize-none"
              />
            </div>

            {/* SUBMIT */}
            <div className="md:col-span-2 pt-6">
              <button
                type="submit"
                className="w-full bg-black text-white font-black italic uppercase tracking-[0.6em] py-10 rounded-2xl hover:bg-[#0ea5e9] transition-all flex items-center justify-center gap-6 shadow-xl text-xl"
              >
                BOOK NOW <ChevronRight size={32} />
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
