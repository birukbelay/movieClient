import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

export const AuthRoute = ({ component: Component,  ...rest }) => {
    const authenticated = useSelector(state => state.user.authenticated)
    return(
    <Route
        {...rest}
        render={(props) =>
            authenticated === true ? <Redirect to="/" /> : <Component {...props} />
        }
    />
)};

 const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            authenticated === true ? <Component {...props} /> :<Redirect to="/login" />
        }
    />
);

const mapStateToProps = (state) => ({
    authenticated: state.auth.authenticated
});


export default connect(mapStateToProps)(ProtectedRoute);