import React from 'react'


export const RecursiveComponent = ({ nestedObject }) => {
  const isObject = x => typeof x === 'object' && x !== null; 

  if (!isObject(nestedObject)) {
    return <li>{nestedObject}</li>;
  }

  const pairs = Object.entries(nestedObject);

  return (
    <>
      {pairs.map(([key, value]) => {
        return (
          <li>
           {key}
            <ul>
              <RecursiveComponent nestedObject = { value } /> 
            </ul>
          </li>
        );
      })}
    </>
  );
};
