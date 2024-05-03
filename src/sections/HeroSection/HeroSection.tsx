import Image from "next/image";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

import heroImage from "@/assets/svg/hero-image.svg";

export function HeroSection() {
  return (
    <section className="w-full pt-32">
      <div className="mx-auto flex w-full max-w-[78.5rem] flex-col items-center gap-10 px-5 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <h1 className="max-w-lg text-center text-2xl lg:text-start lg:text-5xl">
            Collect feedback in a simplified way
          </h1>
          <p className="max-w-lg text-center text-muted-foreground lg:text-start lg:text-lg">
            Gain powerful insights with our personalized feedback. Drive your
            success with actionable, customer-driven data client.
          </p>
          <div className="flex flex-col gap-4 lg:flex-row">
            <Button asChild className="w-full lg:w-fit">
              <a href="#pricing">Try For Free</a>
            </Button>
            <Button
              asChild
              className="flex items-center gap-1"
              variant="outline"
            >
              <a href="#about">
                <MessageCircle className="h-5 w-5" />
                About Widget
              </a>
            </Button>
          </div>
        </div>

        <div>
          <Image alt="" height={500} loading="eager" src={heroImage} />
        </div>
      </div>
    </section>
  );
}
