// import React from 'react'

// function LiveClock() {
//   return (
//     <div>LiveClock</div>
//   )
// }

// export default LiveClock


import React from "react";
import ReactDOM from "react-dom";

import Clock from "./Clock";

function App() {
  return (
    <div className="App">
      <Clock />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);