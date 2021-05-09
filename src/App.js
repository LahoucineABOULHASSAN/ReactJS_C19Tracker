import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Global from "./pages/Global";

function App() {
  return (
    <div className="App flex flex-column">
      <Header />
      <Global />
      <Footer />
    </div>
  );
}

export default App;
