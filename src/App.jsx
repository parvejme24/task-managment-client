import { useState } from "react";
import "./App.css";
import { Button } from "keep-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button size="md">Helo</Button>
    </>
  );
}

export default App;
