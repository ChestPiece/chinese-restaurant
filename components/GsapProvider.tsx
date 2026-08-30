"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(ScrollTrigger, InertiaPlugin);
gsap.defaults({ ease: "power3.out", duration: 0.85 });

// Lenis type for optional import
type LenisInstance = {
  on: (event: string, callback: (args: unknown) => void) => void;
  raf: (time: number) => void;
  scrollTo: (target: HTMLElement | string, options?: { offset?: number }) => void;
  destroy: () => void;
};

export default function GsapProvider({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.classList.add("has-motion");

    let destroyed = false;
    let lenisCleanup: (() => void) | null = null;

    const initLenis = async (): Promise<LenisInstance | null> => {
      try {
        const lenisModule = await import("lenis");
        const LenisConstructor = lenisModule.default;
        try { await import("lenis/dist/lenis.css"); } catch { /* optional */ }
        if (destroyed) return null;
        const instance = new LenisConstructor({
          lerp: 0.08,
          smoothWheel: true,
          wheelMultiplier: 0.9,
          anchors: true,
        }) as LenisInstance;
        return instance;
      } catch {
        return null;
      }
    };

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set("[data-motion-text], [data-reveal], [data-reveal-item], [data-image-reveal]", {
          visibility: "visible",
          clearProps: "all",
        });
        return;
      }

      initLenis().then((lenis) => {
        if (destroyed) return;

        if (lenis) {
          lenis.on("scroll", ScrollTrigger.update);
          const rafCallback = (time: number) => { lenis.raf(time * 1000); };
          gsap.ticker.add(rafCallback);
          gsap.ticker.lagSmoothing(0);
          lenisCleanup = () => {
            gsap.ticker.remove(rafCallback);
            lenis.destroy();
          };
        }

        initTextReveals();
        initScrollReveals();
        initImageReveals();
        initParallax();
        initMagnetic();
        initHeroEffects();
        initNavHideShow();

        ScrollTrigger.refresh();
      });
    }, containerRef);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      destroyed = true;
      ctx.revert();
      window.removeEventListener("load", onLoad);
      if (lenisCleanup) lenisCleanup();
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}

/* ── Hero effects ──────────────────────────────────── */
function initHeroEffects() {
  const heroImg = document.querySelector("#hero-img");
  if (heroImg) {
    gsap.to(heroImg, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      },
    });
  }

  const heroContent = document.querySelector("#hero-content");
  if (heroContent) {
    gsap.to(heroContent, {
      y: -60,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "30% top",
        end: "80% top",
        scrub: true,
      },
    });
  }
}

/* ── Nav hide on scroll down ───────────────────────── */
function initNavHideShow() {
  const nav = document.querySelector("nav") as HTMLElement | null;
  if (!nav) return;

  let lastScroll = 0;
  let navHidden = false;

  ScrollTrigger.create({
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
      const currentScroll = self.scroll();
      const direction = currentScroll - lastScroll;

      if (currentScroll < 100) {
        if (navHidden) {
          gsap.to(nav, { y: 0, duration: 0.35, ease: "power3.out" });
          navHidden = false;
        }
        return;
      }

      if (direction > 8 && !navHidden) {
        gsap.to(nav, { y: "-100%", duration: 0.35, ease: "power3.inOut" });
        navHidden = true;
      } else if (direction < -8 && navHidden) {
        gsap.to(nav, { y: 0, duration: 0.35, ease: "power3.out" });
        navHidden = false;
      }

      lastScroll = currentScroll;
    },
  });
}

/* ──────────────────────────────────────────────────────
   Motion system helpers
   ────────────────────────────────────────────────────── */

function splitWords(element: HTMLElement) {
  if (element.dataset.motionSplit === "true") return;
  const text = element.textContent || "";
  const parts = text.split(/(\s+)/);
  element.textContent = "";
  element.setAttribute("aria-label", text.trim());

  let index = 0;
  parts.forEach((part) => {
    if (!part.trim()) {
      element.appendChild(document.createTextNode(part));
      return;
    }
    const mask = document.createElement("span");
    const word = document.createElement("span");
    mask.className = "motion-word-mask";
    mask.setAttribute("aria-hidden", "true");
    word.className = "motion-word";
    word.textContent = part;
    word.style.setProperty("--word-index", String(index));
    mask.appendChild(word);
    element.appendChild(mask);
    index += 1;
  });
  element.dataset.motionSplit = "true";
}

function splitLines(element: HTMLElement) {
  if (element.dataset.motionLineSplit === "true") return;
  if (element.querySelector(".motion-line")) return;
  const text = (element.textContent || "").trim();
  const lines = text.split(/\n+/).map((l) => l.trim()).filter(Boolean);
  if (lines.length < 2) return;

  element.textContent = "";
  element.setAttribute("aria-label", text);

  lines.forEach((line) => {
    const mask = document.createElement("span");
    const inner = document.createElement("span");
    mask.className = "motion-line-mask";
    mask.setAttribute("aria-hidden", "true");
    inner.className = "motion-line";
    inner.textContent = line;
    mask.appendChild(inner);
    element.appendChild(mask);
    element.appendChild(document.createTextNode(" "));
  });
  element.dataset.motionLineSplit = "true";
}

function initTextReveals() {
  gsap.utils.toArray<HTMLElement>("[data-motion-text='words']").forEach((el) => {
    splitWords(el);
    const words = el.querySelectorAll(".motion-word");
    gsap.set(el, { visibility: "visible" });
    gsap.fromTo(
      words,
      { yPercent: 110, autoAlpha: 0, filter: "blur(8px)" },
      {
        yPercent: 0,
        autoAlpha: 1,
        filter: "blur(0px)",
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.055,
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
      }
    );
  });

  gsap.utils.toArray<HTMLElement>("[data-motion-text='lines']").forEach((el) => {
    splitLines(el);
    const lines = el.querySelectorAll(".motion-line");
    const targets = lines.length ? lines : el.children;
    gsap.set(el, { visibility: "visible" });
    gsap.fromTo(
      targets,
      { yPercent: 100, autoAlpha: 0, filter: "blur(8px)" },
      {
        yPercent: 0,
        autoAlpha: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power4.out",
        stagger: 0.11,
        scrollTrigger: { trigger: el, start: "top 84%", once: true },
      }
    );
  });
}

const revealPresets: Record<string, { from: gsap.TweenVars; to: gsap.TweenVars }> = {
  "fade-up": { from: { y: 32, autoAlpha: 0 }, to: { y: 0, autoAlpha: 1 } },
  "blur-in": { from: { y: 18, autoAlpha: 0, filter: "blur(10px)" }, to: { y: 0, autoAlpha: 1, filter: "blur(0px)" } },
  "scale": { from: { scale: 0.96, autoAlpha: 0 }, to: { scale: 1, autoAlpha: 1 } },
  "slide-left": { from: { x: 48, autoAlpha: 0 }, to: { x: 0, autoAlpha: 1 } },
  "slide-right": { from: { x: -48, autoAlpha: 0 }, to: { x: 0, autoAlpha: 1 } },
};

function initScrollReveals() {
  gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
    const items = group.querySelectorAll("[data-reveal-item]");
    gsap.set(group, { visibility: "visible" });
    gsap.fromTo(
      items,
      { y: 36, autoAlpha: 0, filter: "blur(8px)" },
      {
        y: 0,
        autoAlpha: 1,
        filter: "blur(0px)",
        duration: 0.95,
        ease: "power4.out",
        stagger: 0.075,
        scrollTrigger: { trigger: group, start: "top 82%", once: true },
      }
    );
  });

  gsap.utils.toArray<HTMLElement>("[data-reveal]:not([data-reveal-item])").forEach((el) => {
    const preset = revealPresets[el.dataset.reveal || ""] || revealPresets["fade-up"];
    gsap.set(el, { visibility: "visible" });
    gsap.fromTo(el, preset.from, {
      ...preset.to,
      duration: 0.9,
      ease: "power4.out",
      delay: Number(el.dataset.revealDelay || 0),
      scrollTrigger: { trigger: el, start: "top 84%", once: true },
    });
  });
}

function initImageReveals() {
  gsap.utils.toArray<HTMLElement>("[data-image-reveal]").forEach((figure) => {
    const image = figure.querySelector("img");
    gsap.set(figure, { visibility: "visible" });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: figure, start: "top 82%", once: true },
    });

    tl.fromTo(
      figure,
      { clipPath: "inset(0 0 100% 0)" },
      { clipPath: "inset(0 0 0% 0)", duration: 1.1, ease: "power4.out" }
    ).fromTo(
      image,
      { scale: 1.08, autoAlpha: 0.75 },
      { scale: 1, autoAlpha: 1, duration: 1.2, ease: "power4.out" },
      0
    );
  });
}

function initParallax() {
  gsap.utils.toArray<HTMLElement>("[data-parallax-image], [data-parallax-layer]").forEach((layer) => {
    const speed = Number(layer.dataset.parallaxSpeed || 0.18);
    const section = layer.closest("[data-parallax-section]") || layer;

    gsap.to(layer, {
      y: () => window.innerHeight * speed * -1,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });
  });
}

function initMagnetic() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((element) => {
    const strength = Number(element.dataset.magnetic || 0.18);
    const xTo = gsap.quickTo(element, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(element, "y", { duration: 0.4, ease: "power3.out" });

    // Hover scale
    element.addEventListener("pointerenter", () => {
      gsap.to(element, { scale: 1.04, duration: 0.35, ease: "power2.out" });
    });

    element.addEventListener("pointerleave", () => {
      // Spring back with InertiaPlugin momentum
      gsap.to(element, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
      });
    });

    element.addEventListener("pointermove", (event) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * strength;
      const y = (event.clientY - rect.top - rect.height / 2) * strength;
      xTo(x);
      yTo(y);
    });

    // Press feedback — scale down on hold, spring release
    element.addEventListener("pointerdown", () => {
      gsap.to(element, { scale: 0.95, duration: 0.15, ease: "power2.in" });
    });

    element.addEventListener("pointerup", () => {
      gsap.to(element, { scale: 1.04, duration: 0.4, ease: "elastic.out(1, 0.35)" });
    });
  });
}
