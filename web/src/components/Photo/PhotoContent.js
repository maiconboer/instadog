import React from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';
import PhotoComments from '../../components/Photo/PhotoComments';
import PhotoDelete from './PhotoDelete';

import { formatDate } from '../../utils/formatDate';

import { Container } from './styles.PhotoContent';

const PhotoContent = ({dataPhotos}) => {
  const user = React.useContext(UserContext);
  const {dataPhoto, dataComments} = dataPhotos;

  return (
    <Container>
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
            <div className='author'>

              {user.data && user.data.username === dataPhoto[0].username
                ? <PhotoDelete photoID={dataPhoto[0].id}/>

                : <Link to={`/users/${dataPhoto[0].username}`}>
                    @{dataPhoto[0].username}
                  </Link>
              }
              
              <span className='likes'> 1000</span>
            </div>

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
     
     {dataComments && 
        <PhotoComments 
          photoID={dataPhoto[0].id} 
          comments={dataComments} 
        />
      }
    </Container>
  )
}

export default PhotoContent;
