//imports
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Resume } from "./components/Resume/Resume";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

//main component to render the entire application structure 
function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
