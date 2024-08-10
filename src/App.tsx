import { NavigationProvider } from "./Providers/NavigationProvider";
import { Routes } from "./Routes";

function App() {
  return (
    <NavigationProvider>
      <Routes />
    </NavigationProvider>
  );
}

export default App;
