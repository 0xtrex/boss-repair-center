"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RequestForm from "./components/Form";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Phone, PhoneCall } from "lucide-react";

const BANNERS = [
  { title: "PRECISION CARE", subtitle: "Industrial Grade Home Diagnostics", img: "/banner1.png" },
  { title: "ELITE SERVICE", subtitle: "2-Hour Response Time Guaranteed", img: "/banner2.png" },
  { title: "SMART REPAIR", subtitle: "AI-Powered Appliance Optimization", img: "/banner3.png" },
  { title: "SMART REPAIR", subtitle: "AI-Powered Appliance Optimization", img: "/banner4.png" }
];

const REVIEWS = [
  { name: "Anirban Chatterjee", text: "আপনার সার্ভিস সত্যিই অসাধারণ।\n২ ঘণ্টার মধ্যেই টেকনিশিয়ান চলে এসেছিল।\nখুবই পেশাদার কাজ।" },
  { name: "Sumi Mukherjee", text: "আমার এসি ঠিক করার জন্য অনেককে ডেকেছিলাম।\nকিন্তু বস রিপেয়ার সেন্টারের মতো নিখুঁত কাজ\nআর কেউ করতে পারেনি।" },
  { name: "Rahul Dasgupta", text: "দামী অ্যাপ্লায়েন্সের জন্য সেরা জায়গা।\nটেকনিশিয়ানদের ব্যবহার এবং জ্ঞান\nসত্যিই প্রশংসনীয়।" },
  { name: "Priyanka Sen", text: "খুবই দ্রুত সার্ভিস।\nআমার ওয়াশিং মেশিন এখন নতুনের মতো চলছে।\nসবাইকে রিকমেন্ড করছি।" },
  { name: "Amitava Roy", text: "ইন্ডাস্ট্রিয়াল গ্রেড ডায়াগনস্টিক টুলস ব্যবহার করে তারা।\nসমস্যা খুব দ্রুত ধরা পড়ে যায়।\nধন্যবাদ BOSS REPAIR!" },
  { name: "Barnali Ghosh", text: "রেফ্রিজারেটর সার্ভিসিংয়ের জন্য সেরা।\nঅরিজিনাল পার্টস ব্যবহার করে তারা।\nখুবই নির্ভরযোগ্য।" },
  { name: "Sayan Banerjee", text: "স্মার্ট টিভি রিপেয়ারিংয়ের জন্য এদের ওপরে ভরসা করা যায়।\nকোয়ালিটি এবং দামের সঠিক ব্যালেন্স।" },
  { name: "Debjani Dutta", text: "গিজার রিপেয়ার সার্ভিস খুবই চমৎকার।\nঠাণ্ডার দিনে খুব তাড়াতাড়ি সার্ভিস পেয়ে\nঅনেক উপকার হলো।" },
  { name: "Rajat Bose", text: "তাদের রেসপন্স টাইম গ্যারান্টিড।\nআমি কল করার ৯০ মিনিটের মধ্যে\nসাহায্য পেয়েছি।" },
  { name: "Nilanjana Sarkar", text: "এআই পাওয়ারড অপ্টিমাইজেশন সত্যিই দারুণ।\nপুরানো মাইক্রোওয়েভ এখন চমৎকার চলছে।\nঅসাধারণ অভিজ্ঞতা।" }
];

const SERVICES = [
  { title: "Washing Machine Repair & Service", desc: "Expert repair for all types—top-load, front-load, fully and semi-automatic.", img: "/washing.png", scale: "w-[20.7vw]", slug: "washing-machine" },
  { title: "Refrigerator Repair & Service", desc: "Service for all types—single to side-by-side models.", img: "/fridge.png", scale: "w-[13.5vw]", slug: "refrigerator" },
  { title: "Microwave Repair & Service", desc: "Expert repairs for grill and convection models.", img: "/microwave.png", scale: "w-[23.7vw]", slug: "microwave" },
  { title: "AC Repair & Service", desc: "Expert repair for window and split units.", img: "/ac.png", scale: "w-[59.4vw]", slug: "air-conditioner" },
  { title: "Geyser Repair & Service", desc: "Fast, reliable service for all types.", img: "/geyser.png", scale: "w-[18vw]", slug: "geyser" },
  { title: "TV Repair & Service", desc: "Service for all types—LED, LCD, Smart TVs, and more.", img: "/tv.png", scale: "w-[24.7vw]", slug: "television" },
];

const SlowTypewriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <motion.span>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: delay + (i * 0.15) }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function HomePage() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentBanner((prev) => (prev + 1) % BANNERS.length), 10000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentReview((prev) => (prev + 1) % REVIEWS.length), 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-[#0b0c10] min-h-screen text-white overflow-x-hidden font-[family-name:var(--font-inter)]">
      <Navbar />

      {/* FLOATING CALL ICON - PURPLE BG + YELLOW ICON */}
      <motion.a
        href="tel:8420424903"
        initial={{ x: -100 }}
        animate={{ x: 0, y: [0, -10, 0] }}
        transition={{ 
          x: { duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" } 
        }}
        whileHover={{ scale: 1.1 }}
        className="fixed left-8 top-[60%] z-[9999] bg-[#800080] p-6 rounded-full shadow-[0_0_40px_rgba(128,0,128,0.5)] cursor-pointer group"
      >
        <motion.div
          animate={{ rotate: [0, -15, 15, -15, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1, repeatDelay: 1 }}
        >
          <Phone size={36} color="#FFD700" fill="#FFD700" />
        </motion.div>
      </motion.a>

      {/* --- HERO SECTION --- */}
      <section id="home" className="w-full mt-[130px] pt-10 px-4 md:px-12">
        <div className="w-full h-[500px] md:h-[750px] relative overflow-hidden rounded-[2.5rem] md:rounded-[5rem] shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBanner}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full"
            >
              <motion.img
                src={BANNERS[currentBanner].img}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10 }}
              />
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{ background: "rgba(0,0,0,0.65)", width: "100%", height: "100%" }}
              />
              <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
                <h2
                  className="text-4xl md:text-[7vw] font-black italic uppercase tracking-tighter leading-none mb-8 font-[family-name:var(--font-orbitron)] text-white"
                  style={{ textShadow: "0 0 30px rgba(255,255,255,0.7), 0 0 60px rgba(0,255,255,0.4)" }}
                >
                  <SlowTypewriter key={`t-${currentBanner}`} text={BANNERS[currentBanner].title} delay={0.5} />
                </h2>
                <p
                  className="text-[#0ea5e9] text-lg md:text-2xl uppercase tracking-[0.5em] font-bold italic"
                  style={{ textShadow: "0 0 20px rgba(14,165,233,0.8), 0 0 40px rgba(14,165,233,0.5)" }}
                >
                  <SlowTypewriter key={`s-${currentBanner}`} text={BANNERS[currentBanner].subtitle} delay={3} />
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* --- ABOUT US SECTION --- */}
      <section id="about" className="py-40 px-6 flex flex-col items-center text-center bg-[#0d0e12] mt-[250px]">
        <h2 className="text-[#0ea5e9] font-mono tracking-[0.5em] text-xs mb-10 uppercase"
            style={{ textShadow: "0 0 15px rgba(14,165,233,0.7)" }}>
          NO1 REPAIR CENTER
        </h2>
        {/* FULL TEXT TYPEWRITER EFFECT */}
        <h3 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter mb-16 font-[family-name:var(--font-orbitron)]">
          <SlowTypewriter text="WE ARE BOSS REPAIR" delay={1} />
        </h3>
        <div className="max-w-5xl text-zinc-400 text-xl md:text-3xl uppercase tracking-widest font-light space-y-8">
          <p>Authorize Repair Care is India&apos;s leading</p>
          <p>industrial-grade home appliance diagnostic hub.</p>
          <p>We provide precision engineering solutions</p>
          <p>for elite appliances with a</p>
          <p>strict 2-hour response protocol.</p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="pt-12"
          >
            <motion.a
              href="tel:8420424903"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex items-center justify-center gap-4 text-[#FFD700] no-underline font-black italic text-3xl md:text-5xl tracking-tighter hover:text-white transition-colors"
            >
              <PhoneCall size={40} />
              CALL NOW: 8420424903
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-20 bg-[#0b0c10]">
        <RequestForm />
      </section>

      {/* --- SERVICES GRID SECTION --- */}
      <section id="services" className="mt-[250px] pt-20 pb-40">
        <header className="pb-48 text-center">
          <h1 className="text-5xl md:text-[10vw] font-black italic uppercase tracking-tighter font-[family-name:var(--font-orbitron)] text-white">
            ENGINEERED <span className="text-zinc-900">SOLUTIONS</span>
          </h1>
        </header>

        <div className="w-[85vw] mx-auto">
          <section className="grid grid-cols-2 gap-x-[15vw] gap-y-[10vw]">
            {SERVICES.map((s, i) => (
              <Link href={`/services/${s.slug}`} key={i} className="no-underline">
                <motion.div
                  whileHover={{ scale: 0.98 }}
                  className="aspect-square bg-[#0d0e12] border border-[#0ea5e9]/50 rounded-[3vw] p-[4vw] flex flex-col items-center justify-center text-center relative group overflow-hidden shadow-2xl h-[31.5vw] cursor-pointer"
                >
                  <div className="z-10 flex items-center justify-center w-full flex-grow relative">
                    <div className="absolute inset-0 bg-[#0ea5e9]/10 blur-[60px] rounded-full scale-75 group-hover:bg-[#0ea5e9]/20 transition-all" />
                    <motion.img
                      src={s.img}
                      alt={s.title}
                      className={`${s.scale} relative z-10 object-contain drop-shadow-[0_20px_50px_rgba(14,165,233,0.2)] group-hover:scale-105 transition-transform duration-700 mx-auto`}
                    />
                  </div>
                  <div className="z-20 mt-6 space-y-4">
                    <h2 className="text-[1.6vw] font-black italic uppercase tracking-tighter leading-none text-[#0ea5e9] font-[family-name:var(--font-orbitron)]">
                      {s.title}
                    </h2>
                    <p 
                      className="text-[0.8vw] font-medium leading-relaxed max-w-[85%] mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ color: "#ffffff" }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </section>
        </div>
      </section>

      {/* --- REVIEWS SECTION --- */}
      <section className="py-60 bg-[#0b0c10] flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-4xl min-h-[400px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <Quote className="text-[#0ea5e9] mb-12 opacity-40" size={60} />
              <div className="text-2xl md:text-4xl font-light italic text-zinc-300 leading-relaxed mb-12 whitespace-pre-line">
                &quot;{REVIEWS[currentReview].text}&quot;
              </div>
              <div className="h-[2px] w-16 bg-[#0ea5e9] mb-6" />
              <span className="font-[family-name:var(--font-orbitron)] uppercase tracking-[0.4em] text-md text-white">
                {REVIEWS[currentReview].name}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
