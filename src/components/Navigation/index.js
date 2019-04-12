import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <Fragment>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/posts'>
                Posts
            </NavLink>

       </Fragment>
    )
}
export default Navigation;