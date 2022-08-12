import { useState } from "react";
import "./App.css";
import { Home } from "./Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <Home counter={count} />
    </div>
  );
}

export default App;
