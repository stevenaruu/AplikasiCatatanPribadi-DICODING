const Modal = (props) => {
    const { onClick, title, body, date } = props;
    return (
        <div className="modal-container" onClick={onClick} >
            <div className="modal">
                <div className="modal-header">
                    <p>{title}</p>
                    <p>{date}</p>
                </div>
                <p>{body}</p>
            </div>
        </div>
    );
}

export default Modal;