import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import MainLayout from './layout/MainLayout'
import Products from './Products'
import Cart from './Cart';
import Login from './Login';
import UserContext from './context/UserContext.jsx';
import { isEmpty } from 'lodash';
import { useSelector } from 'react-redux';
import Logout from './Logout';
import AdminPanel from './admin/adminPanel';
import AdminContext from './context/AdminContext.jsx';

const RouterFile = () => {
    const user = useSelector(state => state.user)
    return (
        <MainLayout>
            <Switch>
                <Route path="/admin-panel" render={() => isEmpty(user) ? <Redirect to="/" /> : <AdminContext><AdminPanel /></AdminContext>} />
                <Route path="/logout" render={() => isEmpty(user) ? <Redirect to="/" /> : <Logout />} />
                <Route path="/login" render={ () => isEmpty(user) ?
                    <UserContext>
                        <Login />
                    </UserContext> : <Redirect to="/" />
                } />
                <Route path="/cart" component={Cart} />
                <Route exact path="/" component={Products} />
            </Switch>
        </MainLayout>
    )
}

export default RouterFile