import React, { Fragment } from 'react'
import Header from '../common/Header'

const MainLayout = ({children}) => {
    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>
    )
}

export default MainLayout