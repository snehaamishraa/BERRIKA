
"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  suffix?: string;
}

export default function CountUp({
  end,
  suffix = "",
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let start = 0;
        const duration = 1800;
        const stepTime = 16;
        const increment = end / (duration / stepTime);

        const timer = setInterval(() => {
          start += increment;

          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, stepTime);

        observer.unobserve(element);

        return () => clearInterval(timer);
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  );
}
