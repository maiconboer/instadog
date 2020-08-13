import React from 'react';
import api from '../../services/api';

import { UserContext } from '../../contexts/UserContext';
import FeedPhotosItem from '../FeedPhotosItem';
import Error from '../Error';
import Loading from '../Loading';

import { Container } from './styles';

const FeedPhotos = ({ setModalPhoto }) => {
  const { data } = React.useContext(UserContext);

  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [dataPhotos, setDataPhotos] = React.useState([])

  React.useEffect(() => {

    const token = window.localStorage.getItem('@dog:token');
    const page = 1
    const id = 1

    try {
      if(token) {
        async function getAllPhotos() {
          const response = await api.get(`/photos?user_id=${id}&page=${page}`, {
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
      
    }
  },[])

  if(error) return <Error error={error} />
  if(loading) return <Loading />

  return (
    <>
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
