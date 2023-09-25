import { useState } from "react";
import Modal from "../modal/Modal";
import { showFormattedDate } from "../../utils";

const Card = (props) => {
  const { id, title, body, archived, createdAt, isArchieve, onDelete } = props;
  const date = showFormattedDate(createdAt);
  const [showModal, setShowModal] = useState(false);

  const handleArchieve = () => {
    isArchieve(id);
  }

  const handleDelete = () => {
    onDelete(id)
  }

  return (
    <>
      <div className="card" onClick={() => { setShowModal(true) }}>
        <div>
          <p className="card-title">{title.length > 30 ? `${title.substring(0, 30)}...` : `${title}`}</p>
          <p className="card-date">{date}</p>
          <p className="">{body.length > 240 ? `${body.substring(0, 240)}...` : `${body}`}</p>
        </div>
        <div className="card-button">
          <button onClick={handleArchieve}>{archived ? "Pindahkan" : "Arsipkan"}</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      {showModal &&
        <Modal
          onClick={() => setShowModal(false)}
          title={title}
          body={body}
          date={date}
        />
      }
    </>
  )
}

export default Card;