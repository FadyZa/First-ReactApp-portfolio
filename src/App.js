import "./App.css";
import { Fragment } from "react";
import Navbar from "./sections/Navbar";
import Landing from "./sections/Landing";
import Resume from "./sections/Resume";
import Contact from "./sections/contact";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Landing />
      <Resume />
      <Contact />
    </Fragment>
  );
}

export default App;
