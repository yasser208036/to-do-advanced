import "./App.css";
import Form from "./components/Form";
import Section from "./components/Section";
import todo from "./assets/direct-hit.png";
import doing from "./assets/glowing-star.png";
import done from "./assets/check-mark-button.png";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );

  const handleDelete = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDrop = (e, status) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id.toString() === taskId) {
          return { ...task, status };
        }
        return task;
      });
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

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
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "todo")}
        />
        <Section
          handleDelete={handleDelete}
          tasks={tasks}
          title="Doing"
          icon={doing}
          status="doing"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "doing")}
        />
        <Section
          handleDelete={handleDelete}
          tasks={tasks}
          title="Done"
          icon={done}
          status="done"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "done")}
        />
      </main>
    </div>
  );
}

export default App;
