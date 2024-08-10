import { useNavigation } from "../../../Providers/NavigationProvider";
import { Paths } from "../../constants";
import { AuthWrapper } from "../AuthWrapper";
import { SignUp } from "./Signup";
import logo from "/logo.svg";

export const AuthSignUp = () => {
  const { navigate } = useNavigation();

  const handleLogin = () => {
    navigate(Paths.LOGIN);
  };

  const handleContinue = () => {
    navigate(Paths.DASHBOARD);
  };

  return (
    <AuthWrapper>
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10 mb-[49px] pointer-events-none"
        />

        <SignUp onLogin={handleLogin} onContinue={handleContinue} />
      </div>
    </AuthWrapper>
  );
};
