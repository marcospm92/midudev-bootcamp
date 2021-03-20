import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = ({ parts }) => {
  return (
    parts.map((part) => {
      return <div key={part.id}>
        <p>{part.name} {part.exercises}</p>
      </div>
    })
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Total = ({ parts }) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue.exercises;
  let initialValue = 0
  let sumOfExercises = parts.reduce(reducer, initialValue);
  return <p><strong>total of {sumOfExercises} exercises</strong></p>
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))
