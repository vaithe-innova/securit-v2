"use client";

import { useRef } from "react";

export default function RippleButton({ children, onClick, className = "" }: any) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("clicked");
    const button = btnRef.current;

    if (!button) {
      return;
    }

    const rect = button.getBoundingClientRect();

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;

    circle.className = "ripple";

    const ripple = button.querySelector(".ripple");
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);

    onClick?.();
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
    </button>
  );
}