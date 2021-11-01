import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const HeroDetail = () => {

  const params = useParams()
  const location = useLocation()
  // console.log('params', params)
  // console.log('location', location)

  const { searchParams } = new URL(window.location.href);
  const hero = searchParams.get("hero");
  const image = searchParams.get("image");

  console.log('hero', hero)
  console.log('image', image)
  return (
    <div>
      HeroDetail
    </div>
  )
}

export default HeroDetail
