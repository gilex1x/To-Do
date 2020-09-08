import React, { useState } from "react";
import ReactDOM from "react-dom";
const API = "http://localhost:5000/v1/todo/";

const EditTask = ({ isOpen, task }) => {
  const [taskname, setName] = useState(task.name);
  const [taskstatus, setStatus] = useState(task.status);
  const [taskid, setId] = useState(task.id);
  const [users, setUsers] = useState(task.users);
  const handleDelete = () => {
    console.log(taskid);
  };
  const handleEdit = (event) => {
    fetch(`http://localhost:5000/v1/todo/${taskid}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: taskname,
        status: taskstatus,
        //users: task.users,
        id: taskid,
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
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <React.Fragment>
      <div className="editTask">
        <div className="editTask-container">
          <form>
            <label>
              Editar nombre
              <input
                onChange={(event) => setName(event.target.value)}
                placeholder="nombre"
                name="name"
                type="text"
              />
            </label>
            <label>
              <select onChange={(event) => setStatus(event.target.value)}>
                <option value="ARCHIVADA">ABIERTA</option>
                <option value="EN-PROGRESO">EN PROGRESO</option>
                <option value="COMPLETADA">COMPLETADA</option>
                <option value="ARCHIVADA">ARCHIVADA</option>
              </select>
            </label>
            <label>
              usuarios
              {task.users.map((user) => (
                <React.Fragment>
                  <p>{user.name}</p>
                  <p>{user._id}</p>
                  <button type="button" onClick={handleDelete}>
                    ELIMINAR USUARIO
                  </button>
                </React.Fragment>
              ))}
            </label>

            <button onClick={handleEdit}>EDITAR</button>
          </form>
        </div>
      </div>
    </React.Fragment>,
    document.getElementById("edit")
  );
};

export default EditTask;
