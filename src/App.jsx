import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <main className="flex text-white">
        <div>First</div>
        <div>Second</div>
      </main>
    </div>
  );
}

export default App;