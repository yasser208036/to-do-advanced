import "./App.css";
import Form from "./components/Form";
import Section from "./components/section";
import todo from "./assets/direct-hit.png";
import doing from "./assets/glowing-star.png";
import done from "./assets/check-mark-button.png";
import { useEffect, useState } from "react";
function App() {
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app">
      <header>
        <Form setTasks={setTasks} />
      </header>
      <main>
        <Section
          handleDelete={handleDelete}
          tasks={tasks}
          title="To Do"
          icon={todo}
          status="todo"
        />
        <Section
          handleDelete={handleDelete}
          tasks={tasks}
          title="Doing"
          icon={doing}
          status="doing"
        />
        <Section
          handleDelete={handleDelete}
          tasks={tasks}
          title="Done"
          icon={done}
          status="done"
        />
      </main>
    </div>
  );
}

export default App;
