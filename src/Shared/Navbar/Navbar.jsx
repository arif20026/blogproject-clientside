import { createContext, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {

    const {user,logOut} =useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navLinks = <>

    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/addBlog">Add Blog</NavLink></li>
    <li><NavLink to="/blogs">Blogs</NavLink></li>
    <li><NavLink to="/wishList">Wish List</NavLink></li>
    <li><NavLink to="/featuredBlog">Featured Blog</NavLink></li>
    
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user? 
                    <div className="flex flex-row gap-4 items-center">
                        <img src={user.photoURL} alt=""  className="rounded-full w-12"/>
                        <button className="btn btn-secondary" onClick={() => handleLogOut()}>LogOut</button></div>
                     : <div className="flex gap-2">
                        <Link to="/register"><button className="btn btn-secondary" >Register</button></Link>
                        <Link to="/login"><button className="btn btn-primary" >Login</button></Link>
                     </div>
                }
            </div>
        </div>
    );
};

export default Navbar;