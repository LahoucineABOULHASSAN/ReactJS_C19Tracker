import { createTheme, ThemeProvider } from "@material-ui/core";
import { red, deepPurple } from "@material-ui/core/colors";
import { Main, Header, Footer } from "./components";

import ErrorsContextProvider from "./contexts/ErrorsContext";
import GlobalContextProvider from "./contexts/GlobalContext";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: deepPurple[300],
      },
      secondary: red,
    },
    typography: {
      fontFamily: "Titillium Web, sans-serif",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  });
  return (
    <div className="App flex flex-column">
      <ThemeProvider theme={theme}>
        <GlobalContextProvider>
          <ErrorsContextProvider>
            <Header />
            <Main />
            <Footer />
          </ErrorsContextProvider>
        </GlobalContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
