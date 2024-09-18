/* eslint-disable react/prop-types */
import Card from "./Card";
export default function Section({ icon, title, tasks, status, handleDelete }) {
  return (
    <section>
      <h1>
        <img className="head_icon" src={icon} alt="" />
        {title}
      </h1>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <Card
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
}
