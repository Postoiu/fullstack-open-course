import { useEffect, useState } from 'react'

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';

import personService from './services/persons';

import './index.css'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filterValue, setFilterValue] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])
  const [notificationMsg, setNotificationMsg] = useState(null)
  const [isError, setIsError] = useState(false)

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
    const existingPerson = persons.find(person => person.name === newName)

    if(existingPerson) {
      if(window.confirm(`${existingPerson.name} is already added to phonebook, replace the old phone number with a new one?`)) {
        personService
          .updatePhoneNumber(existingPerson.id, {...existingPerson, number: newNumber})
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id === existingPerson.id ? updatedPerson : person))

            setFilteredPersons(persons.map(person => person.id === existingPerson.id ? updatedPerson : person))

            setNotificationMsg(`Updated ${updatedPerson.name}'s phone number`)

            setTimeout(() => {
              setNotificationMsg(null)
            },5000)
          })
          .catch(() => {
            setIsError(true)
            setNotificationMsg(`Information of ${existingPerson.name} has already been removed from the server`)
            setPersons(persons.filter(person => person.id === existingPerson.id))
            setFilteredPersons(persons.filter(person => person.id === existingPerson.id))

            setTimeout(() => {
              setNotificationMsg(null)
              setIsError(false)
            }, 5000)
          })
      }
      
      setNewName('')
      setNewNumber('')
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
        setNotificationMsg(`Added ${addedRecord.name}`)

        setTimeout(() => {
          setNotificationMsg(null)
        }, 5000)
      })
      .catch(error => {
        setNewName('')
        setNewNumber('')
        setNotificationMsg(error.response.data.message);
        setIsError(true);

        setTimeout(() => {
          setNotificationMsg(null);
          setIsError(false);
        }, 5000)
      })
  }

  const handleDelete = (id) => {
    const personToDelete = persons.find(person => person.id === id)

    if(!window.confirm(`Delete ${personToDelete.name}?`)) {
      return
    }

    personService
      .deletePerson(id)
      .then(deletedPerson => {
        setPersons(persons.filter(person => person.id !== deletedPerson.id))
        setFilteredPersons(persons.filter(person => person.id !== deletedPerson.id))
      })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    const userInput = event.target.value
    setFilterValue(userInput)

    if(event.target.value === '') {
      setFilteredPersons([...persons]);
      return;
    }

    setFilteredPersons(persons.filter(person => {
      return person.name.toLowerCase().includes(userInput.toLowerCase())
    }))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMsg} error={isError} />
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
      <Persons
        persons={filteredPersons}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App
