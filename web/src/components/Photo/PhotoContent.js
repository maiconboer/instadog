import React from 'react';

import { Container } from './styles.PhotoContent';
import { Link } from 'react-router-dom';

const PhotoContent = ({dataPhotos}) => {
  const {dataPhoto, dataComments} = dataPhotos;

  return (
    <Container>
      {dataPhoto && console.log(dataPhoto[0])}
      <div className='image'> 
        {dataPhoto && 
        <img 
          src={dataPhoto[0].image_url} 
          alt={dataPhoto[0].description}
        />}
      </div>
         
      {dataPhoto && 
      <div className='details'>
          <div>
            <p>
              <Link to={`/users/${dataPhoto[0].id}`} />
            </p>
          </div>
      </div>
      }
     
     {dataComments && console.log(dataComments)}


    </Container>
  )
}

export default PhotoContent;
