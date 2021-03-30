import { SingleCountry } from './SingleCountry.js'

export const Countries = ({ countries, filter, weather, handleButtonClick, handleCapitalChange }) => {
    const filteredCountries =
        countries
            .filter(item => (
                item.name.toUpperCase().includes(filter.toUpperCase())
            ))

    if (filteredCountries.length === 1) {
        handleCapitalChange(filteredCountries[0].capital)
        return (
            <SingleCountry country={filteredCountries[0]} weather={weather} />
        )
    } else if (filteredCountries.length <= 10) {
        return (
            filteredCountries.map(item => (
                <p key={item.alpha2Code}>{item.name} <button onClick={handleButtonClick} value={item.name}>show</button></p>
            ))
        )
    } else {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }
}