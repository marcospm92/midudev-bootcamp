import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])

  const handleClickNext = () => {
    setSelected(generateRandomInteger())
  }

  const generateRandomInteger = () => {
    return Math.floor(Math.random() * 6)
  }

  const NumVotes = ({ votes }) => {
    return <p>has {votes} votes</p>
  }

  const handleClickVote = () => {
    const newVotesState = [...votes]
    newVotesState[selected] = newVotesState[selected] + 1
    setVotes(newVotesState)
  }

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <NumVotes votes={votes[selected]} />
      <button onClick={handleClickVote}>vote</button>
      <button onClick={handleClickNext}>next anecdote</button>
    </div >
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
