const Card = (props) => {
    const { id, title, body, archived, createdAt } = props;
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

    return (
        <div className="card">
            <p className="">{title}</p>
            <p className="">{formattedDate}</p>
            <p className="">{body}</p>
            <button>Archieve</button>
            <button>Delete</button>
        </div>
    )
}

export default Card;