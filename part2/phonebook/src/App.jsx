import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    if(persons.findIndex(person => person.name === newName) >= 0) {
      alert(`${newName} is already added to phonebook`)
      return;
    }

    const newPerson = {
      name: newName
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => (
          <p key={person.name}>{person.name}</p>
        ))}
      </div>
    </div>
  )
}

export default App
