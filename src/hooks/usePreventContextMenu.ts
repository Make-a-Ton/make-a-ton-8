import { useEffect } from "react";

export function usePreventContextMenu(classNames: string[]) {
  useEffect(() => {
    const handleEvent = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        classNames.some((className) => target.classList.contains(className))
      ) {
        e.preventDefault();
        return false;
      }
    };

    const events = [
      "contextmenu",
      "dragstart",
      "touchstart",
      "touchend",
      "touchmove",
    ];

    events.forEach((event) => {
      // Passive false is needed for touch events to prevent default behavior
      document.addEventListener(event, handleEvent, { passive: false });
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handleEvent);
      });
    };
  }, [classNames]);
}
