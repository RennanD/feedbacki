"use client";

import { MessageCircle } from "lucide-react";
import { FeedbackiWidget } from "react-feedbacki";

export function FeedbackWidget() {
  return (
    <FeedbackiWidget
      projectId="52247a83-eb4c-4bc2-af10-8467c836e861"
      side="top"
    >
      <button className="fixed bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
        <MessageCircle className="h-5 w-5 text-white" />
      </button>
    </FeedbackiWidget>
  );
}
