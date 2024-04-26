import { Logo } from "../Logo";
import { ScrollToTopButton } from "./ScrollToTopButton";

export function Footer() {
  return (
    <footer className="w-full py-10">
      <div className="mx-auto flex w-full max-w-[78.5rem] items-center justify-between px-5">
        <Logo />

        <p className="text-xs lg:text-sm">
          Delevoped by{" "}
          <a
            className="text-primary hover:underline"
            href="https://github.com/rennand"
          >
            Rennan Oliveira 💜
          </a>
        </p>

        <ScrollToTopButton />
      </div>
    </footer>
  );
}
