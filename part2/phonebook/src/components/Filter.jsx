const Filter = ({ filterValue, handleFilterChange }) => (
    <div>
        filter show with <input value={filterValue} onChange={handleFilterChange} />
    </div>
)

export default Filter;