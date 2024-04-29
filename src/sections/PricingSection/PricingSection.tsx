import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CheckCircle2 } from "lucide-react";

const FREE_PLAN = [
  "1 personal workspace for free",
  "1 member per workspace (owner only)",
  "1 project per workspace",
  "100 free collected feedbacks per project",
];

const PRO_PLAN = [
  "2 personal workspaces",
  "10 members per workspace",
  "5 projects per workspace",
  "Unlimited collected feedbacks per project",
];

const BUSSINES_PLAN = [
  "2 personal workspaces",
  "100 merbers per workspace",
  "Unlimited projects per workspace",
  "Unlimited collected feedbacks per project",
];

export function PricingSection() {
  return (
    <section className="w-full bg-muted py-20" id="pricing">
      <div className="mx-auto w-full max-w-[78.5rem] space-y-16 px-5">
        <div className="flex w-full flex-col items-center gap-2">
          <h2 className="text-xl font-medium lg:text-4xl">Pricing</h2>
          <p className="lg:text-lg">Choose the option that suits you 🙂</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <CardDescription>For hobby & side projects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-2">
                <strong className="text-5xl">$0</strong>
                <p>Free Forever</p>
              </div>

              <Button
                asChild
                className="w-full bg-foreground hover:bg-foreground/90"
              >
                <a
                  href="https://app.feedbacki.click"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Start for free
                </a>
              </Button>
            </CardContent>

            <CardFooter className="border-t pt-4">
              <ul className="space-y-4">
                {FREE_PLAN.map((item, index) => (
                  <li className="flex items-center gap-2" key={index}>
                    <div className="h-5 w-5">
                      <CheckCircle2 className="h-5 w-5 text-foreground" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardFooter>
          </Card>

          <Card className="relative border-primary">
            <div className="absolute -top-4 left-1/2 flex h-8 -translate-x-1/2 items-center rounded-full bg-primary px-5 text-white">
              <p className="font-bold">Popular</p>
            </div>
            <CardHeader>
              <CardTitle className="text-primary">Pro</CardTitle>
              <CardDescription>For startups & small businesses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-2">
                <strong className="text-5xl">$9</strong>
                <p>Billed monthly</p>
              </div>

              <Button asChild className="w-full">
                <a
                  href="https://app.feedbacki.click/plans/pro"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Get Started with pro
                </a>
              </Button>
            </CardContent>

            <CardFooter className="border-t pt-4">
              <ul className="space-y-4">
                {PRO_PLAN.map((item, index) => (
                  <li className="flex items-center gap-2" key={index}>
                    <div className="h-5 w-5">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-indigo-700">Business</CardTitle>
              <CardDescription>
                For larger teams with increased usage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-2">
                <strong className="text-5xl">$17</strong>
                <p>Billed monthly</p>
              </div>

              <Button
                asChild
                className="w-full bg-indigo-700 hover:bg-indigo-700/90"
              >
                <a
                  href="https://app.feedback.click/plans/businnes"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Get Started with businnes
                </a>
              </Button>
            </CardContent>

            <CardFooter className="border-t pt-4">
              <ul className="space-y-4">
                {BUSSINES_PLAN.map((item, index) => (
                  <li className="flex items-center gap-2" key={index}>
                    <div className="h-5 w-5">
                      <CheckCircle2 className="h-5 w-5 text-indigo-700" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
