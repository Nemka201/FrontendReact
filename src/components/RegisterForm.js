import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function RegisterForm() {
  const navigate = useNavigate();

  // Inicia los string vacios

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('');

  // Actualiza valor estado con valor actual

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };  
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Realizar la lógica para enviar los datos del formulario

    console.log('Username:', username);
    console.log('Password:', password);

    // Restablecer los valores del formulario
    setUsername('');
    setPassword('');
    setName('');
    setYear('');
    setGender('');

    // Realiza una solicitud a la API utilizando Axios
    axios.post('http://localhost:3030/Api/Register', {
      username: username,
      password: password,
      name: name,
      year: year,
      gender:gender
    })
    .then(response => {
      const {user, message} = response.data;
    // Maneja la respuesta exitosa de la API
      console.log(message);
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
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>
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
      <div>
        <label htmlFor="name">Nombre Completo:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="year">Fecha de Nacimiento:</label>
        <input
          type="date"
          id="year"
          value={year}
          onChange={handleYearChange}
        />
      </div>
      <div>
        Genero: <br></br>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={handleGenderChange}
        />
        Hombre
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={handleGenderChange}
        />
        Mujer
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="other"
          checked={gender === 'other'}
          onChange={handleGenderChange}
        />
        Otro
      </label>
      </div>
      <button type="submit">Registrar</button>
    </form>
  );
}

export default RegisterForm;
