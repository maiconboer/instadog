import React from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';
import Head from '../../components/Head';
import useForm from '../../hooks/useForm';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Error from '../../components/Error';

import { Container } from './styles.js';

const Login = () => {
  const email = useForm('email');
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleLogin(event) {
    event.preventDefault();

    if(email.validation() && password.validation()) {
      userLogin(email.value, password.value)
    }
  }

  return (
    <>
      <Head title='Login' />
      <Container className='animeLeft'>
        <div className='container-form'>
          <h1 className='title'>Login</h1>
          <form onSubmit={handleLogin}>
            <Input    
              type='text' 
              label='E-mail'
              name='email'
              {...email}
            />

            <Input 
              type='password' 
              label='Senha' 
              name='password'
              {...password}
            />

            {loading 
              ? <Button disabled>Carregando...</Button>
              : <Button type="submit">Entrar</Button>
            }
            
            {error && <Error error={error} />}
          </form>

          <Link to='/login/lost-password' className='lost-password'>Esqueci minha senha!</Link>

          <div className='create-account'>
            <h2>Cadastre-se</h2>
            <p>Ainda não possui conta? Cadastre-se no site.</p>
              
            <Link to='/create-account' className='btn-create-account'> 
              <Button>Criar conta</Button>  
            </Link>
                
          </div>  
        </div>
        
      </Container>
    </>
  )
}

export default Login;
