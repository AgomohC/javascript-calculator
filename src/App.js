import React from "react";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

const App = () => {
  return (
    <main className="bg-secondary">
      <div className="container">
        <div className="row d-flex height align-items-center">
          <section className="col-9 col-sm-9 col-md-6 col-lg-4 mx-auto bg-light height-52">
            <h5 className="text-center text-capitalize text-secondary mt-4">
              Javascript Calculator
            </h5>
            <Display></Display>
            <Buttons></Buttons>
          </section>
        </div>
      </div>
    </main>
  );
};

export default App;
