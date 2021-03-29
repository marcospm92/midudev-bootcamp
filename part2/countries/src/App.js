import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Filter } from './Filter.js'
import { Countries } from './Countries.js'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        const { data } = response
        setCountries(data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleButtonClick = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <Filter handleFilterChange={handleFilterChange} filter={filter} />
      <Countries countries={countries} filter={filter} handleButtonClick={handleButtonClick} />
    </div >
  );
}

export default App;
