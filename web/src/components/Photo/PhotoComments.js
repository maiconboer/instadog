import React from 'react';

import { UserContext } from '../../contexts/UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';

import { List } from './styles.PhotoComments';

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments)
  const commentsSection = React.useRef(null);

  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;

  },[comments]);

  return (
    <>
      <List ref={commentsSection} className='comment'>
        {comments.map(item => (
          <li key={item.id}>
            <b>autor: </b>
            <span>{item.comment}</span>
          </li>
        ))}
      </List>

      {login && 
        <PhotoCommentsForm 
          photoID={props.photoID} 
          setComments={setComments}
        />
      }
    </>
  )
}

export default PhotoComments;
