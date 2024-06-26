/* eslint-disable tailwindcss/no-custom-classname */
export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        className="lucide lucide-message-square-heart h-6 w-6 text-primary"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8" />
      </svg>

      <strong className="hidden text-lg font-medium text-foreground lg:block">
        Feedbacki
      </strong>
    </div>
  );
}
