"use client";

import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RequestForm from "../../components/Form";
import { motion } from "framer-motion";
import { PhoneCall, Clock, CheckCircle } from "lucide-react";

const SERVICE_DETAILS: Record<string, any> = {
  "air-conditioner": { title: "AC Service Center", img: "/ac.png", description: "Our Service Centre has Well Trained And Qualified Engineers OF AC. We Have Personalized Technician For Window AC And Split AC. As AC is Our Daily Need, So We Provide Quick And Fast Service. Get Your Window AC And Split AC Repair By Expert Engineers. Just Call Our Customer Service Center Helpline Toll Free Number And Get Instant Visit Within 2 Hours At Your Doorstep. Get Hassle Free Service." },
  "refrigerator": { title: "Fridge Service Center", img: "/fridge.png", description: "Our Service Center has Well Trained And Qualified Engineers OF Fridge. We Have Personalized Technician For Single Door Fridge, Double Door Fridge, Triple Door Fridge And Side By Side Fridge. As Fridge is Our Daily Need, So We Provide Quick And Fast Service. Get Your Fridge Repair By Expert Engineers. Just Call Our Customer Service Center Helpline Toll Free Number And Get Instant Visit Within 2 Hours At Your Doorstep. Get Hassle Free Service." },
  "microwave": { title: "Microwave Service Center", img: "/microwave.png", description: "Our Service Centre has Well Trained And Qualified Engineers OF Microwave Oven. We Have Personalized Technician For Grill Microwave Oven And Convection Microwave Oven. As Microwave Oven is Our Daily Need, So We Provide Quick And Fast Service. Get Your Microwave Repair By Expert Engineers. Just Call Our Customer Service Center Helpline Toll Free Number And Get Instant Visit Within 2 Hours At Your Doorstep. Get Hassle Free Service." },
  "washing-machine": { title: "Washing Machine Service Center", img: "/washing.png", description: "Our Service Center has Well Trained And Qualified Engineers OF Washing Machine. We Have Personalized Technician For Top Load Washing Machine And Front Load Washing Machine. As Washing Machine is Our Daily Need, So We Provide Quick And Fast Service. Get Your Fully Automatic And Semi Automatic Washing Machine Repair By Expert Engineers. Just Call Our Customer Service Center Helpline Toll Free Number And Get Instant Visit Within 2 Hours At Your Doorstep. Get Hassle Free Service." },
  "geyser": { title: "Geyser Service Center", img: "/geyser.png", description: "Our Service Centre has Well Trained And Qualified Engineers OF Geyser. We Have Personalized Technician For all kind of Geyser. As Geyser is Our Daily Need, So We Provide Quick And Fast Service. Get Your Geyser Repair By Expert Engineers. Just Call Our Customer Service Center Helpline Toll Free Number And Get Instant Visit Within 2 Hours At Your Doorstep. Get Hassle Free Service." },
  "television": { title: "TV Service Center", img: "/tv.png", description: "Our service center provides expert TV repair services with well-trained and experienced technicians. We handle all types of TVs—LED, LCD, Smart TVs, and more. Understanding how important your TV is for home entertainment, we ensure quick and reliable service. Just call our toll-free customer helpline, and we’ll send a technician to your home within 2 hours for a hassle-free repair experience at your doorstep!" }
};

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = SERVICE_DETAILS[slug];

  if (!data) return <div className="min-h-screen bg-[#0b0c10]" />;

  return (
    <main className="w-full bg-[#0b0c10] flex flex-col items-center">
      <Navbar />

      {/* --- CENTERED HERO SECTION --- */}
      <section className="w-full max-w-5xl pt-[250px] pb-20 px-6 flex flex-col items-center text-center">
        
        {/* STANDARDIZED PNG SIZE WITH SKY GLOW */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative flex justify-center mb-24" 
        >
          {/* THE GLOW EFFECT: Increased opacity and size for a 'Sky Glow' feel */}
          <div className="absolute inset-0 bg-[#00FFFF]/30 blur-[150px] rounded-full scale-150" />
          <div className="absolute inset-0 bg-[#00FFFF]/20 blur-[80px] rounded-full scale-110" />
          
          <img
            src={data.img}
            alt={data.title}
            className="relative z-10 w-full max-w-[500px] h-[400px] object-contain drop-shadow-[0_0_40px_rgba(0,255,255,0.3)]"
          />
        </motion.div>

        {/* CENTERED TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center space-y-8"
        >
          <div className="text-[#00FFFF] font-black tracking-[0.5em] uppercase text-xs">
            Elite Engineering Division
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic uppercase font-[family-name:var(--font-orbitron)] leading-none tracking-tighter">
            {data.title.split(' ')[0]} <br />
            <span className="text-[#00FFFF]">{data.title.split(' ').slice(1).join(' ')}</span>
          </h1>

          <div className="max-w-[700px]">
            <p className="text-xl text-zinc-400 leading-relaxed font-medium">
              {data.description}
            </p>
          </div>

          {/* LIVELY TAP ME BUTTON SECTION */}
          <div className="flex flex-col items-center gap-8 pt-10">
            <motion.a
              href="tel:8420424903"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#FFD700] text-black px-16 py-8 rounded-full font-black uppercase tracking-[0.2em] no-underline text-2xl shadow-[0_0_30px_rgba(255,215,0,0.4)] flex flex-col items-center justify-center gap-2 group"
            >
              <div className="flex items-center gap-3">
                <PhoneCall size={28} className="group-hover:rotate-12 transition-transform" /> 
                TAP TO CALL: 8420424903
              </div>
              <span className="text-[10px] opacity-70 tracking-widest animate-pulse">Available 24/7 • Tap Me Now</span>
            </motion.a>

            <div className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest flex gap-8">
              <div className="flex items-center gap-2"><Clock size={14} className="text-[#00FFFF]" /> Instant Dispatch</div>
              <div className="flex items-center gap-2"><CheckCircle size={14} className="text-[#00FFFF]" /> Doorstep Visit</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- CENTERED FEATURES --- */}
      <section className="w-full max-w-7xl py-32 px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
        {[
          { t: "Expert Staff", d: "Certified engineers with over 10 years of industrial experience." },
          { t: "Fast Arrival", d: "Technician reaches your doorstep within 120 minutes of booking." },
          { t: "Genuine Parts", d: "We use only company-authorized replacement components." }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center space-y-6">
            <CheckCircle className="text-[#00FFFF]" size={32} />
            <h3 className="font-black uppercase tracking-widest text-xl italic">{item.t}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-[280px]">{item.d}</p>
          </div>
        ))}
      </section>

      {/* --- FORM SECTION --- */}
      <section className="w-full max-w-5xl py-40 px-6">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-8xl font-black italic uppercase font-[family-name:var(--font-orbitron)]">Service <span className="text-[#00FFFF]">Portal</span></h2>
        </div>
        <div className="bg-[#161b22] p-10 md:p-24 rounded-[3rem] shadow-[0_60px_100px_rgba(0,0,0,0.6)]">
          <RequestForm />
        </div>
      </section>

      <div className="h-[200px]" />
      <Footer />
    </main>
  );
}
