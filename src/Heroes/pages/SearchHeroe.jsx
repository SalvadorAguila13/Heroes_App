import React from 'react'
import HeroeCard from '../components/HeroeCard'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { getHeroesByName } from '../helpers/getHeroesByName'

const SearchHeroe = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q)

  const {searchText, onInputChange, onResetForm} = useForm({
    searchText: q,
  });


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`)
    onResetForm()
  }
  
  return (
    <>
      <h1>Search Heroe</h1>
      <hr />
      <div className="row">
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSearchSubmit}>
            <input 
            onChange={onInputChange}
            value={searchText}
            className='form-control'
            name='searchText'  
            autoComplete='off' 
            type="text" placeholder='Search your favorite heroe'/>
            <button className='btn btn-outline-dark mt-2'>Search</button>
          </form>
        </div>
        
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            (q === '') 
            ? (<div className='alert alert-primary'>Search a heroe...</div>) 
            : (heroes.length === 0 ) && <div className='alert alert-danger'>Not results <b>{q}</b></div>
          }
          
          {
            heroes.map(heroe => <HeroeCard key={heroe.id} heroe={heroe} />)
          }
          
        </div>
      </div>
    </>
  )
}

export default SearchHeroe