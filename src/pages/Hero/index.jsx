import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const ACCESS_TOKEN = '3875372609247663'
const DOMAIN = 'https://www.superheroapi.com/api.php/'

const Hero = () => {
  const [id, setId] = useState(null)

  const history = useHistory()

  // useEffect(() => {
  //   getHeros()
  // }, [])
  // ENDPOINT - API - SERVICIO - PATH
  const getHeros = async () => {

    try {
      const response = await fetch(`${DOMAIN}${ACCESS_TOKEN}/${id}`)
      // , {
      //   body: {
      //     nombre: 'Juan',
      //     edad: 20,
      //     ciudad: 'Lima'
      //   },
      //   headers: {},
      //   method: 'POST',
      // }
      
      const hero = await response.json()
      history.push(`/hero/${hero.id}?hero=${hero.name}&image=${hero.image.url}`)
      console.log('response', hero)
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleChange = (e) => {
    const { target : { value } } = e
    setId(value)
  }
  console.log('value', id)
  return (
    <div>
      <input type="text" onChange={handleChange} /><br />
      <button onClick={getHeros} >Buscar</button><br /><br />
      Hero
    </div>
  )
}

export default Hero
