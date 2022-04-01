import React, { useState, useEffect } from 'react'

export const CurrentUserLoader = ({ children }) => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    (async () => {
      const response = await fetch('/current-user')
      const currentUser = await response.json()
      setUser(currentUser)
    })(); 
  }, [])

  return (
    <>
      {
        React.Children.map(children, child => {
        console.log(child)
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user })
        } else {
          return child; 
        }})
      }
    </>
  )
}

