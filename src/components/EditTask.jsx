import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../assets/Edit.css";

const API = "http://localhost:5000/v1/todo/";

const EditTask = ({ isOpen, task, isClose }) => {
  const [taskname, setName] = useState(task.name);
  const [taskstatus, setStatus] = useState(task.status);
  const [taskid, setId] = useState(task.id);

  const handleSubmit = async (event) => {
    await fetch(`${API}/${taskid}`, {
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
          <form className="edit-form" onSubmit={handleSubmit}>
            <input
              onChange={(event) => setName(event.target.value)}
              placeholder={task.name}
              name="name"
              type="text"
            />

            <label>
              <select onChange={(event) => setStatus(event.target.value)}>
                <option value="ABIERTA">ABIERTA</option>
                <option value="EN-PROGRESO">EN PROGRESO</option>
                <option value="COMPLETADA">COMPLETADA</option>
                <option value="ARCHIVADA">ARCHIVADA</option>
              </select>
            </label>

            <button className="edit-bt">EDITAR</button>
          </form>
          <button className="cancel-bt" onClick={isClose}>
            CANCELAR
          </button>
        </div>
      </div>
    </React.Fragment>,
    document.getElementById("edit")
  );
};

export default EditTask;
