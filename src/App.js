import { useState } from "react";

function App() {
  const [checked, setChecked] = useState([])

  const data = [
    {
      id: 1,
      name: "MTP 1"
    },
    {
      id: 2,
      name: "MTP 2"
    },
    {
      id: 3,
      name: "MTP 3"
    },
  ]

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter(item => item != id)
      }
      else {
        return [...prev, id]
      }
    }
    )
  }

  const handleResName = (id) => {
    console.log({ ids: checked })
  }

  return (
    <>
      <div
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {data.map(n =>
          <div key={n.id}>
            <input
              type="checkbox"
              checked={checked.includes(n.id)}
              onChange={() => handleCheck(n.id)} // nếu không dùng amonymous function thì sẽ ko trỏ đến component(hàm), mà nó sẽ ra underfind
            />{n.name}
          </div>
        )}
      </div>
      <button >đăng ký</button>
    </>
  )
}

export default App;
