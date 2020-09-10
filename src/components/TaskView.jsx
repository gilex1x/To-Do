import React from "react";
import useInitialState from "../Hooks/useInitialState";
import Task from "./Task";
import "../assets/Tasks.css";
const API = "http://localhost:5000/v1/todo/";

const TaskView = () => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? (
    <React.Fragment>
      <button>Añadir tarea</button>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <div className="taskList">
        <div className="taskOpen">
          {initialState.todos.map(
            (item, i) => item.status === "ABIERTA" && <Task key={i} {...item} />
          )}
        </div>
        <div className="taskProgress">
          {initialState.todos.map(
            (item, i) =>
              item.status === "EN-PROGRESO" && <Task key={i} {...item} />
          )}
        </div>
        <div className="taskComplete">
          {initialState.todos.map(
            (item, i) =>
              item.status === "COMPLETADA" && <Task key={i} {...item} />
          )}
        </div>
        <div className="taskArchived">
          {initialState.todos.map(
            (item, i) =>
              item.status === "ARCHIVADA" && <Task key={i} {...item} />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TaskView;
