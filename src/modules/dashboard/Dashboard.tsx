import { useNavigation } from "../../Providers/NavigationProvider";

export const Dashboard = () => {
  const { navigate } = useNavigation();

  return (
    <div className="text-white">
      <p>Dashboard</p>
      <button onClick={() => navigate("/login")}>Go to Login</button>
    </div>
  );
};
