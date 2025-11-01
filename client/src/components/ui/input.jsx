import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "bg-[hsl(var(--discord-darker))] border border-[hsl(var(--discord-darker))] text-[hsl(var(--discord-text))] placeholder:text-[hsl(var(--discord-text-muted))] h-10 w-full min-w-0 rounded-[3px] px-3 py-2 text-base transition-colors outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus:border-[hsl(var(--discord-blurple))] focus:outline-none",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[hsl(var(--discord-text))]",
         className
       )}
       {...props} />
  );
}

export { Input }
