import React from 'react';

export const SmallPersonList = ({ person }) => {

  const { name, age } = person

  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
    </>
  );
};
