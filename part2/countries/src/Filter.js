export const Filter = ({ handleFilterChange, filter }) => {
    return (
        <div>
            find countries <input onChange={handleFilterChange} value={filter}></input>
        </div>
    )
}