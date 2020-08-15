import React from 'react';

import api from '../../services/api';

import { UserContext } from '../../contexts/UserContext';
import Head from '../../components/Head';
import useForm from '../../hooks/useForm';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Error from '../../components/Error';

import { Container } from './styles.js';

const LostPassword = () => {
  const email = useForm('email');
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function handlePasswordReset(event) {
    event.preventDefault();

    try {
      setError(null);
      setLoading(true);

      const response = await api.post()

    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }

  }

  return (
    <>
      <Head title='Recuperar senha' />
      <Container className='animeLeft'>
        <div className='container-form'>
          <h1 className='title'>Esqueceu sua senha ?</h1>
          <form onSubmit={handlePasswordReset}>
            <Input    
              type='text' 
              label='E-mail'
              name='email'
              {...email}
            />

            {loading 
              ? <Button disabled>Enviando...</Button>
              : <Button type="submit">Enviar</Button>
            }
            
            {error && <Error error={error} />}
          </form>
        </div>
      </Container>
    </>
  )
}

export default LostPassword;
