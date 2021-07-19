import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Your code below
  // return must be the same function, so it can not be an anonymouse, otherwise we can't reference to it

  useEffect(() => {
    function helper() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", helper);
    return () => {
      window.removeEventListener("resize", helper);
    };
  }, []);

  return (
    <div className="App">
      <p>Window Width: {windowWidth} </p>
    </div>
  );
}

export default App;
