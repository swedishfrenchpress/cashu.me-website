"use client";

import { useEffect } from "react";

export function TabFlutter() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const original = document.title;
    const away = "← cashu.me.";

    const handleVisibility = () => {
      document.title = document.visibilityState === "hidden" ? away : original;
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      document.title = original;
    };
  }, []);

  return null;
}
