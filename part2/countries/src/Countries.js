import { SingleCountry } from './SingleCountry.js'

export const Countries = ({ countries, filter }) => {
    const filteredCountries =
        countries
            .filter(item => (
                item.name.toUpperCase().includes(filter.toUpperCase())
            ))

    if (filteredCountries.length === 1) {
        return (
            <SingleCountry country={filteredCountries[0]} />
        )
    } else if (filteredCountries.length <= 10) {
        return (
            filteredCountries.map(item => (
                <p key={item.alpha2Code}>{item.name}</p>
            ))
        )
    } else {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }
}