"use client";

import { Smile, X } from "lucide-react";
import { useState } from "react";
import { FeedbackiWidget } from "react-feedbacki";

export function FeedbackWidget() {
  const [hideFeedackWidget, setHideFeedbackWidget] = useState(false);

  if (hideFeedackWidget) return null;

  return (
    <div className="fixed right-0 top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-2">
      <button onClick={() => setHideFeedbackWidget(true)}>
        <X className="h-4 w-4 text-gray-400 lg:h-6 lg:w-6" />
      </button>

      <FeedbackiWidget
        className="mr-4"
        projectId="99f35c27-602d-4423-beed-87c571255718"
        side="bottom"
      >
        <button className="flex flex-col items-center justify-center gap-2 rounded-l-[10px] bg-primary px-2 py-4">
          <p
            className="-rotate-180 text-xs font-medium text-white lg:text-sm"
            style={{ writingMode: "vertical-rl" }}
          >
            Feedback
          </p>
          <Smile className="h-3.5 w-3.5 text-white lg:h-6 lg:w-6" />
        </button>
      </FeedbackiWidget>
    </div>
  );
}
