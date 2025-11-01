import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[3px] text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        default: "bg-[hsl(var(--discord-blurple))] text-white hover:bg-[hsl(235,86%,60%)]",
        destructive:
          "bg-[hsl(var(--discord-red))] text-white hover:bg-[hsl(359,82%,65%)]",
        outline:
          "border border-[hsl(var(--discord-gray))] bg-transparent hover:bg-[hsl(var(--discord-light-gray))] text-[hsl(var(--discord-text))]",
        secondary:
          "bg-[hsl(var(--discord-light-gray))] text-[hsl(var(--discord-text))] hover:bg-[hsl(215,13%,30%)]",
        ghost:
          "hover:bg-[hsl(var(--discord-light-gray))] text-[hsl(var(--discord-text))]",
        link: "text-[hsl(var(--discord-blurple))] underline-offset-4 hover:underline",
        success: "bg-[hsl(var(--discord-green))] text-white hover:bg-[hsl(139,47%,48%)]",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5 text-xs",
        lg: "h-11 px-6 has-[>svg]:px-4 text-base",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
