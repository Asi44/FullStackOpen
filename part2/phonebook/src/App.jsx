import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', num: '099283928'}
  ]) 
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');
  const [showAll, setShowAll] = useState(true)
  const [filter, setFilter] = useState('');

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      num: newNum
    }
    
    const alreadyExists = persons.some(person => person.name === newName)

    if (alreadyExists) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(nameObject))
    }
    setNewName('');
    setNewNum('');
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    console.log(event.target.value)
    setNewNum(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const namesToShow = persons.filter(person => person.name.includes(filter));


  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with: <input value = {filter} onChange = {handleFilter}/></div>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNum} onChange={handleNumChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      
      <h2>Numbers</h2>
      <div>{namesToShow.map(person => <p key={person.name}>{person.name} {person.num}</p>)}</div>
    </div>
  )
}

export default App