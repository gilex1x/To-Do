import React, { useState, useEffect, useReducer } from "react";
const API = "http://localhost:5000/v1/todo/";

const NewTask = (props) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("ABIERTA");
  const [users, setUsers] = useState([]);
  const [names, setNames] = useState([]);
  const usersList = [];
  function User(name) {
    this.name = name;
  }
  const handleChange = (event) => {
    setNames(event.target.value.split(","));
  };

  const handleClick = (event) => {
    for (let i = 0; i < names.length; i++) {
      const user = new User(names[i]);
      usersList.push(user);
      console.log(usersList);
      setUsers(usersList);
    }
  };
  const handleSubmit = (evento) => {
    fetch("http://localhost:5000/v1/todo/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        status: status,
        users: users,
      }),
    })
      .then((response) => {
        const resultado = response.json();
        console.log(resultado);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (!props.isOpen) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="new-task">
        <div className="new-container">
          <form onSubmit={handleSubmit}>
            <input
              onChange={(event) => setName(event.target.value)}
              placeholder="Nombre de la Tarea"
              name="name"
              type="text"
            />
            <select onChange={(event) => setStatus(event.target.value)}>
              <option value="ABIERTA">ABIERTA</option>
              <option value="EN-PROGRESO">EN PROGRESO</option>
              <option value="COMPLETADA">COMPLETADA</option>
              <option value="ARCHIVADA">ARCHIVADA</option>
            </select>
            <div>
              <input
                onChange={handleChange}
                placeholder="Usuarios"
                name="userName"
                type="text"
              />
              <button type="button" onClick={handleClick}>
                Añadir usuario
              </button>
            </div>

            <button>Crear</button>
            <button onClick={props.isClose}>Cancelar</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewTask;
