import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'

export const Navbar = () => {

    const { user: { name } } = useContext(AuthContext)
    console.log(name)

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid" >

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Asociaciones
                </Link>

                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink
                            className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                            to="/dc"
                        >
                            DC
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">

                        <span className='nav-item nav-link text-info'>
                            {name}
                        </span>
                        <NavLink
                            className={({ isActive }) => "nav-item nav-link" + (isActive ? 'active' : '')}
                            to="/login"
                        >
                            Logout
                        </NavLink>

                    </ul>
                </div>
            </div>
        </nav>
    )
}