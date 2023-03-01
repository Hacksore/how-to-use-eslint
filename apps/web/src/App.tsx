import { useState } from "react";
// TODO: do you want eslint or tsc to warn you about this?
// it can be either but I used typescript for this
// import React from "react";

function App() {
  const [state, setState] = useState("");

  return (
    <div>
      {state}
      <button onClick={() => setState((state) => state + 1)}>Click me</button>
    </div>
  );
}

export default App;
