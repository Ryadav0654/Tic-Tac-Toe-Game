import { useState } from "react";

import Board from "./components/Board";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center p-10 lg:p-20">
        <div className="my-5">
        <h1 className="text-5xl font-extrabold text-center">
          Ab maja Aayega, chaliye shuru karate hai!
        </h1>
        </div>
        
          <Board />
        
      </div>
    </div>
  );
}

export default App;
