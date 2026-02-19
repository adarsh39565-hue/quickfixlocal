import * as React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", type, ...props }: InputProps) {
  return (
    <input
      type={type}
      className={
        "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-black disabled:cursor-not-allowed disabled:opacity-50 " +
        className
      }
      {...props}
    />
  );
}

