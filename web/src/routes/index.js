import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import { UserContext } from '../contexts/UserContext';

// pages
import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import MyAccount from '../pages/MyAccount';

// components
import LostPassword from '../components/LostPassword';;

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { login } = React.useContext(UserContext);

  return (
    <Route {...rest} render={props => (
      login === true 
      ? 
        ( <Component {...props} /> ) 
      : 
        (
          <Redirect to={{ pathname: '/login', state: { from: props.location}}} />
        )
    )}
    />
  )
}

const Routes = () => {
  return (
    <Switch>  
     
      <PrivateRoute path='/' exact component={Home} />
      <PrivateRoute path='/my-account' component={MyAccount} />

      <Route path='/login' exact component={Login} />
      <Route path='/create-account' component={CreateAccount} />
      <Route path='/login/lost-password' component={LostPassword} />
      <Route path='*' component={Page404} /> 
      
    </Switch>
  )
}

export default Routes;
