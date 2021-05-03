import React from "react";

const Buttons = ({ handleClick }) => {
  return (
    <article className="mx-auto mt-4 mb-4 col">
      <button
        onClick={handleClick}
        className="btn btn-danger border border-dark col-6"
      >
        AC
      </button>
      <button
        onClick={handleClick}
        className="btn btn-primary border border-dark col-3"
      >
        /
      </button>
      <button
        onClick={handleClick}
        className="btn btn-primary border border-dark col-3"
      >
        *
      </button>
      <button
        onClick={handleClick}
        className="btn btn-primary border border-dark col-3"
      >
        7
      </button>
      <button
        onClick={handleClick}
        className="btn btn-primary border border-dark col-3"
      >
        8
      </button>
      <button
        onClick={handleClick}
        className="btn btn-primary border border-dark col-3"
      >
        9
      </button>
      <button
        onClick={handleClick}
        className="btn btn-primary border border-dark col-3"
      >
        -
      </button>
      <button
        onClick={handleClick}
        className="btn btn-primary border border-dark col-3"
      >
        4
      </button>
      <button
        onClick={handleClick}
        className="btn btn-primary border border-dark col-3"
      >
        5
      </button>
      <button
        onClick={handleClick}
        className="btn btn-primary border border-dark col-3"
      >
        6
      </button>
      <button
        onClick={handleClick}
        className="btn btn-primary border border-dark col-3"
      >
        +
      </button>
      <button
        onClick={handleClick}
        className="btn btn-primary border border-dark col-3"
      >
        1
      </button>
      <button
        onClick={handleClick}
        className="btn btn-primary border border-dark col-3"
      >
        2
      </button>
      <button
        onClick={handleClick}
        className="btn btn-primary border border-dark col-3"
      >
        3
      </button>
      <button
        onClick={handleClick}
        className="btn btn-primary border border-dark col-3"
      >
        CE
      </button>
      <button
        onClick={handleClick}
        className="btn btn-primary border border-dark col-6"
      >
        0
      </button>
      <button
        onClick={handleClick}
        className="btn btn-primary border border-dark col-3"
      >
        .
      </button>
      <button
        onClick={handleClick}
        className="btn btn-primary col-3 border border-dark"
      >
        =
      </button>
    </article>
  );
};

export default Buttons;
