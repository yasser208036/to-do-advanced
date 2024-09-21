/* eslint-disable react/prop-types */
import Card from "./Card";

export default function Section({
  icon,
  title,
  tasks,
  status,
  handleDelete,
  onDrop,
  onDragOver,
}) {
  return (
    <section onDrop={onDrop} onDragOver={onDragOver}>
      <h1>
        <img className="head_icon" src={icon} alt="" />
        {title}
      </h1>
      {tasks.map(
        (task) =>
          task.status === status && (
            <Card
              key={task.id}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              id={task.id}
            />
          )
      )}
    </section>
  );
}
