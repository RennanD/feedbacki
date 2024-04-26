"use client";

import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";

export function ScrollToTopButton() {
  function handleScrollToTop() {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <Button onClick={handleScrollToTop} size="icon" variant="secondary">
      <ChevronUp className="h-5 w-5" />
    </Button>
  );
}
