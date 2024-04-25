"use client";

import { tw } from "@/utils/tw";
import { Logo } from "../Logo";
import { Button } from "../ui/button";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export function Header() {
  const { scrollY } = useScrollPosition();

  return (
    <header
      className={tw("w-full py-5 fixed", {
        "bg-gray-950/5 backdrop-blur-md": scrollY > 0,
      })}
    >
      <div className="mx-auto flex w-full max-w-[78.5rem] items-center justify-between px-5">
        <Logo />

        <Button asChild className="" size="sm">
          <a
            href="https://app.feedbacki.click"
            rel="noopener noreferrer"
            target="_blank"
          >
            Sign In
          </a>
        </Button>
      </div>
    </header>
  );
}
