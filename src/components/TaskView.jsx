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
            (item, index) =>
              item.status === "ABIERTA" && (
                <React.Fragment>
                  <Task key={index} {...item} />
                </React.Fragment>
              )
          )}
        </div>
        <div className="taskProgress">
          {initialState.todos.map(
            (item, index) =>
              item.status === "EN-PROGRESO" && (
                <React.Fragment>
                  <Task key={index} {...item} />
                </React.Fragment>
              )
          )}
        </div>
        <div className="taskComplete">
          {initialState.todos.map(
            (item, index) =>
              item.status === "COMPLETADA" && (
                <React.Fragment>
                  <Task key={index} {...item} />
                </React.Fragment>
              )
          )}
        </div>
        <div className="taskArchived">
          {initialState.todos.map(
            (item, index) =>
              item.status === "ARCHIVADA" && (
                <React.Fragment>
                  <Task key={index} {...item} />
                </React.Fragment>
              )
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TaskView;
