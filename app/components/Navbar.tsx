"use client";

import { useState, useEffect } from "react";
import {
  ShieldCheck,
  ChevronDown,
  PhoneCall,
  Menu,
  X,
  Sun,
  Moon,
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRealMobile, setIsRealMobile] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const detect = () => {
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      const isSmall = window.innerWidth < 768;
      setIsRealMobile(isCoarse && isSmall);
    };
    detect();
    window.addEventListener("resize", detect);
    return () => window.removeEventListener("resize", detect);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark";
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#ffffff",
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-[#e5e7eb] dark:bg-[#1f2933] border-b border-[var(--border)] z-[10000]">
      <div className="max-w-[1900px] mx-auto px-6 md:px-12 py-6 md:py-10 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4" style={linkStyle}>
          {!isRealMobile && (
            <div className="bg-[#00FFFF] p-2 rounded-lg">
              <ShieldCheck size={30} color="black" />
            </div>
          )}
          <span className="text-2xl md:text-3xl font-[900] italic uppercase font-[family-name:var(--font-orbitron)] text-[#00FFFF]">
            BOSS REPAIR
          </span>
        </Link>

        {/* DESKTOP */}
        {!isRealMobile && (
          <>
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-[120px]">
              <Link href="/" style={linkStyle}>HOME</Link>
              <Link href="/#about" style={linkStyle}>ABOUT</Link>

              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center gap-2 uppercase font-bold tracking-widest">
                  SERVICES <ChevronDown size={16} />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-6 bg-[var(--bg)] border-2 border-[#0ea5e9] shadow-[0_40px_100px_rgba(0,0,0,0.9)]"
                    >
                      {SERVICES_NAV.map((s) => (
                        <Link
                          key={s.name}
                          href={s.href}
                          className="block px-8 py-6 border-b border-[var(--border)] hover:bg-[#0ea5e9]/10 no-underline"
                          style={{ color: "var(--fg)" }}
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

            <div className="flex items-center gap-6">
              <button onClick={toggleTheme} className="p-3 rounded-full border border-[var(--border)]">
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </button>

              <motion.a
                href="tel:8420424903"
                className="flex items-center gap-3 bg-[#FFD700] px-6 py-3 rounded-full"
              >
                <PhoneCall size={20} color="black" />
                <span className="text-black font-black uppercase tracking-widest text-sm">
                  Call Now
                </span>
              </motion.a>
            </div>
          </>
        )}

        {/* MOBILE */}
        {isRealMobile && (
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme}>
              {theme === "light" ? <Moon size={26} /> : <Sun size={26} />}
            </button>
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={32} />
            </button>
          </div>
        )}
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isRealMobile && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[var(--bg)] z-[10001]"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={30} className="text-[#00FFFF]" />
              </button>
            </div>

            <div className="flex flex-col items-center gap-10 mt-20 text-xl font-bold uppercase">
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/">HOME</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/#about">ABOUT</Link>

              <div className="flex flex-col items-center gap-6">
                <span className="text-[#0ea5e9] tracking-widest">SERVICES</span>
                {SERVICES_NAV.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="no-underline"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>

              <Link onClick={() => setIsMobileMenuOpen(false)} href="/#contact">
                CONTACT
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
