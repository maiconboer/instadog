import React from 'react';

import api from '../../services/api';
import { UserContext } from '../../contexts/UserContext';
import Error from '../Error';

import {ReactComponent as SubmitIcon} from '../../assets/icons/enviar.svg'

import { Form } from './styles.PhotoCommentsForm';

const PhotoCommentsForm = ({photoID, setComments}) => {
  const { data } = React.useContext(UserContext);

  const [comment, setComment] = React.useState('');
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError(null);
      setLoading(true);

      const token = window.localStorage.getItem('@dog:token');   

      if(comment.length === 0) {
        setError('Preencha este campo!');
        return
      }

      const body = {
        comment,
        user_id: data.id
      }

      const response = await api.post(`/photos/${photoID}/comments`, body, {
        headers: {
          Authorization: `Bearer ${token}`
        }
       })

      if(response.status !== 201) {
        setError('Erro no envio do comentário!')
      }

      const newComment = response.data[0];
      
      setComment('');
      setComments((comments) => [...comments, newComment])

    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <textarea 
        id='comment'
        name='comment'
        value={comment} 
        onChange={({target}) => setComment(target.value)}  
        placeholder='Comente...'
        required
      />

      <button>
        <SubmitIcon />
      </button>

    {error && <Error error={error} />}

    </Form>
    
  )
}

export default PhotoCommentsForm;
