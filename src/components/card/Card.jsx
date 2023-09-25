const Card = (props) => {
  const { id, title, body, archived, createdAt, isArchieve, onDelete } = props;
  const date = new Date(createdAt);

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
    <div className="card">
      <p className="">{title.length > 30 ? `${title.substring(0, 30)}...` : `${title}`}</p>
      <p className="">{formattedDate}</p>
      <p className="">{body}</p>
      <div className="card-button">
        <button onClick={handleArchieve}>{archived ? "Pindahkan" : "Arsipkan"}</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Card;