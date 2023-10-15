import { useState } from "react";

function App() {
  const [conCho, setConCho] = useState({
    ten: "Chó ngu",
    tuoi: 100,
    soThich: "an cut"
  })

  const handleAdd = () => {
    setConCho({
      ...conCho,
      trinhDo: "Chó"
    })
  }

  return (
    <>
      <h1>{JSON.stringify(conCho)}</h1>
      <button onClick={handleAdd}>ClickAdd</button>
    </>
  )
}

export default App;
