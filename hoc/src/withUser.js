import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const withUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null)
    console.log(props)
    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        const data = await response.data
        setUser(data);
      })() 
    }, [])
    return <Component {...props} user={user} />
  }
}
