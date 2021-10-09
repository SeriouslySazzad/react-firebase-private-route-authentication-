import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    const { signInUsingGoogle, signInUsingGithub } = useAuth();

    return (
        <div>
            <br />
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-success">Google Sign In</button>
            <br />
            <br />
            <button onClick={signInUsingGithub} className="btn btn-dark">Github Sign In</button>
            <br />
            <Link to="/register">New User</Link>
        </div>
    );
};

export default Login;