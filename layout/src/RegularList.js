import React from 'react';

export const RegularList = ({
  listItems,
  resourceName,
  listComponent: ListComponent,
}) => {
  console.log({ [resourceName]: 123 });
  return (
    <>
      {listItems.map((item, idx) => (
        <ListComponent key={idx} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};
