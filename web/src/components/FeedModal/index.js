import React from 'react';
import api from '../../services/api';

import PhotoContent from '../Photo/PhotoContent';
import Error from '../Error';
import Loading from '../Loading';

import { Container } from './styles';

const FeedModal = ({photo, setModalPhoto}) => {

  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [dataPhotos, setDataPhotos] = React.useState([])

  React.useEffect(() => {

    const token = window.localStorage.getItem('@dog:token');
    const id = photo.id

    try {
      setError(null);
      setLoading(true);

      if(token) {
        async function getAllPhotos() {
          const response = await api.get(`/photos/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              cache: 'no-store'
            }
          })

          setDataPhotos((dataPhotos) => response.data)    
        }
        getAllPhotos();
      }        
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false);
    }

  },[photo])

  function handleOutsideClick(event){
    if(event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <Container onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}

      {dataPhotos && <PhotoContent dataPhotos={dataPhotos} />}
    </Container>
  )
}

export default FeedModal;
