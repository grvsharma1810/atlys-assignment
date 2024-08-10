import { useNavigation } from "../../../Providers/NavigationProvider";
import { Paths } from "../../constants";
import { AuthWrapper } from "../AuthWrapper";
import { Login } from "./Login";
import logo from "/logo.svg";

export const AuthLogin = () => {
  const { navigate } = useNavigation();

  const handleRegister = () => {
    navigate(Paths.SIGNUP);
  };

  const handleLoginNow = () => {
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

        <Login onRegister={handleRegister} onLoginNow={handleLoginNow} />
      </div>
    </AuthWrapper>
  );
};
