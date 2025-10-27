import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import Features from "./features";
import { HeroHeader } from "./header";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="-translate-y-87.5 -rotate-45 absolute top-0 left-0 h-320 w-140 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="-rotate-45 absolute top-0 left-0 h-320 w-60 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="-translate-y-87.5 -rotate-45 absolute top-0 left-0 h-320 w-60 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">
            <div
              aria-hidden
              className="-z-10 absolute inset-0 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
            />

            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mt-0 lg:mr-auto">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    className="group mx-auto flex w-fit items-center gap-4 rounded-full border bg-muted p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 hover:bg-background dark:border-t-white/5 dark:shadow-zinc-950 dark:hover:border-t-border"
                    href="#link"
                  >
                    <span className="text-foreground text-sm">
                      Introducing Support for AI Models
                    </span>
                    <span className="block h-4 w-0.5 border-l bg-white dark:border-background dark:bg-zinc-700" />

                    <div className="size-6 overflow-hidden rounded-full bg-background duration-500 group-hover:bg-muted">
                      <div className="-translate-x-1/2 flex w-12 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedGroup>
                <TextEffect
                  as="h1"
                  className="mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                >
                  Modern Solutions for Customer Engagement
                </TextEffect>
                <TextEffect
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg"
                  delay={0.5}
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                >
                  Highly customizable components for building modern websites
                  and applications that look and feel the way you mean it.
                </TextEffect>
                <AnimatedGroup
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                >
                  <div
                    className="rounded-[calc(var(--radius-xl)+0.125rem)] border bg-foreground/10 p-0.5"
                    key={1}
                  >
                    <Button
                      asChild
                      className="rounded-xl px-5 text-base"
                      size="lg"
                    >
                      <Link href="#link">
                        <span className="text-nowrap">Start Building</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    asChild
                    className="h-10.5 rounded-xl px-5"
                    key={2}
                    size="lg"
                    variant="ghost"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Request a demo</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
                <Features />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background pt-16 pb-16 md:pb-32">
          <div className="group relative m-auto max-w-5xl px-6">
            <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
              <Link
                className="block text-sm duration-150 hover:opacity-75"
                href="/"
              >
                <span> Meet Our Customers</span>

                <ChevronRight className="ml-1 inline-block size-3" />
              </Link>
            </div>
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 group-hover:blur-xs sm:gap-x-16 sm:gap-y-14">
              <div className="flex">
                <img
                  alt="Nvidia Logo"
                  className="mx-auto h-5 w-fit dark:invert"
                  height="20"
                  src="https://html.tailus.io/blocks/customers/nvidia.svg"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  alt="Column Logo"
                  className="mx-auto h-4 w-fit dark:invert"
                  height="16"
                  src="https://html.tailus.io/blocks/customers/column.svg"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  alt="GitHub Logo"
                  className="mx-auto h-4 w-fit dark:invert"
                  height="16"
                  src="https://html.tailus.io/blocks/customers/github.svg"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  alt="Nike Logo"
                  className="mx-auto h-5 w-fit dark:invert"
                  height="20"
                  src="https://html.tailus.io/blocks/customers/nike.svg"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  alt="Lemon Squeezy Logo"
                  className="mx-auto h-5 w-fit dark:invert"
                  height="20"
                  src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  alt="Laravel Logo"
                  className="mx-auto h-4 w-fit dark:invert"
                  height="16"
                  src="https://html.tailus.io/blocks/customers/laravel.svg"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  alt="Lilly Logo"
                  className="mx-auto h-7 w-fit dark:invert"
                  height="28"
                  src="https://html.tailus.io/blocks/customers/lilly.svg"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  alt="OpenAI Logo"
                  className="mx-auto h-6 w-fit dark:invert"
                  height="24"
                  src="https://html.tailus.io/blocks/customers/openai.svg"
                  width="auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
