import { useState } from "react";
import "./App.css";
import Sazal from "./Component/Sazal";

const App = () => {
  const [count, setcount] = useState(1);

  const [name, setName] = useState("sazal");

  const handleIncrement = () => {
    setcount(count + 1);
  };

  const handleDecrement = () => {
    setcount(count - 1);
  };

  return (
    <>
      <div className="grid place-items-center py-12">
        <Sazal age="30" ex="Riya" />
        <Sazal age="31" ex="Riyana" />

        <div className="flex mt-3">
          <button className="border px-3" onClick={handleDecrement}>
            -
          </button>
          <span className="mx-3">{count}</span>
          <button className="border px-3" onClick={handleIncrement}>
            +
          </button>

          <br />

        </div>
          <div onMouseEnter={() => setName("Sazal")}>{name}</div>
          <button className="custom-button border px-5 bg-pink-400 :" onClick={() => setName("Roy")}>Change Name</button>
      </div>

      <p className="sazal">Sazal re ****** Bangladesh</p>
    </>
  );
};

export default App;
