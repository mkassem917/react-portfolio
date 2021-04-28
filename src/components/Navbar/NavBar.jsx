import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <header>
            <div>
                <nav>
                    <NavLink to="/about" exact>
                        About Me
                    </NavLink>
                    <NavLink to="/portfolio" exact>
                        Portfolio
                    </NavLink>
                    <NavLink to="/contact" exact>
                        Contact Me
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Navbar

