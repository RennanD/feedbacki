import Image from "next/image";

import codeImage from "@/assets/svg/code.svg";
import usersImage from "@/assets/svg/users.svg";
import languagesImage from "@/assets/svg/language.svg";

import { Card } from "@/components/ui/card";

export function BenefitsCard() {
  return (
    <section className="w-full py-20">
      <div className="mx-auto flex w-full max-w-[78.5rem] flex-col gap-10 px-5">
        <div className="flex w-full justify-center">
          <h2 className="max-w-lg text-center text-xl font-medium lg:text-4xl">
            Why our Widget is the best option for your project?
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card className="flex flex-col gap-6 p-6 transition-transform hover:scale-105">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <Image alt="" height={36} src={codeImage} />
            </div>

            <div className="space-y-2">
              <strong className="text-lg">Easy integration</strong>
              <p className="text-muted-foreground">
                Our feedback has a very simple integration to run ReactJs
                applications
              </p>
            </div>
          </Card>

          <Card className="flex flex-col gap-6 p-6 transition-transform hover:scale-105">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
              <Image alt="" height={36} src={usersImage} />
            </div>

            <div className="space-y-2">
              <strong className="text-lg">{`Workspace's`} team</strong>
              <p className="text-muted-foreground">
                Invite members to your workspace and manage projects in a shared
                way.
              </p>
            </div>
          </Card>

          <Card className="flex flex-col gap-6 p-6 transition-transform hover:scale-105">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
              <Image alt="" height={36} src={languagesImage} />
            </div>

            <div className="space-y-2">
              <strong className="text-lg">Multi Languages</strong>
              <p className="text-muted-foreground">
                We have more than 5 languages ​​to give your user the best
                experience
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
