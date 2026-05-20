"use client";

import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Pill } from "./Pill";

type Theme = "dark" | "light";

const NAV_HEIGHT = 64;

export function Nav() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "[data-section][data-theme]",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const t = entry.target.getAttribute("data-theme");
            if (t === "dark" || t === "light") setTheme(t);
          }
        }
      },
      {
        rootMargin: `-${NAV_HEIGHT}px 0px -100% 0px`,
        threshold: 0,
      },
    );

    sections.forEach((s) => observer.observe(s));

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header
      data-theme={theme}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
      style={{ height: NAV_HEIGHT }}
    >
      <Container className="h-full flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 text-foreground font-medium tracking-tight"
        >
          <Logo />
          <span>cashu.me</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/70">
          <a href="#pillars" className="hover:text-foreground transition-colors">
            Protocol
          </a>
          <a href="#wallet" className="hover:text-foreground transition-colors">
            Wallet
          </a>
          <a href="#mints" className="hover:text-foreground transition-colors">
            Mints
          </a>
          <a href="#faq" className="hover:text-foreground transition-colors">
            FAQ
          </a>
          <a
            href="https://github.com/cashubtc/cashu.me"
            target="_blank"
            rel="noopener"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Pill href="#install" size="sm" variant="cta">
            Open wallet
          </Pill>
        </div>
      </Container>
    </header>
  );
}

function Logo() {
  return (
    <span
      aria-hidden
      className="inline-flex h-6 w-6 items-center justify-center rounded-sm border border-foreground/60 text-foreground font-mono text-[11px] leading-none"
    >
      C
    </span>
  );
}
