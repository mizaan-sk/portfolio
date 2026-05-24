"use client";

import { motion } from "framer-motion";
import { Monitor, Layers, Gauge, Workflow } from "lucide-react";
import { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import { personal, services, techStack } from "@/data/portfolio";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={26} />,
  Layers: <Layers size={26} />,
  Gauge: <Gauge size={26} />,
  Workflow: <Workflow size={26} />,
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-service", {
        y: 60,
        opacity: 0,
        rotateX: -20,
        scale: 0.92,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: ".about-services-grid",
          start: "top 80%",
        },
      });

      gsap.utils.toArray<HTMLElement>(".about-stat-value").forEach((el) => {
        const final = el.dataset.value || "0";
        const numeric = parseFloat(final.replace(/[^0-9.]/g, ""));
        if (isNaN(numeric)) return;
        const suffix = final.replace(/[0-9.]/g, "");
        const obj = { val: 0 };
        gsap.to(obj, {
          val: numeric,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            const decimals = (final.match(/\.(\d+)/)?.[1].length) || 0;
            el.textContent = obj.val.toFixed(decimals) + suffix;
          },
        });
      });

      gsap.to(".about-marquee-glow", {
        backgroundPosition: "200% 0",
        ease: "none",
        scrollTrigger: {
          trigger: ".about-marquee-glow",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative pt-24 pb-10 px-4 sm:px-6 max-sm:pt-5">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Get to know me" title="About Me" />

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass rounded-2xl p-8 card-hover"
          >
            <div className="space-y-4 text-text-secondary leading-relaxed">
              {personal.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            <Stat value="1+" label="Years Experience" />
            <Stat value="16+" label="Projects Delivered" />
            <Stat value="9.93" label="B.Sc. IT CGPI" />
            <Stat value="100%" label="Client Focus" />
          </motion.div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6">What I Do</h3>
          <div className="about-services-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <ServiceCard key={s.title} icon={iconMap[s.icon]} title={s.title} description={s.description} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6">Tech I Work With</h3>
          <div className="marquee">
            <div className="marquee__inner">
              {[...techStack, ...techStack].map((t, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap px-5 py-2 rounded-full glass text-sm text-text-secondary border border-border hover:border-accent/40 hover:text-accent transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onEnter = () => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      y: -8,
      duration: 0.35,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const onLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      y: 0,
      duration: 0.45,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  return (
    <div
      ref={ref}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="about-service glass rounded-2xl p-6 card-hover relative overflow-hidden group will-change-transform"
    >
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-accent/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h4 className="font-semibold text-text-primary mb-2">{title}</h4>
        <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass rounded-2xl p-5 text-center card-hover"
    >
      <div
        className="about-stat-value text-3xl font-bold gradient-text tabular-nums"
        data-value={value}
      >
        {value}
      </div>
      <div className="text-xs uppercase tracking-wider text-text-muted mt-2">{label}</div>
    </motion.div>
  );
}
