import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary:
          "bg-radial-[at_50%_100%] from-[#6D7A97] to-grayscale-950 to-50% hover:to-100% text-white",
        Secondary:
          "bg-white border border-grayscale-200 text-grayscale-900 hover:bg-grayscale-100",
        testimonial:
          "bg-[#FFFFFF66] hover:bg-grayscale-100",
      },
      size: {
        base: "px-[24px] py-[11px] font-sans font-medium text-[1rem] rounded-[80px]",
        small:
          "px-[20px] py-[9px] font-sans font-medium text-[0.875rem] rounded-[80px]",
        icon: "size-9",
        testimonial: 
          "w-[48px] h-[48px] rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "base",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
