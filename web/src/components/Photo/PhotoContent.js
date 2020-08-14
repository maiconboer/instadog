import React from 'react';
import { Link } from 'react-router-dom';

import { formatDate } from '../../utils/formatDate';

import PhotoComments from '../../components/Photo/PhotoComments';
import { Container } from './styles.PhotoContent';

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
            <p className='author'>
              <Link to={`/users/${dataPhoto[0].username}`}>
                @{dataPhoto[0].username}
              </Link>
              <span className='likes'> 1000</span>
            </p>

            <h1 className='title'>
              <a 
                href={dataPhoto[0].image_url} 
                target='_blank'
                rel="noopener noreferrer"
              >
                {dataPhoto[0].description}
              </a>
            </h1>

            <ul className='attributes'>
              <li>Postado em: {formatDate(dataPhoto[0].created_at)}</li>
            </ul>
          </div>
        </div>
      }
     
     {dataComments && console.log(dataComments)}
     {dataComments && 
        <PhotoComments 
          id={dataPhoto[0].id} 
          comments={dataComments} 
        />
      }
    </Container>
  )
}

export default PhotoContent;
