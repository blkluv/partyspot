import { cn } from "@/lib/utils/cn";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost" | "link" | "destructive";
  size?: "sm" | "default" | "lg" | "icon";
  isLoading?: boolean;
}

const buttonVariants = {
  default:
    "bg-primary text-white hover:bg-primary/90 shadow-sm transition-all duration-200",
  outline:
    "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 transition-all duration-200",
  ghost: "hover:bg-gray-50 text-gray-900 transition-all duration-200",
  link: "text-primary hover:text-primary/80 underline-offset-4 hover:underline transition-all duration-200",
  destructive:
    "bg-red-500 text-white hover:bg-red-600 shadow-sm transition-all duration-200"
};

const buttonSizes = {
  default: "h-11 px-4 py-2 rounded-md text-base font-medium has-[>svg]:px-3",
  sm: "h-8 rounded-md px-3 text-sm font-medium gap-1.5 has-[>svg]:px-2.5",
  lg: "h-14 rounded-md px-6 text-lg font-medium has-[>svg]:px-4",
  icon: "size-10 rounded-md p-2.5"
};

function Button({
  children,
  variant = "default",
  size = "default",
  isLoading = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 transition-all duration-200",
        buttonVariants[variant],
        buttonSizes[size],
        isLoading && "cursor-not-allowed opacity-50",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
    >
      {isLoading ? (
        <div className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      {children}
    </button>
  );
}

export default Button;
