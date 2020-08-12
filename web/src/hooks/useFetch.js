import React from 'react';

import api from '../services/api';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, method, options) => {
    let response;

    try {
      setError(null);
      setLoading(true);

      response = await api[method](url, options);

      if(response.status !== 200 || response.status !== 201) {
        throw new Error({ error: 'Erro, verificar (mensagem no hook)'})
      }

    } catch (error) { 
      response = null;
      setError(error)

    } finally {
      setData(response)
      setLoading(false);
      
      return response;
    }

  },[])

  return ({ 
    data, 
    error, 
    loading,
    request
  });
}

export default useFetch;
