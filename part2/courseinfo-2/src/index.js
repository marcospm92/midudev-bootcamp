import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return <h2>{props.course}</h2>
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
  let sumOfExercises = parts.reduce(reducer, 0);
  return <p><strong>total of {sumOfExercises} exercises</strong></p>
}

const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course => <Course course={course} />)}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
