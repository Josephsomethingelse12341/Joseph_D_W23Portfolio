import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Resume } from "./components/Resume"
import { Projects } from "./components/Projects";
import { Capstone } from "./components/Capstone";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Resume />
      <Projects />
      <Capstone />
      <Footer />
    </div>
  );
}

export default App;
