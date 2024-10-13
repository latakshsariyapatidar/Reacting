import React from "react";
import { useState } from "react";

function App() {
  const [a, b] = useState([1, 2, 3, 4, 5, 6, 7]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-10 p-5 ">
      {a.map((elem, index) => (
        <h1 className="font-mono text-xl font-medium text-center">{elem}</h1>
      ))}

      <button
        onClick={() =>
          b(() => {
            return a.filter((elem, index) => index != a.length - 1);
          })
        }
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full "
      >
        Remove Element
      </button>

      <button
        onClick={() =>
          b((prev) => {
            return [...a, prev[prev.length - 1] + 1];
          })
        }
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full "
      >
        Add Element
      </button>
    </div>
  );
}

export default App;
