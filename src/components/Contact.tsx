"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { personal } from "@/data/portfolio";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycby8BXjX-AEvgaMqP5dmFV5vYjFUz8T4nwG6KkqAFcGurv0tIU18FhmqnTVESAhIFyms/exec";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ fullname: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const sendBtnRef = useRef<HTMLButtonElement>(null);
  const sendBtnInnerRef = useRef<HTMLSpanElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const allFilled = Object.values(form).every((v) => v.trim() !== "");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!allFilled) return;
    setStatus("sending");
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ ...form, source: "job-portfolio" }),
        mode: "no-cors",
      });
      setStatus("success");
      setForm({ fullname: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headingChars = sectionRef.current?.querySelectorAll(".contact-char");
      if (headingChars && headingChars.length) {
        gsap.from(headingChars, {
          y: 60,
          opacity: 0,
          rotateX: -90,
          duration: 0.9,
          ease: "back.out(1.7)",
          stagger: 0.03,
          transformOrigin: "50% 100%",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        });
      }

      gsap.from(".contact-card", {
        opacity: 0,
        x: -50,
        rotateY: -15,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
      });

      gsap.from(".contact-social", {
        opacity: 0,
        scale: 0,
        rotation: -180,
        duration: 0.6,
        ease: "back.out(2)",
        stagger: 0.08,
        scrollTrigger: { trigger: ".contact-socials", start: "top 90%" },
      });

      if (formRef.current) {
        gsap.from(formRef.current, {
          opacity: 0,
          x: 60,
          rotateY: 12,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: formRef.current, start: "top 80%" },
        });
      }

      gsap.from(".contact-field", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: { trigger: formRef.current, start: "top 75%" },
      });

      const particles = particlesRef.current?.querySelectorAll<HTMLElement>(".contact-particle");
      particles?.forEach((p) => {
        gsap.to(p, {
          y: () => gsap.utils.random(-80, -180),
          x: () => gsap.utils.random(-40, 40),
          opacity: 0,
          duration: () => gsap.utils.random(4, 8),
          ease: "sine.out",
          repeat: -1,
          delay: () => gsap.utils.random(0, 4),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleFormTilt = (e: React.MouseEvent<HTMLFormElement>) => {
    if (!formRef.current) return;
    const rect = formRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(formRef.current, {
      rotateY: x * 6,
      rotateX: -y * 6,
      transformPerspective: 1200,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const resetFormTilt = () => {
    if (!formRef.current) return;
    gsap.to(formRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.7,
      ease: "power3.out",
    });
  };

  const handleMagnetic = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!sendBtnRef.current || !sendBtnInnerRef.current) return;
    const rect = sendBtnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(sendBtnRef.current, {
      x: x * 0.25,
      y: y * 0.4,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(sendBtnInnerRef.current, {
      x: x * 0.15,
      y: y * 0.25,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const resetMagnetic = () => {
    if (!sendBtnRef.current || !sendBtnInnerRef.current) return;
    gsap.to([sendBtnRef.current, sendBtnInnerRef.current], {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.4)",
    });
  };

  const splitTitle = (text: string) =>
    text.split("").map((ch, i) => (
      <span key={i} className="contact-char inline-block">
        {ch === " " ? " " : ch}
      </span>
    ));

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative max-sm:pt-5 py-24 px-4 sm:px-6 overflow-hidden"
    >
      <div
        ref={particlesRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="contact-particle absolute block w-1.5 h-1.5 rounded-full bg-accent/40"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${60 + ((i * 37) % 40)}%`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3">
            Get in touch
          </span>
          <h2
            className="section-title text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ perspective: 800 }}
          >
            {splitTitle("Let's Build Something Together")}
          </h2>
          <p className="mt-6 text-text-secondary max-w-2xl">
            Have a project in mind, a role to fill, or just want to say hi? Drop me a message and I will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div ref={cardsRef} className="lg:col-span-2 space-y-4 self-start">
            <ContactCard
              icon={<Mail size={20} />}
              label="Email"
              value={personal.email}
              href={`mailto:${personal.email}`}
            />
            <ContactCard
              icon={<Phone size={20} />}
              label="Phone"
              value={personal.phone}
              href={`tel:${personal.phone.replace(/\s/g, "")}`}
            />
            <ContactCard
              icon={<MapPin size={20} />}
              label="Location"
              value={personal.location}
            />

            <div className="contact-card glass rounded-2xl p-5 flex items-center gap-4 card-hover w-full">
              <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0">
                <Github size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-wider text-text-muted mb-2">Follow</p>
                <div className="contact-socials flex gap-2">
                  <SocialBtn href={personal.socials.github} label="GitHub">
                    <Github size={16} />
                  </SocialBtn>
                  <SocialBtn href={personal.socials.linkedin} label="LinkedIn">
                    <Linkedin size={16} />
                  </SocialBtn>
                  <SocialBtn href={personal.socials.email} label="Email">
                    <Mail size={16} />
                  </SocialBtn>
                </div>
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={submit}
            onMouseMove={handleFormTilt}
            onMouseLeave={resetFormTilt}
            className="lg:col-span-3 glass rounded-2xl p-6 sm:p-8 space-y-4 will-change-transform relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-accent/10 via-transparent to-accent/10 opacity-60 blur-xl"
            />
            <div className="grid sm:grid-cols-2 gap-4 relative">
              <Field
                label="Full Name"
                value={form.fullname}
                onChange={update("fullname")}
                placeholder="Your full name"
                required
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@example.com"
                required
                wrapperClassName="pb-6"
              />
            </div>
            <Field
              label="Phone"
              type="tel"
              value={form.phone}
              onChange={update("phone")}
              placeholder="+91 98765 43210"
              required
            />
            <div className="contact-field">
              <label className="block text-xs font-medium text-text-muted mb-2 uppercase tracking-wider">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={update("message")}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/30 text-sm transition resize-none"
              />
            </div>

            <button
              ref={sendBtnRef}
              type="submit"
              disabled={!allFilled || status === "sending"}
              onMouseMove={handleMagnetic}
              onMouseLeave={resetMagnetic}
              className="contact-field relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent-gradient text-bg-primary font-semibold text-sm hover:shadow-glow transition-shadow disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            >
              <span ref={sendBtnInnerRef} className="inline-flex items-center gap-2">
                <Send size={16} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </span>
            </button>

            {status === "success" && (
              <p className="text-sm text-emerald-400">
                Message sent successfully. I will get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  wrapperClassName = "",
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  wrapperClassName?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);

  const onFocus = () => {
    if (underlineRef.current) {
      gsap.fromTo(
        underlineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: "power3.out", transformOrigin: "left center" }
      );
    }
    if (inputRef.current) {
      gsap.to(inputRef.current, {
        boxShadow: "0 0 0 4px rgba(34, 211, 238, 0.18), 0 0 24px rgba(34, 211, 238, 0.18)",
        duration: 0.4,
        ease: "power2.out",
      });
    }
  };

  const onBlur = () => {
    if (underlineRef.current) {
      gsap.to(underlineRef.current, {
        scaleX: 0,
        duration: 0.35,
        ease: "power2.in",
        transformOrigin: "right center",
      });
    }
    if (inputRef.current) {
      gsap.to(inputRef.current, {
        boxShadow: "0 0 0 0 rgba(34, 211, 238, 0)",
        duration: 0.4,
      });
    }
  };

  return (
    <div className={`contact-field relative ${wrapperClassName}`} ref={wrapRef}>
      <label className="block text-xs font-medium text-text-muted mb-2 uppercase tracking-wider">
        {label}
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          onFocus={onFocus}
          onBlur={onBlur}
          {...rest}
          className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border focus:border-accent/60 focus:outline-none text-sm transition"
        />
        <span
          ref={underlineRef}
          aria-hidden
          className="pointer-events-none absolute left-3 right-3 bottom-0 h-0.5 rounded-full bg-accent-gradient origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </div>
  );
}

function ContactCard({
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
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(cardRef.current, {
      rotateY: x * 8,
      rotateX: -y * 8,
      transformPerspective: 800,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const onLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.7,
      ease: "power3.out",
    });
  };

  const inner = (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="contact-card glass rounded-2xl p-5 flex items-center gap-4 card-hover will-change-transform w-full"
    >
      <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-wider text-text-muted">{label}</p>
        <p className="text-sm font-medium text-text-primary truncate">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block w-full">
      {inner}
    </a>
  ) : (
    inner
  );
}

function SocialBtn({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onEnter = () => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      scale: 1.15,
      rotation: 8,
      duration: 0.35,
      ease: "back.out(2)",
    });
  };

  const onLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      scale: 1,
      rotation: 0,
      duration: 0.4,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="contact-social w-10 h-10 rounded-xl bg-bg-elevated border border-border hover:border-accent/60 hover:text-accent flex items-center justify-center transition-colors"
    >
      {children}
    </a>
  );
}
