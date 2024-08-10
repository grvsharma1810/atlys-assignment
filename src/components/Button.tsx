import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ fullWidth, ...props }, ref) => {
    return (
      <button
        className={`p-3 inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium text-white bg-atlysBlue ${
          fullWidth ? "w-full" : ""
        }`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
