import Header from "../header/Header";
import Footer from "../footer/Footer";
import axios from 'axios';
import { useEffect, useState } from "react";


function Usuario() {
  const [userName, setUserName] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userGender, setUserGender] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userLogged = JSON.parse(sessionStorage.getItem('session'));
        if (userLogged) {
          const response = await axios.get(`http://localhost:3030/Users/${userLogged.id}`);
          const userData = response.data;
          console.log(userData);
          setUserName(userData[0].name); // Actualizar el estado del usuario
          setUserAge(userData[0].year);
          setUserGender(userData[0].gender);
          console.log(userData[0].name);
        }
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <Header />
      <div className="container-fluid body">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-10">
            {userName !== null ? (
              <div className="text-white">
                <h2>Detalles del usuario:</h2>
                <p>Nombre: {userName}</p>
                <p>Fecha de nacimiento: {userAge}</p>
                <p>Género: {userGender}</p>
              </div>
            ) : (
              <p>Cargando usuario...</p>
            )}
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Usuario;
