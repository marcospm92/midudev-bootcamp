import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
    console.log({ good })
  }
  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
    console.log({ neutral })
  }
  const handleClickBad = () => {
    setBad(bad + 1)
    console.log({ bad })
  }

  return (
    <div>
      <h1>give feedback</h1>

      <button
        onClick={handleClickGood}
      >
        good
      </button>

      <button
        onClick={handleClickNeutral}
      >
        neutral
      </button>

      <button
        onClick={handleClickBad}
      >
        bad
      </button>

      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)