import { useState } from "react";

function App({ children }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <main className="flex ">{children}</main>
    </div>
  );
}

export default App;
