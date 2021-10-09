import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className='header'>
            <br />
            <Link to="/home">Home</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/placeorder">Place Order</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <span>{user.displayName} </span>
            {user?.email && <button onClick={logOut} className="btn btn-danger">Log Out</button>}
        </div>
    );
};

export default Header;