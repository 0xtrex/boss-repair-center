"use client";

import { useState } from "react";
import {
  ShieldCheck,
  ChevronDown,
  PhoneCall,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const SERVICES_NAV = [
  { name: "AC", href: "/services/air-conditioner" },
  { name: "Refrigerator", href: "/services/refrigerator" },
  { name: "Microwave", href: "/services/microwave" },
  { name: "Washing Machine", href: "/services/washing-machine" },
  { name: "Geyser", href: "/services/geyser" },
  { name: "TV", href: "/services/television" },
];

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const linkStyle = { color: "#ffffff", textDecoration: "none" };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-[#161b22] border-b border-white/10 z-[10000]">
      <div className="max-w-[1900px] mx-auto px-6 md:px-12 py-6 md:py-10 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-4 shrink-0"
          style={linkStyle}
        >
          <div className="bg-[#00FFFF] p-2 rounded-lg hidden md:block">
            <ShieldCheck size={30} color="black" />
          </div>
          <span className="text-2xl md:text-3xl font-[900] italic text-[#00FFFF] uppercase font-[family-name:var(--font-orbitron)]">
            BOSS REPAIR
          </span>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-[120px]">
          <Link href="/" style={linkStyle}>HOME</Link>
          <Link href="/#about" style={linkStyle}>ABOUT</Link>

          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              className="flex items-center gap-2 uppercase font-bold tracking-widest"
              style={linkStyle}
            >
              SERVICES
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  isServicesOpen ? "rotate-180 text-[#00FFFF]" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-6 bg-[#0b0c10] border-2 border-[#0ea5e9] shadow-[0_40px_100px_rgba(0,0,0,0.9)] z-[10001]"
                >
                  {SERVICES_NAV.map((s) => (
                    <Link
                      key={s.name}
                      href={s.href}
                      className="block px-8 py-6 border-b border-white/10 hover:bg-[#0ea5e9]/10"
                      style={linkStyle}
                    >
                      {s.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/#contact" style={linkStyle}>CONTACT</Link>
        </div>

        {/* DESKTOP CALL BUTTON */}
        <div className="hidden md:flex items-center gap-10">
          <motion.a
            href="tel:8420424903"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-[#FFD700] px-6 py-3 rounded-full"
            style={{ textDecoration: "none" }}
          >
            <PhoneCall size={20} color="black" />
            <span className="text-black font-black uppercase text-sm">
              Call Now
            </span>
          </motion.a>
        </div>

        {/* ================= MOBILE HAMBURGER ================= */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileOpen(true)}
        >
          <Menu size={32} />
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 bg-white z-[10001]"
          >
            <div className="p-6 flex justify-between items-center border-b">
              <span className="text-xl font-bold">Authorize Repair Care</span>
              <button onClick={() => setIsMobileOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col p-6 gap-6 text-lg font-semibold">
              <Link href="/#about" onClick={() => setIsMobileOpen(false)}>
                About Us
              </Link>

              <details>
                <summary className="cursor-pointer">Services</summary>
                <div className="mt-4 flex flex-col gap-4 pl-4">
                  {SERVICES_NAV.map((s) => (
                    <Link
                      key={s.name}
                      href={s.href}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </details>

              <Link href="/#contact" onClick={() => setIsMobileOpen(false)}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
