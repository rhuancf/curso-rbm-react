import React from "react";

export interface ButtonPropsInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
    children,
    className,
    ...rest
  }: ButtonPropsInterface) {
    return (
        <button {...rest} className={className}>{children}</button>
    )
}