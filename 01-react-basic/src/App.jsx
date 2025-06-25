import { useState } from "react";
import "./App.css";
import TapButton from "./components/TapButton";

function App() {
  const [user, setUser] = useState({
    name: "",
    age: 12,
    isSingle: false,
  });
  return (
    <>
      <div>
        <p>My name is {user.name}</p>
        <p>I am {user.age} years old.</p>
        {user.isSingle ? <p>I am a Single.</p> : <p>I am in a relationship.</p>}

        <form>
          <label htmlFor="myName"></label>
          <input
            type="text"
            id="myName"
            value={user.name}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </form>

        <TapButton
          buttonName={"Click"}
          onClick={() =>
            setUser((prev) => ({ ...prev, isSingle: !user.isSingle }))
          }
        />
      </div>
    </>
  );
}

export default App;
