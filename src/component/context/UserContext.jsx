import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import { userContext } from './userContext';
import { addUser } from './../../action/user';
import { toast } from 'react-toastify';
import { loginUser } from './../../service/userService';
import { withRouter } from 'react-router';

const UserContext = ({ children, history }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [, forceUpdate] = useState();

    const dispatch = useDispatch();

    const validator = useRef(
        new SimpleReactValidator({
            messages: {
                required: "This field is required",
                min: "The input value should not be less than 5 characters",
                integer: "The input value must be a number"
            },
            element: message => <div style={{ color: "red", fontSize: '12px', marginTop: '8px' }}>{message}</div>
        })
    );

    const handleLogin = async event => {
        event.preventDefault();
        const user = {
            username,
            password
        };

        try {
            if (validator.current.allValid()) {
                const { status, data } = await loginUser(user);
                if (status === 200) {
                    toast.success("Login successfuly");
                    localStorage.setItem("token", data.token);
                    dispatch(addUser(user));
                    history.replace("/");
                }
            } else {
                validator.current.showMessages();
                forceUpdate(1);
            }
        } catch (ex) {
            console.log(ex);
            toast.error("We have problem, try again later");
        }
    };

    return (
        <userContext.Provider value={{
            username,
            setUsername,
            password,
            setPassword,
            handleLogin,
            validator
        }}>
            {children}
        </userContext.Provider>
    )
}

export default withRouter(UserContext)