import React, { useState, useEffect } from 'react'

export const ControlledForm = () => {

  const [nameError, setNameError] = useState('');
  const [name, setName] = useState('')
  const [age, setAge] = useState(0);
  const [hairColor, setHairColor] = useState('');

  const handleSubmit = (event) => {
    event.prevenDefault()
  }

  useEffect(() => {
    if (name.length < 3) {
      setNameError('name is too short...');
    } else {
      setNameError('')
    }
  }, [name, age, hairColor])

  return (
    <>
      <form onSubmit={handleSubmit}>
        { nameError && <p>{nameError}</p>}
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="number"
          name="age"
          placeholder="age"
          value={age}
          onChange={(event) => setAge(+event.target.value)}
        />
        <input
          type="text"
          name="hairColor"
          placeholder="Hair Color"
          value={hairColor}
          onChange={(event) => setHairColor(event.target.value)}
        />
       <button type='submit'>Submit</button>
      </form>
    </>
  );
}
