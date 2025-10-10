import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increment =() =>{setCount(count+1)}
  const decrement =()=>{setCount(count-1)}

  return (
    <>
      <div className="bg-red-300 flex justify-center">to do app</div>
      <div className="flex justify-center p-3 gap-4">
        <button
          onClick={increment}
          className="flex justify-center bg-blue-400 text-white"
        >
          increment
        </button>
        <button
          onClick={decrement}
          className="flex justify-center bg-green-400 rounded-full text-white"
        >
          decrement
        </button>
      </div>
      <div>count::{count}</div>
    </>
  );
}

export default App;
