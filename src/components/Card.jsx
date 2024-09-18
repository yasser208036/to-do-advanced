/* eslint-disable react/prop-types */
import deleteIcon from "../assets/delete.png";
import Tag from "./Tag";
export default function Card({ title, tags, handleDelete, index }) {
  return (
    <div className="card">
      <p>{title}</p>
      <div className="card_bottom">
        <div className="card_tags">
          {tags.map((tag) => {
            return <Tag selected tagName={tag} key={tag} />;
          })}
        </div>
        <div onClick={() => handleDelete(index)} className="task_delete">
          <img className="delet_icon" src={deleteIcon} alt="delete icon" />
        </div>
      </div>
    </div>
  );
}
