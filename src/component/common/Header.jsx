import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { isEmpty } from 'lodash';

const Header = () => {
    const user = useSelector(state => state.user)
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">cart</Link></li>
                {isEmpty(user) ? <li><Link to="/login">Login</Link></li> : <li><Link to="/admin-panel">{user.username}</Link></li>}
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    )
}

export default Header