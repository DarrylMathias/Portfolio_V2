import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";


export const InteractiveHoverButton = (({ children, className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      variant="ghost"
      className={cn(
        "group relative overflow-hidden rounded-md px-5 py-2 font-semibold text-sm",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-md bg-primary transition-all duration-300 group-hover:scale-[100.8]" />
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight size={16} />
      </div>
    </Button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
