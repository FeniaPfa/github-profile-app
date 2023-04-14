import React, { useEffect, useState } from 'react'

const useFetch = (user) => {

  const [userData,setUserData] = useState()
  const [notFound, setNotFound] = useState(false)
  const [loading, setLoading] = useState(false)
  const url = 'https://api.github.com/users/'

  const getUser = async () => {
    setLoading(true)
    try{
      const res = await fetch(`${url}${user}`)
      if(!res.ok){
        throw {
          msg: 'Fallo la petición',
          error: res.status,
        }
      }
      const data = await res.json()
      setUserData(data)
    } catch(error) {
      console.error(error)
      setNotFound(true)
    } finally{
      setLoading(false)
    }
  }


  return {
    userData, loading, notFound
  }
}

export default useFetch