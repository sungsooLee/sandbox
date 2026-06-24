import type { ReactNode, ButtonHTMLAttributes } from "react";
import "./Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
}

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  disabled = false,
  ...props
}: ButtonProps) => {
  const buttonClass = ["btn", variant, size, disabled && "disabled", className]
    .filter(Boolean)
    .join(" ");

  return (
    <button {...props} disabled={disabled} className={buttonClass}>
      {children}
    </button>
  );
};
