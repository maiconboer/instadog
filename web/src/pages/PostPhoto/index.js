import React from 'react';

import api from '../../services/api';
import { UserContext } from '../../contexts/UserContext';

import useForm from '../../hooks/useForm';
import UserHeader from '../../components/UserHeader';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles.js';

const PostPhoto = () => {
  const { data } = React.useContext(UserContext);
  const [image, setImage] = React.useState({})
  const [dataForUpload, setDataForUpload] = React.useState({});
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const description = useForm();
  

  async function handleSubmit(event){
    event.preventDefault()

    const formData = new FormData();
    formData.append('file', image.raw);
    formData.append('description', description.value);
    formData.append('id', data.id);

    const token = window.localStorage.getItem('@dog:token');

    // const body = {};

    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }

    if(token) {  
      const response = await api.post('/photos', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    }
  }

  function handleImageUpload({ target }) { 
    setImage({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    })
  }

  return (
    <Container className='container animeLeft'>
      <UserHeader title={'Postar foto'} />
     
     <div className='container-upload'>
        <form onSubmit={handleSubmit}>

          <Input 
            label='Descricão'
            type='text'
            name='description'
            {...description}
          />

          <input 
            type='file' 
            name='image_url' 
            id='image_url' 
            className='file'
            onChange={handleImageUpload}
          />

          <Button>Enviar</Button>
        </form>

        <div>
          {image.preview && 
            <div 
              className='preview'
              style={{backgroundImage: `url('${image.preview}')`}}
            >
            </div>
          }
        </div>
      </div>
    </Container>
  )
}

export default PostPhoto;
