import React from "react";
import { useState } from "react";
import Buttons from "./components/buttons";
import Display from "./components/display";

const App = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (e) => {
    if (e.target.innerText === "=") {
      setDisplay(eval(display));
    } else if (e.target.innerText === "AC") {
      setDisplay("");
    } else if (e.target.innerText === "CE") {
      try {
        setDisplay(display.slice(0, -1));
      } catch (error) {
        setDisplay("");
      }
    } else {
      setDisplay(display + e.target.innerText);
    }
    if (display.length > 28) {
      setDisplay(display.slice(0, 28));
    }
  };

  return (
    <main className="bg-secondary">
      <div className="container">
        <div className="row d-flex height align-items-center">
          <section className="col-9 col-sm-9 col-md-6 col-lg-4 mx-auto bg-light height-52">
            <h5 className="text-center text-capitalize text-secondary mt-4">
              Javascript Calculator
            </h5>
            <Display display={display}></Display>
            <Buttons handleClick={handleClick}></Buttons>
          </section>
        </div>
      </div>
    </main>
  );
};

export default App;
