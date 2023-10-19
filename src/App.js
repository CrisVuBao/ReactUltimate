import { useEffect, useState } from "react";
import Content from "./Content";

function App() {

  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShow(!show)}
      >
        Nhấn nè
      </button>
      {!show && <Content />}
    </>
  )
}

export default App;
