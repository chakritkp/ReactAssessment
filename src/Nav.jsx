import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="left-side">
                <p></p>
            </div>
            
            <div className="right-side">
                <ul>
                    <li><Link className='link h3-font-size' to={'/home'}>Home</Link></li>
                    <li><Link className='link h3-font-size' to={'/owner'}>Owner</Link></li>
                </ul>
            </div>

        </nav>
        
    )
}

export default Navbar