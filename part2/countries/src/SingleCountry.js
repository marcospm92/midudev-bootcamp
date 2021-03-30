export const SingleCountry = ({ country, weather }) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2>languages</h2>
            <ul>
                {country.languages.map(language => (
                    <li key={language.name}>{language.name}</li>
                ))}
            </ul>
            <img src={country.flag} alt="Flag" height="150" />

            <h2>Weather in {country.capital}</h2>
            <p><strong>temperature:</strong> {weather.current.temperature} °C</p>
            <img src={weather.current.weather_icons[0]} alt="Weather" />
            <p><strong>wind:</strong> {weather.current.wind_speed} km/h direction {weather.current.wind_dir}</p>
        </div>
    )
}