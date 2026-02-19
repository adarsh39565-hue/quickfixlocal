import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export function Button({
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
        variant === "default" &&
          "bg-indigo-600 text-white hover:bg-indigo-700",
        variant === "outline" &&
          "border border-gray-300 bg-white hover:bg-gray-100",
        className
      )}
      {...props}
    />
  );
}

