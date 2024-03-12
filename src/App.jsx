import React from "react";

// fragment use karne ka do metod hai
//  first app react ko import kar lijiye react.fragments ka use kijiye

const App = () => {
  return (
    //  fragment use karne ka dusra tarika <> start kijye and </> isse end kiiye
    <React.Fragment>
      <h1 className="text-5xl font-bold">Healty Food</h1>
      <ul className="felx my-4">
        <li className="border-t text-3xl">Dal</li>
        <li className="border-t text-3xl">Green vegitable</li>
        <li className="border-t text-3xl">Salad</li>
        <li className="border-t text-3xl">Roti</li>
        <li className="border-t text-3xl">Milk</li>
        <li className="border-t text-3xl">Aggs</li>
      </ul>
    </React.Fragment>
  );
};

export default App;
