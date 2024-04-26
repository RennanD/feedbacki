"use client";

import { tw } from "@/utils/tw";
import { CameraIcon, CheckCircle, TrashIcon } from "lucide-react";
import { useState } from "react";

import screenshotImage from "@/assets/images/screenshot.png";
import Image from "next/image";

const TYPES = [
  {
    label: "Idea",
    value: "idea",
  },
  {
    label: "Bug",
    value: "bug",
  },
  {
    label: "Other",
    value: "other",
  },
];

export function FeedbackDemo() {
  const [feedbackTypeSelected, setFeedbackTypeSelected] = useState<
    string | undefined
  >(undefined);
  const [feedback, setFeedback] = useState("");

  const [isTypeError, setIsTypeError] = useState(false);
  const [isFeedbackError, setIsFeedbackError] = useState(false);
  const [isSubmitting, setIsSubmiting] = useState(false);
  const [hasScreenshot, setHasScreenshot] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSendFeedback() {
    setIsTypeError(false);
    setIsFeedbackError(false);

    if (!feedback || !feedbackTypeSelected) {
      if (!feedback) {
        setIsFeedbackError(true);
      }

      if (!feedbackTypeSelected) {
        setIsTypeError(true);
      }

      return;
    }

    setIsSubmiting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setFeedbackTypeSelected("");
    setFeedback("");

    setSubmitted(true);
    setIsSubmiting(false);
    setHasScreenshot(false);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  }

  return (
    <div className="flex h-fit w-full max-w-xs flex-col gap-4 rounded-[5px] bg-card p-5 shadow-sm will-change-[transform,opacity]">
      <h3 className="text-xl font-bold text-foreground">
        {`What's`} on your mind?
      </h3>
      <p className="text-sm text-muted-foreground">
        Describe your feedback so we can help in the best way possible! 🙂
      </p>

      <div className="space-y-px">
        <ul className="flex flex-wrap items-center gap-2">
          {TYPES.map((type) => (
            <li key={type.value}>
              <button
                className={tw(
                  "px-3 py-1 rounded border border-border text-foreground text-sm",
                  { "border-primary ": feedbackTypeSelected === type.value }
                )}
                onClick={() => setFeedbackTypeSelected(type.value)}
                type="button"
              >
                {type.label}
              </button>
            </li>
          ))}
        </ul>
        {isTypeError && (
          <span className="text-xs text-red-400">Select a feedback type</span>
        )}
      </div>

      <div className="space-y-px">
        <textarea
          className="h-20 w-full resize-none rounded border border-gray-300 p-2 text-sm text-foreground outline-0 ring-0 placeholder:text-muted-foreground"
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Type your Feedback..."
          value={feedback}
        ></textarea>
        {isFeedbackError && (
          <span className="text-xs text-red-400">Describe your feedback</span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <button
          className="flex h-8 w-full items-center justify-center rounded bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          onClick={handleSendFeedback}
          type="button"
        >
          {isSubmitting ? "Sending..." : "Send feedback"}
        </button>

        <>
          {!hasScreenshot ? (
            <button
              className="flex h-8 w-10 items-center justify-center rounded border border-border text-sm transition-colors hover:border-primary"
              onClick={() => setHasScreenshot(true)}
              type="button"
            >
              <CameraIcon className="h-4 w-4" />
            </button>
          ) : (
            <button
              className="group relative h-8 w-10 overflow-hidden rounded"
              onClick={() => setHasScreenshot(false)}
              type="button"
            >
              <div className="absolute inset-0 hidden items-center justify-center bg-red-50 transition-all group-hover:flex">
                <TrashIcon className="h-4 w-4" />
              </div>
              <Image alt="" className="h-full w-full" src={screenshotImage} />
            </button>
          )}
        </>
      </div>
      {submitted && (
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-emerald-500" />
          <span className="text-xs text-emerald-500">
            Feedback sent successfully
          </span>
        </div>
      )}
    </div>
  );
}
