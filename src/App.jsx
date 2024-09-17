import styles from "./App.module.css";
import { Resume } from "./components/Resume/Resume";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Resume />
      </div>
    </>
  );
}

export default App;
