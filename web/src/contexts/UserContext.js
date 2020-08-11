import React, { createContext } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../services/api';

export const UserContext = createContext();

export const UserAuth = ({children}) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const history = useHistory();

  // Deslogando user
  const userLogout = React.useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('@dog:token');
    window.localStorage.removeItem('@dog:id');
    history.push('/login');
  }, [history]);

  // se possuir token válido, faz o login automático (expira 24h)
  React.useEffect(() => {
    async function automaticLogin() {

      const token = window.localStorage.getItem('@dog:token');
      const id = window.localStorage.getItem('@dog:id');

      if(token) {
        try {
          setError(null);
          setLoading(true);

          const response = await api.post('/token/validate', {}, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          if(response.status !== 200) {
            throw new Error('Token inválido');
          }     

          await getUser(token, id);
          history.push('/');

        } catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }

    automaticLogin();
  },[history, userLogout])

  // Post do token, retorna dados do usuário
  async function getUser(token, id) {

    const response = await api.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    setData(response.data[0]);
    setLogin(true); 
  }

  // Logando na aplicação - token retornado como resposta
  async function userLogin(email, password) {
    const user = { email, password }

    try {
      setError(null);
      setLoading(true);

      const responseToken = await api.post('/authenticate', user, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if(responseToken.status !== 200) {
        throw new Error(`Error: ${responseToken.statusText}`);
      }
      
      const { token } = responseToken.data;
      const { id } = responseToken.data.user[0];

      window.localStorage.setItem('@dog:token', token);
      window.localStorage.setItem('@dog:id', id);

      await getUser(token, id);
      history.push('/');

    } catch (error) {
      setError(error.message);
      setLogin(false);

    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider value={{ 
      userLogin, 
      userLogout, 
      data, 
      error, 
      loading, 
      login 
    }}>
      {children}
    </UserContext.Provider>
  )
}

