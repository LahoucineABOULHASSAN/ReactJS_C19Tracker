import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorsContextProvider from "./contexts/ErrorsContext";
import GlobalContextProvider from "./contexts/GlobalContext";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { red, deepPurple } from "@material-ui/core/colors";

function App() {
  const theme = createTheme({
    palette: {
      primary: deepPurple,
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
