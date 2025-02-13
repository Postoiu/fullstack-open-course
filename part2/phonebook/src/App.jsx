import { useEffect, useState } from 'react'

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filterValue, setFilterValue] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

  useEffect(() => {
    personService
      .getAll()
      .then(personsData => {
        setPersons(personsData)
        setFilteredPersons(personsData)
      })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();

    if(persons.findIndex(person => person.name === newName) >= 0) {
      alert(`${newName} is already added to phonebook`)
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }

    personService
      .create(newPerson)
      .then(addedRecord => {
        setPersons(persons.concat(addedRecord))
        setFilteredPersons(filteredPersons.concat(addedRecord))
        setNewName('')
        setNewNumber('')
      })

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value)

    if(event.target.value === '') {
      setFilteredPersons([...persons]);
      return;
    }

    setFilteredPersons(persons.filter(person => {
      return person.name.toLowerCase().includes(filterValue.toLowerCase())
    }))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterValue={filterValue}
        handleFilterChange={handleFilterChange}
      />

      <h3>add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />

      <h3>Numbers</h3>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App
