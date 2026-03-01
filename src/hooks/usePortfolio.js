import { useState, useEffect, useRef } from "react";

export function useIntersection(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [options]);

  return [ref, visible];
}

export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

export function useScrollTo(setActiveNav) {
  return (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveNav(id);
  };
}
