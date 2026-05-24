"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { projects, filters } from "@/data/portfolio";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type Filter = (typeof filters)[number];

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-filter", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: { trigger: ".projects-filters", start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 50, rotateX: -8, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          overwrite: "auto",
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, [filtered]);

  const handleTilt = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(el, {
      rotateY: x * 10,
      rotateX: -y * 10,
      transformPerspective: 800,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const resetTilt = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <section ref={sectionRef} id="projects" className="relative max-sm:pt-5 py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="My recent work"
          title="Featured Projects"
          description="A selection of 16+ projects spanning corporate websites, conversion-focused landing pages, and full web applications."
        />

        <div className="projects-filters flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`projects-filter relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === f
                  ? "text-bg-primary"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {active === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-accent-gradient shadow-glow"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {active !== f && (
                <span className="absolute inset-0 -z-10 rounded-full glass" />
              )}
              {f}
            </button>
          ))}
        </div>

        <motion.div ref={gridRef} layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                layout
                exit={{ opacity: 0, scale: 0.95 }}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                className="project-card group glass rounded-2xl overflow-hidden border border-border/60 hover:border-accent/40 transition-colors will-change-transform"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-bg-elevated">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-accent-gradient flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    <ArrowUpRight size={18} className="text-bg-primary" />
                  </div>
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-medium bg-bg-primary/70 backdrop-blur border border-accent/20 text-accent">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  {p.description && (
                    <p className="text-sm text-text-secondary mt-2 leading-relaxed line-clamp-2">
                      {p.description}
                    </p>
                  )}
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-text-muted group-hover:text-accent transition-colors">
                    <ExternalLink size={12} />
                    <span className="truncate">Visit live site</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
