import * as React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, label, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label className="mb-2.5 text-atlysGray-3 text-sm font-medium">
          {label}
        </label>
        <input
          type={type}
          className="h-[43px] w-full rounded-md border border-atlys border-atlysGray-6 bg-atlysGray-1 p-3 text-base text-white ring-offset-background placeholder:text-atlysGray-7 outline-none"
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
