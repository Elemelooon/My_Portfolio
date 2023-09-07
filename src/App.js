import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
    <NavigationBar></NavigationBar>
    <Header></Header>
    <Projects></Projects>
    <About></About>
    <Contact></Contact>

    </>
  );
}

export default App;
