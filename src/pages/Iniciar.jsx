import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./iniciar.css"
const Iniciar = () => {
    const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [localUser, setLocalUser] = useState({})

  useEffect(() => {
    setLocalUser(JSON.parse(localStorage.user))
  }, []);

  const handleInfo = (e) => {
    e.preventDefault();
    if (user.email === '' || user.password === '') {
      console.error('El email o la contraseña están vacíos');
      alert('El email o la contraseña están vacíos');
    } else {
        if (user.email === localUser.email && user.password === localUser.password) {
            alert('si son')
            navigate('/form')
        }
    }
  }

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }
  console.log(localUser)
  return (
    <div className="form">
      <form onSubmit={handleInfo}>
        <h1>Iniciar sesión</h1>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label >Contraseña:</label>
          <input className="cont"
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Click</button>
      </form>
    </div>
  );
}

export default Iniciar;
