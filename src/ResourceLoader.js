import React, { useState, useEffect } from 'react';

export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(resourceUrl);
      const currentUser = await response.json();
      setState(currentUser);
    })();
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        console.log(child);
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        } else {
          return child;
        }
      })}
    </>
  );
};
