import { MyThemeProvider } from "./context/ThemeContext";
import RoutesApp from "./routes";

function App() {
  return (
    <MyThemeProvider>
      <RoutesApp />
    </MyThemeProvider>
  );
}

export default App;
