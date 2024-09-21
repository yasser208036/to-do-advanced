/* eslint-disable react/prop-types */
import deleteIcon from "../assets/delete.png";
import Tag from "./Tag";

export default function Card({ title, tags, handleDelete, id }) {
  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("text/plain", taskId.toString());
  };

  const handleDragEnd = (e) => {
    e.dataTransfer.clearData();
  };

  return (
    <div
      className="card"
      draggable
      onDragStart={(e) => handleDragStart(e, id)}
      onDragEnd={handleDragEnd}
    >
      <p>
        {id} : {title}
      </p>
      <div className="card_bottom">
        <div className="card_tags">
          {tags.map((tag) => (
            <Tag selected tagName={tag} key={tag} />
          ))}
        </div>
        <div onClick={() => handleDelete(id)} className="task_delete">
          <img className="delet_icon" src={deleteIcon} alt="delete icon" />
        </div>
      </div>
    </div>
  );
}
