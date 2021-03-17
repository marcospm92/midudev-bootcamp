import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  const globalScore = props.good - props.bad
  const totalVotes = props.good + props.neutral + props.bad

  return (<div>
    <h1>statistics</h1>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <p>all {totalVotes}</p>
    <p>average {globalScore / totalVotes}</p>
    <p>positive {props.good / totalVotes}</p>
  </div>)
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
      {good + neutral + bad === 0
        ? <p>No feedback given</p>
        : <Statistics good={good} neutral={neutral} bad={bad} />
      }
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)