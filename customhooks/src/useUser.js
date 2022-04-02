import { useState, useEffect } from 'react';

export const useUser = (userId) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/users/${userId}`);
      const data = await response.json();
      console.log(data);
      setUser(data);
    })();
  }, [userId]);

  return { user };
};
