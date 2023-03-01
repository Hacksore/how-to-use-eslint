import { useState } from "react";
import React from "react";

function App() {
  const [state, setState] = useState("");

  return (
    <div>
      {state}
      <button onClick={() => setState(state => state + 1)}>Click me</button>
    </div>
  )
  
}

export default App
