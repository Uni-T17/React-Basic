import { useState } from "react";
import "./App.css";
import TapButton from "./components/TapButton";

function App() {
  const [fruits, setFruit] = useState(["Apple", "Orange"]);
  return (
    <>
      <div>
        <ul>
          {fruits.map((fruit) => (
            <li>{fruit}</li>
          ))}
        </ul>
        <TapButton
          buttonName={"Add Fruit"}
          onClick={() => setFruit((prev) => [...prev, "Apple"])}
        />
      </div>
    </>
  );
}

export default App;
