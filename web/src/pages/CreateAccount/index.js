import React from 'react';
import api from '../../services/api';

import Head from '../../components/Head';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Error from '../../components/Error';
import useForm from '../../hooks/useForm';

import { UserContext } from '../../contexts/UserContext';

import { Container } from './styles';

const CreateAccount = () => {  
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const {userLogin} = React.useContext(UserContext);

  async function handleCreateUser(event) {
    event.preventDefault();
    let response;
    
    try {
      setError(null);
      setLoading(true);

      const user = {
        username: username.value,
        email: email.value,
        password: password.value
      }

      response = await api.post('/users', user, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      // se sucesso no cadastro, já faz login automático
      if(response.status === 201) {
        userLogin(email.value, password.value)
      }
      
    } catch (error) {
        response = null; 

        if(username.value === '' || email.value === '' || password.value === '') {
          setError(error.message = 'Preencha todos os campos!');
        } else {
          setError(error.message = 'Dados já existentes!');
        }

    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head title='Cadastro' />
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

            {loading 
            ? <Button disabled>Cadastrando...</Button>
            : <Button type='submit'>Cadastrar</Button>
            }
            
            {error && <Error error={error} />}

          </form>
        </div>
      </Container>
    </>
  )
}

export default CreateAccount;
