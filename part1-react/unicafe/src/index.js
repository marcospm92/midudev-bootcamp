import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({ text, value }) => {
  return (
    <div>
      <p>{text} {value}</p>
    </div>
  )
}

const Button = ({ text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

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
  const globalScore = good - bad
  const totalVotes = good + neutral + bad


  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={handleClickGood} />
      <Button text="neutral" handleClick={handleClickNeutral} />
      <Button text="bad" handleClick={handleClickBad} />

      {totalVotes === 0
        ? <p>No feedback given</p>
        : <div>
          <h1>statistics</h1>
          <Statistics text="good" value={good} />
          <Statistics text="neutral" value={neutral} />
          <Statistics text="bad" value={bad} />
          <Statistics text="all" value={totalVotes} />
          <Statistics text="average" value={globalScore / totalVotes} />
          <Statistics text="positive" value={good / totalVotes} />
        </div>
      }
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)