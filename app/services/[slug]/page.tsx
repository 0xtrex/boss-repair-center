"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RequestForm from "../../components/Form";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, Quote } from "lucide-react";

/* ---------------- SERVICE DATA ---------------- */

const SERVICE_DETAILS: Record<string, any> = {
  "air-conditioner": { title: "AC Service Center", img: "/ac.png", description: "Our Service Centre has Well Trained And Qualified Engineers OF AC..." },
  "refrigerator": { title: "Fridge Service Center", img: "/fridge.png", description: "Our Service Center has Well Trained And Qualified Engineers OF Fridge..." },
  "microwave": { title: "Microwave Service Center", img: "/microwave.png", description: "Our Service Centre has Well Trained And Qualified Engineers OF Microwave Oven..." },
  "washing-machine": { title: "Washing Machine Service Center", img: "/washing.png", description: "Our Service Center has Well Trained And Qualified Engineers OF Washing Machine..." },
  "geyser": { title: "Geyser Service Center", img: "/geyser.png", description: "Our Service Centre has Well Trained And Qualified Engineers OF Geyser..." },
  "television": { title: "TV Service Center", img: "/tv.png", description: "Our service center provides expert TV repair services..." },
};

/* ---------------- REVIEWS ---------------- */

const REVIEWS = [
  { name: "Anirban Chatterjee", text: "আপনার সার্ভিস সত্যিই অসাধারণ।\n২ ঘণ্টার মধ্যেই টেকনিশিয়ান চলে এসেছিল।" },
  { name: "Sumi Mukherjee", text: "বস রিপেয়ার সেন্টারের মতো নিখুঁত কাজ আর কেউ করতে পারেনি।" },
  { name: "Rahul Dasgupta", text: "দামী অ্যাপ্লায়েন্সের জন্য সেরা জায়গা।" },
];

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = SERVICE_DETAILS[slug];

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentReview((p) => (p + 1) % REVIEWS.length);
    }, 7000);
    return () => clearInterval(t);
  }, []);

  if (!data) return <div className="min-h-screen bg-[var(--bg)]" />;

  return (
    <main className="w-full bg-[var(--bg)] text-[var(--fg)] flex flex-col items-center">
      <Navbar />

      {/* FLOATING CALL ICON — LEFT (UNCHANGED) */}
      <motion.a
        href="tel:8420424903"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
        transition={{ y: { repeat: Infinity, duration: 2 } }}
        whileHover={{ scale: 1.1 }}
        style={{ position: "fixed", left: 24, top: "60%", zIndex: 9999 }}
        className="bg-[#800080] p-6 rounded-full shadow-[0_0_40px_rgba(128,0,128,0.5)]"
      >
        <PhoneCall size={36} color="#FFD700" />
      </motion.a>

      {/* HERO */}
      <section className="w-full max-w-5xl pt-[250px] pb-20 px-6 text-center">
        <div className="relative mb-24 flex justify-center overflow-visible">

          {/* 🔵 SKY GLOW — BREATHING + STRONGER IN LIGHT MODE */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute pointer-events-none"
            style={{
              width: 680,
              height: 680,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0,255,255,0.85) 0%, rgba(0,255,255,0.55) 30%, rgba(0,255,255,0.35) 50%, transparent 75%)",
              filter: "blur(160px)",
              mixBlendMode: "screen",
              zIndex: 0,
            }}
          />

          {/* PNG ONLY — NO BOX */}
          <img
            src={data.img}
            alt={data.title}
            className="relative z-10 w-full max-w-[420px] h-[380px] object-contain"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-black italic uppercase font-[family-name:var(--font-orbitron)] text-[#0ea5e9]">
          {data.title}
        </h1>

        <p className="mt-10 max-w-[700px] mx-auto text-xl text-[var(--fg-muted)]">
          {data.description}
        </p>
      </section>

      {/* FORM */}
      <section className="w-full max-w-5xl py-40 px-6">
        <div className="bg-[var(--card)] p-10 md:p-24 rounded-[3rem] shadow-[0_60px_100px_rgba(0,0,0,0.6)]">
          <RequestForm />
        </div>
      </section>

      <div className="h-[160px]" />

      {/* REVIEWS */}
      <section className="w-full max-w-4xl py-40 px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReview}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <Quote className="mx-auto mb-12 text-[#00FFFF]" size={60} />
            <p className="text-2xl md:text-4xl italic whitespace-pre-line">
              “{REVIEWS[currentReview].text}”
            </p>
            <div className="mt-10 tracking-widest uppercase text-[var(--fg-muted)]">
              {REVIEWS[currentReview].name}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      <div className="h-[160px]" />

      <Footer />
    </main>
  );
}
