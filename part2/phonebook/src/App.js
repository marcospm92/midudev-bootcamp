import React, { useState, useEffect } from 'react'
import { getAllPersons, createPerson } from './services/persons'

const Filter = ({ handleFilterChange, newFilter }) => {
  return (
    <div>
      filter shown with: <input onChange={handleFilterChange} value={newFilter} />
    </div>
  )
}

const PersonForm = ({ handleSubmit, handleNameChange, newName, handleNumberChange, newNumber }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input onChange={handleNameChange} value={newName} />
      </div>
      <div>
        number: <input onChange={handleNumberChange} value={newNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Persons = ({ persons, newFilter }) => {
  return (
    <div>
      {
        persons
          .filter((person) => (
            person.name.toUpperCase().includes(newFilter.toUpperCase())))
          .map((person) => (
            <SinglePerson key={person.name} name={person.name} number={person.number} />
          ))
      }
    </div>
  )
}

const SinglePerson = ({ name, number }) => {
  return (
    <p>{name} {number}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    getAllPersons()
      .then(persons => {
        setPersons(persons)
      })
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault()
    const personToAddToState = {
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name === personToAddToState.name)) {
      window.alert(`${personToAddToState.name} is already added to phonebook`)
    } else {
      createPerson(personToAddToState)
        .then(newPerson => {
          setPersons((prevPersons) => prevPersons.concat(newPerson))
        })
    }
    setNewName("")
    setNewNumber("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handleFilterChange={handleFilterChange} value={newFilter} />

      <h3>add a new</h3>

      <PersonForm handleSubmit={handleSubmit} handleNameChange={handleNameChange} newName={newName} handleNumberChange={handleNumberChange} newNumber={newNumber} />

      <h3>Numbers</h3>

      <Persons persons={persons} newFilter={newFilter} />
    </div>
  )
}

export default App
