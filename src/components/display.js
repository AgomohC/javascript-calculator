import React from "react";

const Display = ({ display }) => {
  return (
    <article>
      <div className="mx-auto form-control form-control-lg mt-3 bg-secondary text-light text-right">
        {display}
      </div>
    </article>
  );
};

export default Display;
