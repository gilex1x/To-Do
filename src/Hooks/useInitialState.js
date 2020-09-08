import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [task, setTask] = useState({
    todos: [],
  });

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setTask(data));
  }, []);
  return task;
};

export default useInitialState;
