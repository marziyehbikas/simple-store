import { createContext } from "react";

export const userContext = createContext({
    username: '',
    setUsername: () => {},
    password: '',
    setPassword: () => {},
    handleLogin: () => { },
    validator: null
})