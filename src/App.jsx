import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
      </div>
    </>
  );
}

export default App;
