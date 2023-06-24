import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realizar la lógica para enviar los datos del formulario

    console.log('Username:', username);
    console.log('Password:', password);

    // Restablecer los valores del formulario
    setUsername('');
    setPassword('');

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

  };

  return (
    <form onSubmit={handleSubmit} className='forms'>
      
      <h2>Iniciar sesión</h2>
      <div>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit" id="loginButton">Iniciar sesión</button>
    </form>
  );
}

export default LoginForm;

