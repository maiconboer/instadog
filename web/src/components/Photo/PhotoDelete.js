import React from 'react';

import api from '../../services/api';

import { Container } from './styles.PhotoDelete';

const PhotoDelete = ({ photoID }) => {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function handleDeletePhoto() {
    const confirm = window.confirm('Tem certeza que deseja deletar?');

    if(confirm) {
      try {
        setError(null);
        setLoading(true);
  
        const token = window.localStorage.getItem('@dog:token');
        let response = false;
  
        if(token) {   
          response = await api.delete(`/photos/${photoID}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
  
          if(response.status === 200) {
            window.location.reload();
          }
        }
      } catch
       (error) {
        setError(error);
  
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <Container>
      {loading 
        ? <button disabled>Deletando...</button>
        : <button onClick={handleDeletePhoto}>Deletar</button>
      }    
    </Container>
  )
}

export default PhotoDelete;
