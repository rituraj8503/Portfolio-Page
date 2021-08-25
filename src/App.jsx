import Topbar from "./components/topbar/Topbar";
import Intro from "./components/topbar/intro/Intro";
import Portfolio from "./components/topbar/portfolio/Portfolio";
import Works from "./components/topbar/works/Works";
import Contact from "./components/topbar/contact/Contact";
import Menu from "./components/topbar/menu/Menu";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <div className="sections">
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Works></Works>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;