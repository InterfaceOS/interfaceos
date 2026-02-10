import * as React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", style, ...props }: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    border: "none",
    fontFamily: "sans-serif",
    ...style,
  };

  const variantStyles: React.CSSProperties =
    variant === "primary"
      ? {
          backgroundColor: "#000",
          color: "#fff",
        }
      : {
          backgroundColor: "#e5e7eb",
          color: "#000",
        };

  return <button style={{ ...baseStyles, ...variantStyles }} {...props} />;
}
