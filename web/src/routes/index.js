import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import { UserContext } from '../contexts/UserContext';

// pages
import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import MyAccount from '../pages/MyAccount';
import PostPhoto from '../pages/PostPhoto';
import Statistics from '../pages/Statistics';
import UserProfile from '../pages/UserProfile';
import LostPassword from '../pages/LostPassword';;

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
     
      {/* private routes */}
      <PrivateRoute path='/' exact component={Home} />
      <PrivateRoute path='/my-account' component={MyAccount} />
      <PrivateRoute path='/user/post-photo' component={PostPhoto} />
      <PrivateRoute path='/user/statistics' component={Statistics} />
      <PrivateRoute path='/user/:id/:user' component={UserProfile} />

      {/* public routes */}
      <Route path='/create-account' component={CreateAccount} />
      <Route path='/login' exact component={Login} />
      <Route path='/login/lost-password' component={LostPassword} />
      <Route path='*' component={Page404} /> 
      
    </Switch>
  )
}

export default Routes;
