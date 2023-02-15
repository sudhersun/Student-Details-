import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './StudentLogin.css'

const StudentLogin = () => {
    const [input, setInput] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState({});
    const navigate = useNavigate();
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const validationValue = {
        username: {
            require: true,
        },
        email: {
            require: true,
            pattern: /^\S+@\S+$/,
            mail: 'admin@a.com'
        },
        password: {
            require: true,
            minlength: 8,
            value: 'password123'
        }
    }
    const validate = () => {
        let errorMgs = {};
        for (let key in validationValue) {
            if (validationValue[key].require && !input[key]) {
                errorMgs[key] = 'Field must be filled';
            }
            if(validationValue[key].mail && input[key] !== validationValue[key].mail){
                errorMgs[key] = 'Email not match';
            }
            if(validationValue[key].value && input[key] !== validationValue[key].value){
                errorMgs[key] = 'Password not match'
            }
            if (validationValue[key].pattern && !validationValue[key].pattern.test(input[key])) {
                errorMgs[key] = 'Invalid Email';
            }
            if (validationValue[key].minlength && input[key].length < validationValue[key].minlength) {
                errorMgs[key] = 'Password should be greater than 8';
            }
        }
        setError(errorMgs);
        return !Object.keys(errorMgs).length;
    }
    useEffect(() => {
        if(localStorage.getItem('auth')){
            navigate('/Persional Details')
        }
        // eslint-disable-next-line
    },[])
    const handleSubmit = (e) => {
        e.preventDefault();
        let isValidate = validate();
        if(isValidate){
            navigate(`/Persional Details?username=${input.username}`);
            localStorage.setItem('auth', true);
            localStorage.setItem('username', input.username);
        }
    }
    return (
        <div className="login-main container">
            <div className='login-container'>
                <form onSubmit={handleSubmit} id='form'>
                    <div className="login-header">
                        <h1>Student Login</h1>
                    </div>
                    <div className="form-control">
                        <label>Username</label>
                        <input type='text' placeholder='Username' name='username' onChange={handleChange} />
                        <span>{error.username}</span>
                    </div>
                    <div className="form-control">
                        <label>Email ID</label>
                        <input type='email' placeholder='Email ID' name='email' onChange={handleChange} />
                        <span>{error.email}</span>
                    </div>
                    <div className="form-control">
                        <label>Password</label>
                        <input type='password' placeholder='Password' name='password' onChange={handleChange} />
                        <span>{error.password}</span>
                        <small className='login-forgot'>Forgot Password?</small>
                    </div>
                    <button type='submit' className='login-btn'>Login</button>
                </form>
            </div>
        </div>

    );
}

export default StudentLogin;
