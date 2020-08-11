import React from 'react';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import useForm from '../../hooks/useForm';

import { Container } from './styles';

const CreateAccount = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  async function handleCreateUser(event) {
    event.preventDefault();
    
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
        </form>

      </div>
    </Container>
  )
}

export default CreateAccount;
