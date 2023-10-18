import { useState } from "react";
import Content from "./Content";

function App() {
  const [job, setJob] = useState([])
  const [writeJob, setWriteJob] = useState('')

  const handleAddJob = () => {
    setJob(set =>
      [...set,
        writeJob
      ]

    )
    localStorage.setItem('data', job);
  }

  return (
    <>
      <div
        style={{ display: 'flex', flexDirection: 'column' }}
      >

        <input
          value={writeJob}
          onChange={e => setWriteJob(e.target.value)}
        />
        <button onClick={handleAddJob}>đăng ký lịch trình</button>
        <ul>
          {job.map((itemJob, index) =>
            <li key={index}>{itemJob}</li>
          )
          }
        </ul>
        <Content />
      </div>
    </>
  )
}

export default App;
