import React from 'react';

import { Container } from './styles';

const Input = ({ 
  label, 
  type, 
  name, 
  value, 
  onChange, 
  error, 
  onBlur 
}) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>

      <input 
        type={type} 
        id={name} 
        name={name} 
        value={value}
        onChange={onChange}  
        onBlur={onBlur}
        required
      />

      {error && <p>{error}</p>}   
    </Container>
  )
}

export default Input;
