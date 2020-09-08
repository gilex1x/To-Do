import React from "react";
import TaskView from "./components/TaskView";
import Layout from "./container/layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <TaskView />
      </Layout>
    </div>
  );
}

export default App;
