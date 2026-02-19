import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export function Button({
  variant = "default",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50";
  const styles =
    variant === "outline"
      ? "border border-gray-300 bg-white hover:bg-gray-100"
      : "bg-black text-white hover:bg-gray-800";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}

