/* eslint-disable react/prop-types */
import { useState } from "react";
import Tag from "./Tag";

export default function Form({ setTasks }) {
  const [taskData, setTaskData] = useState({
    id: 0,
    task: "",
    status: "todo",
    tags: [],
  });
  // change task or status in state depending on which input changed
  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };
  // select tag or unselect tag by (add or remove tag from tags array)
  const selectTag = (tag) => {
    if (taskData.tags.includes(tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData({ ...taskData, tags: filterTags });
    } else {
      setTaskData({ ...taskData, tags: [...taskData.tags, tag] });
    }
  };
  // check Tag existence in the array
  const checkTag = (tag) => {
    return taskData.tags.includes(tag);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (taskData.task !== "" && taskData.tags.length > 0) {
      setTasks((prev) => {
        return [...prev, { ...taskData, id: prev.length + 1 }];
      });
      setTaskData({ task: "", status: "todo", tags: [] });
    }
  };
  return (
    <form onSubmit={handelSubmit} className="app_header">
      <input
        name="task"
        value={taskData.task}
        onChange={handleChange}
        type="text"
        className="task_input"
        placeholder="Enter your task"
      />
      <div className="tasks_form">
        <div>
          <Tag
            selected={checkTag("HTML")}
            selectTag={selectTag}
            tagName="HTML"
          />
          <Tag selected={checkTag("CSS")} selectTag={selectTag} tagName="CSS" />
          <Tag
            selected={checkTag("JavaScript")}
            selectTag={selectTag}
            tagName="JavaScript"
          />
          <Tag
            selected={checkTag("React")}
            selectTag={selectTag}
            tagName="React"
          />
        </div>
        <div>
          <select
            name="status"
            value={taskData.status}
            onChange={handleChange}
            className="tasks_status"
            id=""
          >
            <option value="todo">To Do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
          <button className="task_submit" type="submit">
            +Add Task
          </button>
        </div>
      </div>
    </form>
  );
}
