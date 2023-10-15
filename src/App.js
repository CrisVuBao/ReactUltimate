import { useState } from "react";

function App() {
  const [gift, setGift] = useState();

  const dataGift = [
    "Cs Game",
    "LOL",
    "Pentakill"
  ]

  const handleGift = () => {
    let index = Math.floor(Math.random(dataGift) * 3);
    console.log(index)
    return setGift(dataGift[index])
  }

  return (
    <>
      <h3>{gift || "không có phần thưởng"}</h3> {/*có data trong gift thì trả ra gift, hoặc không có thì trả ra " ko có phần thưởng" */}
      <button onClick={handleGift}>Get phần thưởng</button>
    </>
  )
}

export default App;
