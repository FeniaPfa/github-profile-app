import {urlFetch} from '../constants'

export const getData = async (user) =>{
  const res = await fetch(`${urlFetch}${user}`)
  const data = res.json()

  return data
}
