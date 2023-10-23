import { useEffect, useState } from "react";
import Todo from "./Todo/Todo";
import { Button } from "@mui/material";


function App() {

  const [show, setShow] = useState(false)

  return (
    <>
      <Button
        variant="contained"
        sx={{ margin: 2 }}
        onClick={() => setShow(!show)}
      >
        bấm nè
      </Button>
      {!show && <Todo />}
    </>
  )
}

export default App;
