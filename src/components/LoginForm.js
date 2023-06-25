import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);

    if (value.length < 8) {
      setUsernameError('El usuario debe tener al menos 8 caracteres');
    } else {
      setUsernameError('');
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);

    if (value.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificar si hay errores en los campos de usuario y contraseña
    if (usernameError || passwordError) {
      console.log('Por favor, corrija los errores antes de enviar el formulario');
      return;
    }else{
      // Realiza una solicitud a la API utilizando Axios
    axios.post('http://localhost:3030/Api/Login', {
      username: username,
      password: password
    })
    .then(response => {
      const user = response.data;
    // Maneja la respuesta exitosa de la API
      console.log(user);
    // Establecer un valor en la sesión
      sessionStorage.setItem('session', JSON.stringify(user));
      navigate('/');
    })
    .catch(error => {
    // Maneja el error de la API
      console.error(error);
    });
    }
  };

  return (
    <form onSubmit={handleSubmit} className='forms'>
      <h2 className='title'>Iniciar sesión</h2>
      <div>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder='Ingrese su usuario'
        />
        {usernameError && <div className="error">{usernameError}</div>}
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder='Ingrese su contraseña'
        />
        {passwordError && <div className="error">{passwordError}</div>}
      </div>
      <button type="submit" id="loginButton">Iniciar sesión</button>
    </form>
  );
}

export default LoginForm;

