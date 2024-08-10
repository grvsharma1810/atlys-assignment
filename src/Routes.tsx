import { Route } from "./components/Route";
import { AuthLogin } from "./modules/auth/Login/AuthLogin";
import { AuthSignUp } from "./modules/auth/Signup/AuthSignup";
import { Paths } from "./modules/constants";
import { Dashboard } from "./modules/dashboard/Dashboard";

export const Routes = () => {
  return (
    <main className="h-full w-full">
      <Route path={Paths.DASHBOARD}>
        <Dashboard />
      </Route>
      <Route path={Paths.LOGIN}>
        <AuthLogin />
      </Route>
      <Route path={Paths.SIGNUP}>
        <AuthSignUp />
      </Route>
    </main>
  );
};
