"use client";

import { useEffect } from "react";
import { useRef } from "react";

const GHOST_SCRIPT_ID = "ghost-signup-form-script";

export default function GhostSignupEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || document.getElementById(GHOST_SCRIPT_ID)) {
      return;
    }

    const script = document.createElement("script");
    script.id = GHOST_SCRIPT_ID;
    script.async = true;
    script.src = "https://cdn.jsdelivr.net/ghost/signup-form@~0.3/umd/signup-form.min.js";

    script.setAttribute("data-background-color", "#fafafa");
    script.setAttribute("data-text-color", "#111111");
    script.setAttribute("data-button-color", "#111111");
    script.setAttribute("data-button-text-color", "#ffffff");
    script.setAttribute("data-title", "The Pod Luck Club｜播客推荐 Newsletter");
    script.setAttribute(
      "data-description",
      "The Pod Luck Club 是一个以播客推荐为核心的个人 newsletter。 每个工作日分享精选播客，双周更新 3000 字长文，记录数字游民的环球生活、工作与长期思考。",
    );
    script.setAttribute(
      "data-icon",
      "https://thepodluckclub.com/content/images/size/w192h192/size/w256h256/2024/04/thepodluckclub.png",
    );
    script.setAttribute("data-site", "https://thepodluckclub.com/");
    script.setAttribute("data-locale", "zh");

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-xl border border-neutral-200 bg-[rgba(250,250,250,0.9)]"
      style={{ height: "40vmin", minHeight: "360px" }}
      aria-label="Ghost signup form"
    />
  );
}
