import React from 'react'
import HeroeList from '../components/HeroeList'

const DCPage = () => {
  return (
    <div>
      <h1>Dc Comics</h1>
      <hr />

      <HeroeList publisher={'DC Comics'}/>
    </div>
  )
}

export default DCPage