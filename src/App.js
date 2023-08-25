import "./App.css";
// import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className='main-container'>
      <Header />
      <Main />
      <About />
      <TechStack />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
