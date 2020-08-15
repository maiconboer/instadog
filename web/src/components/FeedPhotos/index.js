import React from 'react';
import api from '../../services/api';

import FeedPhotosItem from '../FeedPhotosItem';
import Error from '../Error';
import Loading from '../Loading';

import { Container } from './styles';

const FeedPhotos = ({ userID, page, setModalPhoto, setInfinite }) => {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [dataPhotos, setDataPhotos] = React.useState([]);

  React.useEffect(() => {

    const token = window.localStorage.getItem('@dog:token');
  
    try {
      setError(null);
      setLoading(true);
  
      if(token) {
        async function getAllPhotos() {

          let url;
          const showTotal = 9

          if(userID === undefined) {
            url = `/photos?&page=${page}`
          } else {
            url = `/photos?user_id=${userID}&page=${page}`
          }

          const response = await api.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
              cache: 'no-store'
            }
          })
          
      
          if(response && response.status === 200 && response.data.length < showTotal) {
            setInfinite(false);
          }

          setDataPhotos((dataPhotos) => response.data)    
        }

        getAllPhotos();
      }   
    } catch (error) {
      setError(error);

    } finally {
      setLoading(false);
    }
  },[page, setInfinite, userID])

  if(error) return <Error error={error} />

  return (
    <>
      {error && <Error error={error} />}
      {loading && <Loading />}

      {dataPhotos.length > 0 
      ? 
        <Container className='animeLeft'>   
          {dataPhotos.map(photo => (
            <FeedPhotosItem 
              key={photo.id} 
              photo={photo} 
              setModalPhoto={setModalPhoto}
            />
          ))}   
        </Container>
    : null }
    </>
  )
}

export default FeedPhotos;
