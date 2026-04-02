import type { MouseEvent } from "react";

export function useGlowEffect(selector: string) {
  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const glowElement = e.currentTarget.querySelector(selector) as HTMLElement;
    if (glowElement) {
      glowElement.style.setProperty("--mouse-x", `${x}px`);
      glowElement.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  const onMouseLeave = (e: MouseEvent<HTMLElement>) => {
    const glowElement = e.currentTarget.querySelector(selector) as HTMLElement;
    if (glowElement) {
      glowElement.style.setProperty("--mouse-x", `-200px`);
      glowElement.style.setProperty("--mouse-y", `-200px`);
    }
  };

  return { onMouseMove, onMouseLeave };
}
