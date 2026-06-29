import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user})=>{
    return(
        <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center sticky top-0 x-50">
            <Link to="/" clssName="flex items-center gap">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
                alt="Pinterest Logo"
                className="h-8 w-8"
                />
                <span className="text-red-600 font-bold text-xl hidden sm:block">Pinterest</span>
            
            </Link>
            <div className="flex itmes-center gap-6">
                <Link to="/" className="text-gray-700 font-medium hover:text-gray-900 transition">
                    Create
                </Link>
               <Link 
                    to="/profile" 
                    className="bg-gray-200 text-gray-800 font-bold w-9 h-9 rounded-full flex items-center justify-center uppercase hover:bg-gray-300 transition"
                    >
                    {/* Slices first letter of name. Conditional wrapper avoids undefined error [02:47:45] */}
                    {user && user.name ? user.name.slice(0, 1) : "U"}
                </Link>

            </div>
        </nav>
    )
}

export default Navbar;