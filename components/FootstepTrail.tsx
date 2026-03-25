"use client";
import { useEffect, useRef } from "react";

type TrailItem = {
  element: HTMLImageElement;
  removeTime: number;
};

const FootstepTrail = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trail = useRef<TrailItem[]>([]);

  const config = {
    lifespan: 600,
    removalDelay: 50,
    mouseThreshold: 80, //  
    shrinkDelay: 300, // ms after spawn to start shrinking
    shrinkScale: 0.5, // scale to shrink down to before fade
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let mouseX = 0,
      mouseY = 0,
      lastMouseX = 0,
      lastMouseY = 0;

    let lastRemovalTime = 0;
    let stepToggle = false;

    const footImages = ["/foot-left.svg", "/foot-right.svg"];

    const hasMovedEnough = () => {
      const dx = mouseX - lastMouseX;
      const dy = mouseY - lastMouseY;
      return Math.sqrt(dx * dx + dy * dy) > config.mouseThreshold;
    };

    const createFootstep = () => {
      if (!container) return;

      // Compute direction angle from last position to current
      const dx = mouseX - lastMouseX;
      const dy = mouseY - lastMouseY;
      // atan2 gives angle in radians; SVG foot points "up" (negative Y),
      // so we add 90° to align the foot tip with the movement direction
      const angleRad = Math.atan2(dy, dx);
      const angleDeg = (angleRad * 180) / Math.PI + 90;

      const img = document.createElement("img");
      img.src = stepToggle ? footImages[0] : footImages[1];
      stepToggle = !stepToggle;

      img.className =
        "absolute w-9 h-9 opacity-80 pointer-events-none will-change-transform";

      const rect = container.getBoundingClientRect();
      const x = mouseX - rect.left;
      const y = mouseY - rect.top;

      img.style.position = "absolute";
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;

      // Start scaled to 0, already rotated
      img.style.transform = `translate(-50%, -50%) rotate(${angleDeg}deg) scale(0)`;
      img.style.transition =
        "transform 120ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 120ms ease-out";

      container.appendChild(img);

      // Animate in — pop to full size with a slight spring overshoot
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          img.style.transform = `translate(-45%, -45%) rotate(${angleDeg}deg) scale(1)`;
        });
      });

      // Shrink mid-life for the "fading footprint" feel
      const shrinkTimer = setTimeout(() => {
        img.style.transition = `transform ${config.lifespan - config.shrinkDelay}ms ease-in-out, opacity ${config.lifespan - config.shrinkDelay}ms ease-in`;
        img.style.transform = `translate(-50%, -50%) rotate(${angleDeg}deg) scale(${config.shrinkScale})`;
      }, config.shrinkDelay);

      trail.current.push({
        element: img,
        removeTime: Date.now() + config.lifespan,
        shrinkTimer,
      } as TrailItem & { shrinkTimer: ReturnType<typeof setTimeout> });
    };

    const removeOld = () => {
      const now = Date.now();
      if (now - lastRemovalTime < config.removalDelay) return;
      if (trail.current.length === 0) return;

      const oldest = trail.current[0];
      if (now > oldest.removeTime) {
        const item = trail.current.shift() as TrailItem & {
          shrinkTimer?: ReturnType<typeof setTimeout>;
        };
        if (!item) return;

        clearTimeout(item.shrinkTimer);

        // Smooth fade + collapse out
        item.element.style.transition =
          "transform 300ms ease-in-out, opacity 100ms ease-in";
        item.element.style.opacity = "0";
        item.element.style.transform = `${item.element.style.transform.replace(/scale\([^)]*\)/, "")} scale(0.2)`;

        setTimeout(() => {
          item.element.remove();
        }, 300);

        lastRemovalTime = now;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (hasMovedEnough()) {
        createFootstep();
        lastMouseX = mouseX;
        lastMouseY = mouseY;
      }
    };

    const loop = () => {
      removeOld();
      requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", handleMouseMove);
    loop();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="trail-container"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  );
};

export default FootstepTrail;
