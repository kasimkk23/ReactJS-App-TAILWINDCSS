import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
    return ( 
        <div className="border-b p-3 flex justify-between items-center">
            <span className="font-bold">
                <Link to="/">NaySayers</Link>
            </span>
            <Navbar />
        </div>
     );
}
 
export default Header;