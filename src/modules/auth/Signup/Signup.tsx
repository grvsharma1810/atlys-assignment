import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { LinkButton } from "../../../components/LinkButton";
import { PasswordInput } from "../../../components/PasswordInput";
import { AuthWrapper } from "../AuthWrapper";

export const SignUp = ({
  onLogin,
  onContinue,
}: {
  onLogin: () => void;
  onContinue: () => void;
}) => {
  return (
    <AuthWrapper>
      <div className="w-[463px] flex items-center justify-center rounded-lg bg-gradient-to-br from-atlysGray-4 to-atlysGray-5 p-0.5">
        <div className="w-full h-full px-6 py-10 rounded-md bg-atlysGray-1">
          <div className="flex flex-col items-center">
            <p className="text-sm font-medium mb-2 text-atlysGray-2">SIGN UP</p>
            <p className="text-lg font-semibold text-white">
              Create an account to continue
            </p>
          </div>
          <div className="flex flex-col gap-y-4	mt-[45px]">
            <Input label="Email" type="text" placeholder="Enter your email" />
            <Input
              label="Username"
              type="text"
              placeholder="Choose a preferred username"
            />
            <PasswordInput
              label="Password"
              placeholder="Choose a strong password"
            />
          </div>
          <div className="mt-5 w-full">
            <Button onClick={onContinue} fullWidth>
              Continue
            </Button>
          </div>
          <div className="flex gap-x-1 items-center mt-3">
            <p className="text-atlysGray-7 text-sm">Already have an account?</p>
            <LinkButton onClick={onLogin}>Login →</LinkButton>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};
