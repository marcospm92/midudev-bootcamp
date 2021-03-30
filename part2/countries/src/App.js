import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Filter } from './Filter.js'
import { Countries } from './Countries.js'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [capital, setCapital] = useState('Madrid')
  const [weather, setWeather] = useState({})

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${capital}`)
      .then(response => {
        setWeather(response.data)
      })
  }, [capital])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleButtonClick = (event) => {
    setFilter(event.target.value)
  }

  const handleCapitalChange = (capital) => {
    setCapital(capital)
  }

  return (
    <div>
      <Filter handleFilterChange={handleFilterChange} filter={filter} />
      <Countries countries={countries} filter={filter} weather={weather} handleButtonClick={handleButtonClick}
        handleCapitalChange={handleCapitalChange} />
    </div >
  );
}

export default App;
