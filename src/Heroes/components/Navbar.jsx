import React from 'react'
import { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext'

const Navbar = () => {

    const navigate = useNavigate()
    const {user, logout} = useContext(AuthContext)    

    const handleLogOut = () => {
        navigate('/login', {
            replace: true
        });
        logout()
    } 

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 animate__animated animate__backInRight">
            
            <Link 
                className="navbar-brand" 
                to="/marvel"
            >
                HeroesApp
            </Link>
    
            <div className="navbar-collapse">
                <div className="navbar-nav">
    
                    <NavLink 
                        className={`nav-item nav-link ${({isActive}) => isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>
    
                    <NavLink 
                        className={`nav-item nav-link ${({isActive}) => isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    
                    <NavLink 
                        className={`nav-item nav-link ${({isActive}) => isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>
    
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        {user?.name}
                    </span>
                    <button onClick={handleLogOut} className='nav-item nav-link btn'>Log Out</button>
                </ul>
            </div>
        </nav>
    )
  
}

export default Navbar

