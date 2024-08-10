import * as React from "react";
import { LinkButton } from "./LinkButton";
import { EyeOff } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-2.5">
          <label className="text-atlysGray-3 text-sm font-medium">
            {label}
          </label>
          <LinkButton onClick={() => {}}>Forgot Password?</LinkButton>
        </div>
        <div className="relative">
          <input
            type="password"
            className="h-[43px] w-full rounded-md border border-atlys border-atlysGray-6 bg-atlysGray-1 p-3 text-base text-white ring-offset-background placeholder:text-atlysGray-7 outline-none pr-10"
            ref={ref}
            {...props}
          />
          <div className="absolute right-4 top-3">
            <EyeOff size={16} className="text-atlysGray-3" />
          </div>
        </div>
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
