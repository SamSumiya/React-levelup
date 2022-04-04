import React from 'react'

export const LargePersonList = ({ person }) => {
  const { name, age, hairColor, hobbies } = person
  return (
    <>
      <h1>{name} - {age} - {hairColor}</h1>
      <ul>
       { hobbies.map(hobby => (
        <li>
          {hobby}
        </li>
        ))}
      </ul>
    </>
  )
}
