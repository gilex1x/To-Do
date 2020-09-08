import React, { useState } from "react";
import ReactDOM from "react-dom";

const API = "http://localhost:5000/v1/todo/";

const EditTask = ({ isOpen, task }) => {
  const [taskname, setName] = useState(task.name);
  const [taskstatus, setStatus] = useState(task.status);
  const [taskid, setId] = useState(task.id);
  const handleDelete = (user) => {
    fetch(`${API}/${task.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
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

  const handleEdit = (event) => {
    fetch(`${API}/${taskid}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: taskname,
        status: taskstatus,
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
                <option value="ABIERTA">ABIERTA</option>
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
