"use client";

import { useEffect, useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { education, experience } from "@/data/portfolio";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function Resume() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".timeline-track").forEach((track) => {
        const fill = track.querySelector(".timeline-fill") as HTMLElement | null;
        if (!fill) return;
        gsap.fromTo(
          fill,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: track,
              start: "top 75%",
              end: "bottom 70%",
              scrub: 0.5,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -40, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 85%" },
          }
        );
        const dot = item.querySelector(".timeline-dot");
        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.5,
              ease: "back.out(2)",
              delay: 0.1,
              scrollTrigger: { trigger: item, start: "top 85%" },
            }
          );
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="resume" className="relative py-24 px-4 max-sm:pt-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="My journey"
          title="Experience & Education"
          description="From foundational learning to delivering production-grade products for fast-moving teams."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          <Timeline
            icon={<Briefcase size={20} />}
            title="Experience"
            items={experience.map((e) => ({
              heading: e.title,
              subheading: e.company,
              period: e.period,
              description: e.description,
            }))}
          />
          <Timeline
            icon={<GraduationCap size={20} />}
            title="Education"
            items={education.map((e) => ({
              heading: e.title,
              subheading: e.institute,
              period: e.period,
              description: e.description,
            }))}
          />
        </div>
      </div>
    </section>
  );
}

type TimelineItem = {
  heading: string;
  subheading: string;
  period: string;
  description: string;
};

function Timeline({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: TimelineItem[];
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <ol className="timeline-track relative ml-4 space-y-8">
        <span className="absolute left-0 top-0 w-px h-full bg-border/70" aria-hidden />
        <span
          className="timeline-fill absolute left-0 top-0 w-px bg-accent-gradient shadow-glow"
          aria-hidden
        />
        {items.map((item, i) => (
          <li key={i} className="timeline-item pl-6 relative">
            <span className="timeline-dot absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-accent-gradient ring-4 ring-bg-primary shadow-glow" />
            <div className="glass rounded-2xl p-5 card-hover">
              <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-accent/15 text-accent mb-3">
                {item.period}
              </span>
              <h4 className="text-lg font-semibold text-text-primary">{item.heading}</h4>
              <p className="text-sm text-accent-light mb-3">{item.subheading}</p>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
