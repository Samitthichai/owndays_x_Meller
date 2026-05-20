"use client";

import { useEffect } from "react";

export default function BfcacheReset() {
  useEffect(() => {
    function handlePageShow(event: PageTransitionEvent) {
      if (event.persisted) {
        document.body.style.pointerEvents = "";
        document.body.style.removeProperty("pointer-events");
      }
    }
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  return null;
}
