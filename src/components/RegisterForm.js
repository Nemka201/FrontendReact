import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function RegisterForm() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('');

  const [nameError, setNameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [yearError, setYearError] = useState('');

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
    }else if (!/[!@#$%^&*]/.test(value)) {
      setPasswordError('La contraseña debe contener al menos un carácter especial');
    } else {
      setPasswordError('');
    }
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);

    if (value.trim() === '') {
      setNameError('El nombre no puede estar vacío');
    } else {
      setNameError('');
    }
  };

  const handleYearChange = (event) => {
    const value = event.target.value;
    setYear(value);

    const currentYear = new Date().getFullYear();
    const selectedYear = new Date(value).getFullYear();
    const age = currentYear - selectedYear;

    if (age < 18) {
      setYearError('Debe ser mayor de 18 años');
    } else {
      setYearError('');
    }
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nameError || usernameError || passwordError || yearError) {
      console.log('Por favor, corrija los errores antes de enviar el formulario');
      return;
    }else{
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
}

  return (
    <form onSubmit={handleSubmit} className="forms register">
      <h2>Registro</h2>
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
      <div>
        <label htmlFor="name">Nombre Completo:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder='Ingrese su nombre y apellido'
        />
        {nameError && <div className="error">{nameError}</div>}
      </div>
      <div>
        <label htmlFor="year">Fecha de Nacimiento:</label>
        <input
          type="date"
          id="year"
          value={year}
          onChange={handleYearChange}
        />
        {yearError && <div className="error">{yearError}</div>}
      </div>
      <div className='gender-form'>
        <label>Genero:</label> <br></br>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={handleGenderChange}
            className='radio-input'
            id="male"
          />
          <p className='text-radio-input'>Hombre</p>
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={handleGenderChange}
            className='radio-input'
            id="female"
          />
          <p className='text-radio-input'>Mujer</p>
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={gender === 'other'}
            onChange={handleGenderChange}
            className='radio-input'
            id="other"
          />
          <p className='text-radio-input'>Otro</p>
        </label>
      </div>
      <button type="submit" id="registerButton">Registrar</button>
    </form>
  );
}

export default RegisterForm;
