import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
function Navigation({size}){
    const navigate = useNavigate()
    const [logout,setLogout]= useState(false)
    useEffect(()=>{
        if(!localStorage.getItem('auth'))
        navigate('/login') 
    },[logout])

    const logoutHandler = (e) =>{
        e.preventDefault();
        localStorage.removeItem('auth')
        setLogout(true)
    }
    return(
        <>
        <nav className="navbar navbar-expand-md">
            <div className="conatainer-fluid">
                <nav className="navbar navbar-expand-sm">
                    <img src="images/logo.png" alt="logo" height="100px" width="100px"/>
                <ul className="navbar-nav px-5">
                    <li className="nav-item px-2"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item px-2"><Link to="/movie" className="nav-link">Movies</Link></li>
                    <li className="nav-item px-2"><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>
                <Link to="/cart" classname="nav-link"><img  src='images/cart.png' alt='cart' height="50px" width="40px"/></Link><span className='number'>{size}</span>
                <div className='logout px-5'>
                    <button className='btn' onClick={logoutHandler}>logout</button>
                </div>
            </nav>
            </div>
        </nav>
        </>
    );
}
export default Navigation;