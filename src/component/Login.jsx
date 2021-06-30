import React, { useContext } from 'react'
import { login } from './../service/userService';
import { toast } from 'react-toastify';
import { userContext } from './context/userContext';

const Login = () => {

    const {
        username,
        setUsername,
        password,
        setPassword,
        handleLogin,
        validator
    } = useContext(userContext)

    return (
        <div>
            <form onSubmit={e => handleLogin(e)}>
                <input
                    type="text"
                    placeholder="User Name"
                    name="username"
                    value={username}
                    onChange={e => {
                        setUsername(e.target.value)
                        validator.current.showMessageFor("username")
                    }} />
                {validator.current.message(
                    "username",
                    username,
                    "required"
                )}
                <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value)
                        validator.current.showMessageFor("password")
                    }}
                />
                {validator.current.message(
                    "password",
                    password,
                    "required"
                )}
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login