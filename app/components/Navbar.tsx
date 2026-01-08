"use client";

import { useState } from "react";
import { ShieldCheck, ChevronDown, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const SERVICES_NAV = [
  { name: "Ac", href: "/services/air-conditioner" },
  { name: "Refrigerator", href: "/services/refrigerator" },
  { name: "Microwave", href: "/services/microwave" },
  { name: "Washing Machine", href: "/services/washing-machine" },
  { name: "Geyser", href: "/services/geyser" },
  { name: "TV", href: "/services/television" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Reusable style to force white color and remove underlines
  const linkStyle = { color: "#ffffff", textDecoration: "none" };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-[#161b22] border-b border-white/10 py-10 z-[10000]">
      <div className="max-w-[1900px] mx-auto px-12 pr-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4 shrink-0" style={linkStyle}>
          <div className="bg-[#00FFFF] p-2 rounded-lg">
            <ShieldCheck size={30} color="black" />
          </div>
          <span className="text-3xl font-[900] italic text-[#00FFFF] uppercase font-[family-name:var(--font-orbitron)]">
            BOSS REPAIR
          </span>
        </Link>

        {/* SPACIOUS NAVIGATION - FORCED WHITE & NO UNDERLINE */}
        <div className="absolute left-1/2 -translate-x-1/2 nav-master-wrapper flex items-center gap-[120px]">
          <Link href="/" className="nav-link-item" style={linkStyle}>HOME</Link>
          <Link href="/#about" className="nav-link-item" style={linkStyle}>ABOUT</Link>

          <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button 
              className="nav-link-item flex items-center gap-3 bg-transparent border-none cursor-pointer uppercase font-bold tracking-widest"
              style={linkStyle}
            >
              SERVICES
              <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#00FFFF]' : ''}`} />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-6 min-w-max shadow-[0_40px_100px_rgba(0,0,0,0.9)] border-2 border-[#0ea5e9] z-[10001] rounded-none overflow-hidden"
                  style={{ width: 'fit-content', backgroundColor: '#0b0c10', opacity: 1 }}
                >
                  <div className="flex flex-col">
                    {SERVICES_NAV.map((s) => (
                      <Link
                        key={s.name}
                        href={s.href}
                        className="block px-8 py-7 group hover:bg-[#0ea5e9]/10 transition-all border-b border-white/5 last:border-none whitespace-nowrap"
                        style={{ backgroundColor: '#0b0c10', textDecoration: 'none' }}
                        onClick={() => setIsOpen(false)}
                      >
                        <span
                          className="text-[16px] font-bold block uppercase tracking-wider group-hover:!text-[#0ea5e9] transition-colors"
                          style={{ color: '#ffffff' }}
                        >
                          {s.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/#contact" className="nav-link-item" style={linkStyle}>CONTACT</Link>
        </div>

        {/* PREMIUM CALL NOW BUTTON */}
        <div className="flex items-center gap-10">
          <motion.a
            href="tel:8420424903"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-[#FFD700] px-6 py-3 rounded-full group shadow-[0_0_25px_rgba(255,215,0,0.4)]"
            style={{ textDecoration: 'none' }}
          >
            <motion.div
              animate={{ rotate: [0, -20, 20, -20, 20, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, repeatDelay: 0.8 }}
            >
              <PhoneCall size={20} color="black" />
            </motion.div>
            <span className="text-black font-black uppercase tracking-widest text-sm">
              Call Now
            </span>
          </motion.a>

          {/* PULSE DOT */}
          <div className="hidden lg:block w-3 h-3 rounded-full bg-[#00FFFF] animate-pulse shadow-[0_0_15px_#00FFFF]" />
        </div>
      </div>
    </nav>
  );
}
