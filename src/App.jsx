import React from "react";
import MainHeading from "./components/MainHeading";
import IndeanTime from "./components/Indean-time";
import CurrentTime from "./components/Current-time";
const App = () => {
  return (
    <div>
      <MainHeading></MainHeading>
      <IndeanTime></IndeanTime>
      <CurrentTime></CurrentTime>
    </div>
  );
};

export default App;
