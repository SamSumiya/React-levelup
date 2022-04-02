import React, { useState, useEffect } from 'react';

export const useResource = (resourceUrl) => {
  const [resource, setResource] = useState(null);
  console.log(resourceUrl);
  useEffect(() => {
    (async () => {
      const response = await fetch(resourceUrl);
      const data = await response.json();
      setResource(data);
    })();
  }, [resourceUrl]);

  return { resource };
};
