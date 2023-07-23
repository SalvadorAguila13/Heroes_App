import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroeById } from '../helpers/getHeroeById';

const  HeroePage = () => {

  const {id} = useParams();

  const navigate = useNavigate()
  
  const heroe = useMemo(() => getHeroeById(id), [id]); 

  const heroeImg = `/assets/heroes/${heroe.id}.jpg`

  const handleBackPage = () => {
    navigate(-1)
  }

  if(!heroe) {
    return <Navigate to='/marvel' />
  }



  return (
    <article className='row mt-5 animate__animated animate__zoomInDown'>
      <div className="col-4">
        <img className='img-thumbnail' src={heroeImg} alt={heroe.superhero} />
      </div>
      <div className='col-8'>
        <h3>{heroe.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter Ego:</b>{heroe.alter_ego}</li>
          <li className='list-group-item'><b>Publisher:</b>{heroe.publisher}</li>
          <li className='list-group-item'><b>First appearance:</b>{heroe.first_appearance}</li>
        </ul>

        <h5 className='mt-3'>Characters: </h5>
        <p>{heroe.characters}</p>

        <button onClick={handleBackPage} className='btn btn-outline-dark'>Back</button>
      </div>
    </article>
  )
}

export default HeroePage