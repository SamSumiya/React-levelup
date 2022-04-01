import React, { useState, useEffect } from 'react';

export const UserLoader = ({userId, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/users/${userId}`);
      const currentUser = await response.json();
      setUser(currentUser);
    })();
  }, [userId]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        } else {
          return child;
        }
      })}
    </>
  );
};
