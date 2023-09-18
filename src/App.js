import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
// import {
//   Header,
//   Main,
//   About,
//   TechStack,
//   Projects,
//   Contact,
//   Footer,
// } from "./Pages/pages";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Header />}>
//       <Route path='/' element={<Main />} />
//       <Route path='about' element={<About />} />
//       <Route path='techstack' element={<TechStack />} />
//       <Route path='projects' element={<Projects />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='footer' element={<Footer />} />
//     </Route>
//   )
// );
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/tech-stack' element={<TechStack />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
