import { useState } from "react";
import Modal from "../modal/Modal";

const Card = (props) => {
  const { id, title, body, archived, createdAt, isArchieve, onDelete } = props;
  const date = new Date(createdAt);
  const [showModal, setShowModal] = useState(false);

  const monthNames = [
    "Januari", "Februari", "Maret",
    "April", "Mei", "Juni",
    "Juli", "Agustus", "September",
    "Oktober", "November", "Desember"
  ];

  const dayNames = [
    "Minggu", "Senin", "Selasa",
    "Rabu", "Kamis", "Jumat", "Sabtu"
  ];

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const dayOfWeek = date.getDay();

  const formattedDate = `${dayNames[dayOfWeek]}, ${day} ${monthNames[month]} ${year}`;

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
          <p className="card-date">{formattedDate}</p>
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
          date={formattedDate}
        />
      }
    </>
  )
}

export default Card;