import React, { useState, useEffect } from "react";
import form from "./form";
import { useNavigate } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
function New() {
  const navigate = useNavigate();

  
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  
  useEffect(() => {
    GetLocalCounter();
  }, []);
  
  const GetLocalCounter = () => {
    const contadorLocal = parseInt(localStorage.getItem("visits")) || 0;
    setCounter(contadorLocal);
  };
  const handleInfo = (e) => {
    e.preventDefault();
    if (user.email === "" || user.password === "") {
      console.error("Está vacío");
      alert("Campo requerido");
    } else {
      // Crear un nuevo objeto usuario y agregarlo a la lista
      navigate('/iniciar')
      const newUser = { ...user };
      setUsers([...users, newUser]);
      localStorage.setItem('user', JSON.stringify(newUser))
      // Limpiar el formulario y actualizar el estado del usuario
      setUser({
        email: "",
        password: ""
      });
    }
  };
  
  return (
    <>
      <Stack className="card">
        <form onSubmit={handleInfo}>
          <Typography>Email</Typography>
          <input
            name="email"
            type="text"
            placeholder="Email a cambiar"
            onChange={({ target: { value, name } }) =>
              setUser({ ...user, [name]: value })
            }
            value={user.email}
          />
          <Typography>Contraseña</Typography>
          <input
            name="password"
            type="text"
            placeholder="Nuevo Valor"
            onChange={({ target: { value, name } }) =>
              setUser({ ...user, [name]: value })
            }
            value={user.password}
          />
          <button>Click</button>
        </form>
      </Stack>

      {}
      <div>
        <h2>Lista de Usuarios:</h2>
        <ul>
          {users.map((u, index) => (
            <li key={index}>{JSON.stringify(u)}</li>
          ))}
        </ul>
      </div>

      <p>{counter}</p>
    </>
  );
}

export default New;
