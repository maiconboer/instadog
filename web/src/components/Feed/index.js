import React from 'react';

import FeedModal from '../FeedModal';
import FeedPhotos from '../FeedPhotos';

import { Container } from './styles';

const Feed = ({userID}) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;

    function infiniteScroll() {

      if(infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
  
        if(scroll > height * .75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          
          wait = true;
  
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      } 
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);

    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    }

  }, [infinite])

  return (
    <Container>
      {modalPhoto && 
        <FeedModal 
          photo={modalPhoto} 
          setModalPhoto={setModalPhoto} 
        />
      } 

      {pages.map(page => (
        <FeedPhotos 
          key={page}
          userID={userID}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        /> 
      ))}

    </Container>
  )
}

export default Feed;
