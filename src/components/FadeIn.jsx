import { useIntersection } from "../hooks/usePortfolio";

export default function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useIntersection();

  return (
    <div
      ref={ref}
      className={`fade-in ${visible ? "fade-in--visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
