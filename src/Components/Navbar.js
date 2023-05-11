import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>

            <nav className="nav nav-pills flex-column flex-sm-row bg-dark">
                <NavLink to='/' className='Home'>
                    <a className="flex-sm-fill text-sm-center nav-link">Home</a>
                </NavLink>
                <NavLink to='/About' className='About'>
                    <a className="flex-sm-fill text-sm-center nav-link">About</a>
                </NavLink>
                <NavLink to='/Project' className='Projects'>
                    <a className="flex-sm-fill text-sm-center nav-link">Projects</a>
                </NavLink>
            </nav>
        </>
    )
}
export default Navbar