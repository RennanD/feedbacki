"use client";

import { MessageCircle } from "lucide-react";
import { FeedbackiWidget } from "react-feedbacki";

export function FeedbackWidget() {
  return (
    <FeedbackiWidget
      projectId="99f35c27-602d-4423-beed-87c571255718"
      side="top"
    >
      <button className="fixed bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
        <MessageCircle className="h-5 w-5 text-white" />
      </button>
    </FeedbackiWidget>
  );
}
