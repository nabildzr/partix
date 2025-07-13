import { useEffect } from "react";

const partix = (options = {}) => {
  const {
    selector = "partix-target",
    trigger = "hover", 
    amount = 5,
    colors = ["#f00", "#0f0", "#00f", "#ff0", "#0ff", "#f0f"],
  } = options;

  useEffect(() => {
    const createParticles = (x, y) => {
      for (let i = 0; i < amount; i++) {
        const particle = document.createElement("div");
        particle.className = "partix-particle";
        Object.assign(particle.style, {
          position: "absolute",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: colors[Math.floor(Math.random() * colors.length)],
          left: `${x + Math.random() * 20 - 10}px`,
          top: `${y + Math.random() * 20 - 10}px`,
          pointerEvents: "none",
          opacity: "1",
          transition: "all 1s ease-out",
          zIndex: "9999",
        });

        document.body.appendChild(particle);

        requestAnimationFrame(() => {
          particle.style.transform = `translateY(-20px) scale(0.5)`;
          particle.style.opacity = "0";
        });

        setTimeout(() => particle.remove(), 1000);
      }
    };

    const handler = (e) => {
      if (e.target.classList.contains(selector)) {
        createParticles(e.clientX, e.clientY);
      }
    };

    const eventName = trigger === "click" ? "click" : "mouseover";
    document.addEventListener(eventName, handler);
    return () => document.removeEventListener(eventName, handler);
  }, [selector, trigger, amount, colors]);
};

export default partix;
