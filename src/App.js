import { useEffect, useState } from "react";
import Content from "./Content/Content";
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
      {!show && <Content />}
    </>
  )
}

export default App;
