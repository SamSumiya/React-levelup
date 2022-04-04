import React from 'react';

export const RegularList = ({
  listItems,
  resourceName,
  listComponent: ListComponent,
}) => {
  return (
    <>
      {listItems.map((item, idx) => (
        <ListComponent key={idx} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};
