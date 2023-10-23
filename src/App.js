import { createContext, useContext, useEffect, useState } from "react";
import Content from "./Content/Content";
import { Button } from "@mui/material";
import { ParentContext } from "./Context/ParentContext";

function App() {

  // sử dụng dữ liệu được nhận từ ParentContext
  const childrenContext = useContext(ParentContext)

  return (
    <>
      <Button
        variant="contained"
        sx={{ margin: 2 }}
        onClick={childrenContext.handleWowTheme}
      >
        Đổi màu chữ
      </Button>
      <Content />
    </>
  )
}

export default App;
