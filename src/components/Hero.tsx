"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef } from "react";
import { personal } from "@/data/portfolio";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const avatarWrapRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const downloadBtnRef = useRef<HTMLButtonElement>(null);

  const handleDownloadResume = () => {
    const url = personal.resume;
    const fileName = `${personal.name.replace(/\s+/g, "_")}_Resume.pdf`;

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    window.open(url, "_blank", "noopener,noreferrer");

    if (downloadBtnRef.current) {
      gsap.fromTo(
        downloadBtnRef.current,
        { scale: 1 },
        { scale: 0.94, duration: 0.12, yoyo: true, repeat: 1, ease: "power2.inOut" }
      );
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (avatarWrapRef.current) {
        gsap.to(avatarWrapRef.current, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }

      const titleSpans = titleRef.current?.querySelectorAll(".hero-title-word");
      if (titleSpans && titleSpans.length) {
        gsap.from(titleSpans, {
          y: 40,
          opacity: 0,
          rotateX: -60,
          duration: 1,
          ease: "back.out(1.6)",
          stagger: 0.08,
          delay: 0.3,
          transformOrigin: "50% 100%",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 order-2 lg:order-1"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-accent mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new opportunities
          </motion.div>

          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight"
            style={{ perspective: 600 }}
          >
            <span className="hero-title-word inline-block">Hi,&nbsp;</span>
            <span className="hero-title-word inline-block">I&nbsp;</span>
            <span className="hero-title-word inline-block">am&nbsp;</span>
            <span className="hero-title-word inline-block gradient-text">{personal.firstName}</span>
            <br />
            <span className="hero-title-word inline-block text-text-primary">A&nbsp;</span>
            <span className="hero-title-word inline-block gradient-text">{personal.title}</span>
          </h1>

          <motion.p
            variants={item}
            className="mt-6 text-text-secondary text-base sm:text-lg max-w-xl leading-relaxed"
          >
            {personal.tagline} I build modern, responsive, and high-performance web
            applications with React, Next.js, and the modern JavaScript stack.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent-gradient text-bg-primary font-semibold text-sm hover:shadow-glow transition-shadow"
            >
              View My Work <ArrowDown size={16} />
            </a>
            <button
              ref={downloadBtnRef}
              type="button"
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent-gradient text-bg-primary font-semibold text-sm hover:shadow-glow transition-shadow"
            >
              <Download size={16} /> Download Resume
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass text-text-primary font-semibold text-sm hover:border-accent/40 transition-colors"
            >
              <Mail size={16} /> Contact Me
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl"
          >
            <InfoCard icon={<Mail size={16} />} label="Email" value={personal.email} href={`mailto:${personal.email}`} />
            <InfoCard icon={<Phone size={16} />} label="Phone" value={personal.phone} href={`tel:${personal.phone}`} />
            <InfoCard icon={<MapPin size={16} />} label="Location" value="Thane, India" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
        >
          <div className="relative" ref={avatarWrapRef}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full bg-gradient-to-tr from-accent/40 via-transparent to-accent/20 blur-2xl"
            />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2rem] glass p-2 shadow-card overflow-hidden"
            >
              <div className="w-full h-full rounded-[1.6rem] overflow-hidden bg-gradient-to-br from-accent/15 to-transparent flex items-center justify-center">
                <Image
                  src={personal.avatar}
                  alt={personal.name}
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </motion.div>

            <FloatingBadge className="-top-4 -left-6" delay={0}>
              <span className="text-accent font-bold">1+</span>
              <span className="text-xs text-text-secondary">Years</span>
            </FloatingBadge>
            <FloatingBadge className="-bottom-4 -right-4" delay={1.2}>
              <span className="text-accent font-bold">30+</span>
              <span className="text-xs text-text-secondary">Projects</span>
            </FloatingBadge>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent transition-colors hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </a>
    </section>
  );
}

function InfoCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="glass rounded-xl p-3 card-hover">
      <div className="flex items-center gap-2 text-accent">
        {icon}
        <span className="text-[10px] uppercase tracking-wider text-text-muted">{label}</span>
      </div>
      <div className="text-xs font-medium mt-1 text-text-primary truncate">{value}</div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

function FloatingBadge({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute glass rounded-2xl px-4 py-3 flex flex-col items-center shadow-card ${className}`}
    >
      {children}
    </motion.div>
  );
}
