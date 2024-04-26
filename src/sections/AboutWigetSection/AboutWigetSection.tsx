/* eslint-disable @typescript-eslint/no-unused-vars */
import Markdown from "react-markdown";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { FeedbackDemo } from "@/components/FeedbackDemo";
import { SyntaxHighlighter } from "./SyntaxHighlither";
import Link from "next/link";

export function AboutWigetSection() {
  const reactCode = `
  ~~~tsx
  import { FastFeedbackWidget } form 'react-feedbacki'
  ...
  return (
    <FastFeedbackWidget projectId="projectId">
      <button>
        <p>
          Feedback
        </p>
      </button>
    </FastFeedbackWidget>
  );
  ~~~
  `;

  const MarkdownComponents: object = {
    code({ _, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter language={match[1]} style={oneDark} {...props}>
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <section className="bg-muted py-20" id="about">
      <div className="mx-auto flex w-full max-w-[78.5rem] flex-col gap-10 px-5 lg:flex-row">
        <div className="flex-1 space-y-10">
          <div className="space-y-4">
            <h2 className="text-xl font-medium lg:text-4xl">Meet the widget</h2>
            <p className="max-w-lg lg:text-lg">
              Exprore our Feedback Widget - Empowering you to gather valuable
              insights and shape meaningful experiences with your audience!
              <br />
              <span className="block text-sm text-muted-foreground lg:text-base">
                ⚠️ For now the widget is only available for ReactJs applications
              </span>
            </p>
          </div>

          <div className="space-y-2">
            <strong className="text-xl">Easy to integrate</strong>
            <p className="text-base">
              Integrate our feedback simply into your ReactJs applications.{" "}
              <Link
                className="text-primary transition-all hover:underline"
                href="/docs"
              >
                See full documentation.
              </Link>
            </p>

            <Markdown components={MarkdownComponents}>{reactCode}</Markdown>
          </div>
        </div>

        <div className="flex max-w-lg flex-1 justify-center">
          <FeedbackDemo />
        </div>
      </div>
    </section>
  );
}
