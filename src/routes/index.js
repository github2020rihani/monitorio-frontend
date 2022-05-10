import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SamplePage from './Pages/SamplePage';
import Error404 from './Pages/404';
import Login from './Auth/Login';
import Register from './Auth/Register';
import ForgotPasswordPage from './Auth/ForgotPassword';
import Profile from './Pages/Profile';
import StatUsers from './Pages/statistiques/User';
import StatProjet from './Pages/statistiques/Projet';

const RestrictedRoute = ({ component: Component, ...rest }) => {
  const { authUser } = useSelector(({ auth }) => auth);
  return (
    <Route
      {...rest}
      render={props =>
        authUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const Routes = () => {
  const { authUser } = useSelector(({ auth }) => auth);
  const location = useLocation();


  if (location.pathname === '' || location.pathname === '/') {
    return <Redirect to={'/signin'} />;
  } else if (authUser && (location.pathname === '/signin' || location.pathname === '/signup' )) {
      return <Redirect to={'/dashboard'} />;
  }



  return (
    <React.Fragment>
      <Switch>
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/dashboard" component={SamplePage} />
        <Route path="/forgot-password" component={ForgotPasswordPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/statistique/users" component={StatUsers} />
        <Route path="/statistique/projets" component={StatProjet} />
        <Route component={Error404} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;;
