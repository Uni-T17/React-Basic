import { useState } from "react";
import "./App.css";
import TapButton from "./components/TapButton";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <p>Count: {count}</p>
        <TapButton
          onClick={() => {
            setCount(count + 1);
            setCount((prev) => prev + 1);
          }}
          buttonName="Increase"
        />
      </div>
    </>
  );
}

export default App;
