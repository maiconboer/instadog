import React from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Error from '../../components/Error';
import useForm from '../../hooks/useForm';

import { Container } from './styles';

const CreateAccount = () => {  
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');
  const [error, setError] = React.useState(null);

  const history = useHistory();

  async function handleCreateUser(event) {
    event.preventDefault();
    
    try {
      const user = {
        username: username.value,
        email: email.value,
        password: password.value
      }
      const response = await api.post('/users', user, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      if(response.status === 201) {
        alert('usuário criado com sucesso, redirecionando para login, MELHORAR ESTÁ PARTE')
        history.push('/login');
      }

    } catch (error) {
      setError(error.message = 'Dados já existentes!')
    }
  }

  return (
    <Container className='animeLeft'>
      <div className='container-form'>

        <h1 className='title'>Cadastre-se</h1>

        <form onSubmit={handleCreateUser}>
          <Input 
            label='Usuário'
            type='text'
            name='username'
            {...username}
          />

          <Input 
            label='Email'
            type='email'
            name='email'
            {...email}
          />

          <Input 
            label='Senha'
            type='password'
            name='password'
            {...password}
          />

          <Button type='submit'>Cadastrar</Button>

          {error && <Error error={error} />}

        </form>
      </div>
    </Container>
  )
}

export default CreateAccount;
