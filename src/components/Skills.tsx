"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import { skills } from "@/data/portfolio";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.7,
        ease: "power3.out",
        stagger: { each: 0.08, from: "start" },
        scrollTrigger: { trigger: ".skills-grid", start: "top 80%" },
      });

      gsap.utils.toArray<HTMLElement>(".skill-bar-fill").forEach((el) => {
        const target = parseFloat(el.dataset.level || "0");
        gsap.fromTo(
          el,
          { width: "0%" },
          {
            width: `${target}%`,
            duration: 1.4,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".skill-percent").forEach((el) => {
        const target = parseFloat(el.dataset.level || "0");
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
          onUpdate: () => {
            el.textContent = `${Math.round(obj.val)}%`;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="relative pt-10 pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="My toolkit"
          title="Skills & Expertise"
          description="A blend of front-end craft, back-end fundamentals, and integration know-how that turns ideas into production-ready products."
        />

        <div className="skills-grid grid md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card glass rounded-xl p-5 card-hover">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-sm text-text-primary">{skill.name}</h4>
                <span
                  className="skill-percent text-accent font-semibold text-sm tabular-nums"
                  data-level={skill.level}
                >
                  0%
                </span>
              </div>
              <div className="h-2.5 rounded-full bg-bg-elevated overflow-hidden">
                <div
                  className="skill-bar skill-bar-fill h-full rounded-full bg-accent-gradient"
                  data-level={skill.level}
                  style={{ width: 0 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
