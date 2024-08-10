import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { LinkButton } from "../../../components/LinkButton";
import { PasswordInput } from "../../../components/PasswordInput";

export const Login = ({
  onRegister,
  onLoginNow,
}: {
  onRegister: () => void;
  onLoginNow: () => void;
}) => {
  return (
    <div className="w-[463px] flex items-center justify-center rounded-lg bg-gradient-to-br from-atlysGray-4 to-atlysGray-5 p-0.5">
      <div className="w-full h-full px-6 py-10 rounded-md bg-atlysGray-1">
        <div className="flex flex-col items-center">
          <p className="text-sm font-medium mb-2 text-atlysGray-2">
            WELCOME BACK
          </p>
          <p className="text-lg font-semibold text-white">
            Log into your account
          </p>
        </div>
        <div className="flex flex-col gap-y-4	mt-[45px]">
          <Input
            label="Email or Username"
            type="text"
            placeholder="Enter your email or username"
          />
          <PasswordInput label="Password" placeholder="Enter your password" />
        </div>
        <div className="mt-5 w-full">
          <Button onClick={onLoginNow} fullWidth>
            Login now
          </Button>
        </div>
        <div className="flex gap-x-1 items-center mt-3">
          <p className="text-atlysGray-7 text-sm">Not registered yet?</p>
          <LinkButton onClick={onRegister}>Register →</LinkButton>
        </div>
      </div>
    </div>
  );
};
