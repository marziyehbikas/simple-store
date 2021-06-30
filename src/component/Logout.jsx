import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router'
import { clearUser } from '../action/user'
import { toast } from 'react-toastify';

const Logout = ({ history }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.removeItem("token")
        dispatch(clearUser())
        toast.error("Logged out")
        history.push("/")
    }, [])

    return null
}

export default withRouter(Logout)