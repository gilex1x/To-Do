import React, { useState } from "react";
import EditTask from "./EditTask";

const Task = ({ name, status, users, id, _id }) => {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState({
    name: name,
    status: status,
    users: users,
    id: id,
    _id: _id,
  });
  const handleOpen = (event) => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <div className="task-container">
        <h2>{name}</h2>
        <p>{status}</p>
        <ul>
          {users.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul>
        <button onClick={handleOpen}>
          <strong>EDITAR</strong>
        </button>
        <EditTask isOpen={open} task={task} isClose={handleClose} />
      </div>
    </React.Fragment>
  );
};

export default Task;
