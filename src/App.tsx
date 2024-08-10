import { NavigationProvider } from "./Providers/NavigationProvider";
import { Routes } from "./Routes";
import "./App.css";

function App() {
  return (
    <NavigationProvider>
      <Routes />
    </NavigationProvider>
  );
}

export default App;
