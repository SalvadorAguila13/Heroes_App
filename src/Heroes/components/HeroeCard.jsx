import React from 'react'
import { Link } from 'react-router-dom'

const HeroeCard = ({heroe}) => {

  const heroeImg = `/assets/heroes/${heroe.id}.jpg`

  return (
    <article className='col animate__animated animate__tada'>
        <div className='card'>
            <div className="row no-gutters">
                <div className="col-4">
                    <img className='card-img' src={heroeImg} alt={heroe.superhero} />
                </div>
                <div className="col-8">
                  <div className='card-body'>
                    <h5 className='card-title'>{heroe.superhero}</h5>
                    <p className='card-text'>{heroe.alter_ego}</p>
                    {
                      heroe.alter_ego !== heroe.characters ? (<p>{heroe.characters}</p>) : ''
                    }
                    <p className='card-text'>
                      <small className='text-muted'>{heroe.first_appearance}</small>
                    </p>

                    <Link to={`/heroe/${heroe.id}`}>More information...</Link>
                  </div>
                </div>
            </div>
        </div>
    </article>
  )
}

export default HeroeCard