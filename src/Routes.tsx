import { Route } from "./components/Route";
import { Login } from "./modules/auth/Login/Login";
import { SignUp } from "./modules/auth/Signup/Signup";
import { Paths } from "./modules/constants";
import { Dashboard } from "./modules/dashboard/Dashboard";

export const Routes = () => {
  return (
    <main className="h-full w-full">
      <Route path={Paths.DASHBOARD}>
        <Dashboard />
      </Route>
      <Route path={Paths.LOGIN}>
        <Login />
      </Route>
      <Route path={Paths.SIGNUP}>
        <SignUp />
      </Route>
    </main>
  );
};
