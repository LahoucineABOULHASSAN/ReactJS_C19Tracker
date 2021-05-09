import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorsContextProvider from "./contexts/ErrorsContext";
import GlobalContextProvider from "./contexts/GlobalContext";

function App() {
  return (
    <div className="App flex flex-column">
      <GlobalContextProvider>
        <ErrorsContextProvider>
          <Header />
          <Main />
          <Footer />
        </ErrorsContextProvider>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
