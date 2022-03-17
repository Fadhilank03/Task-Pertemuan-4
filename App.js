import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Hello from "./components/Hello";

/**
 * Import Component Hello
 */
import Hello from "./components/Hello";

function App() {
  return (
    <div>
      <h2>Hello</h2>
      <Hello />
      <Header/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
