import React from "react";

function Square({value, onSquareClick}) {
  return (
    <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
      <button
        className="border-solid border-4 text-center border-white font-extrabold md:w-24 md:h-24 text-5xl w-20 h-20 lg:w-28 lg:h-28"
        onClick={onSquareClick}
      >
        {value}
      </button>
    </div>
  );
}

export default Square;
