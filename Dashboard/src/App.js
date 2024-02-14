import { colorModeContext, useMode } from "./theme";
import { CssBaseLine, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseLine />
        <div className="App">
          <main className="content"> </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
