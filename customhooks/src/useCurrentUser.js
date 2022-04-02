import React, { useState, useEffect } from 'react'

export const useCurrentUser = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    (
      async () => {
        const response = await fetch('/current-user');
        const data = await response.json()
        console.log(data)
        setUser(data)
      }
    )() 
  }, [])

  return  {user} ;
}
