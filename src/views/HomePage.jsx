import { useState } from "react";
import { TemporaryNote } from "../datas/TemporaryNote";
import SearchBar from "../components/search_bar/SearchBar";
import CardSection from "../components/card_section/CardSection";
import Card from "../components/card/Card";
import Modal from "../components/modal/Modal";

const HomePage = () => {
    const [notes, setNotes] = useState(TemporaryNote);
    const [searchValue, setSearchValue] = useState('');
    const [titleValue, setTitleValue] = useState('');
    const [bodyValue, setBodyValue] = useState('');

    const handleSearchValue = (value) => {
        setSearchValue(value);
    }

    const handleTitleValue = (e) => {
        const value = e.target.value;
        setTitleValue(value);
    }

    const handleBodyValue = (e) => {
        const value = e.target.value;
        setBodyValue(value);
    }

    const handleCreateNote = () => {
        const newNote = {
            id: notes.length + 1,
            title: titleValue,
            body: bodyValue,
            archived: false,
            createdAt: new Date()
        }
        setNotes([...notes, newNote]);
    }

    const handleArchiveNote = (noteId) => {
        const updatedNotes = notes.map((note) => {
            if (note.id === noteId) {
                if (note.archived === true) {
                    return { ...note, archived: false };
                } else {
                    return { ...note, archived: true };
                }
            } else {
                return note;
            }
        });

        setNotes(updatedNotes);
    }

    const handleDeleteNote = (noteId) => {
        const updatedNotes = notes.filter((note) => note.id !== noteId);
        setNotes(updatedNotes);
    }

    return (
        <>
            <header>
                <div className="title">
                    <h1>Aplikasi Catatan Pribadi</h1>
                    <p>Yuk Mulai Catatan Pertama Anda!</p>
                </div>
                <nav className="container">
                    <SearchBar
                        onSearch={handleSearchValue}
                    />
                </nav>
            </header>
            <main>
                <article>
                    <section className="create-note">
                        <p>Buat Catatan</p>
                        <div className="title-note">
                            <input
                                type="text"
                                placeholder="Masukkan judul ..."
                                onChange={handleTitleValue}
                                maxLength={50}
                            />
                            <p>{50 - titleValue.length}</p>
                        </div>
                        <textarea
                            rows="10"
                            placeholder="Masukkan catatan ..."
                            onChange={handleBodyValue}
                        />
                        <button onClick={handleCreateNote}>Buat</button>
                    </section>
                    <CardSection title="Catatan Aktif">
                        {notes
                            .filter((note) => note.archived === false)
                            .filter((note) => note.title.toLowerCase().includes(searchValue.toLowerCase()))
                            .map((note) => (
                                <Card
                                    key={note.id}
                                    id={note.id}
                                    title={note.title}
                                    body={note.body}
                                    archived={note.archived}
                                    createdAt={note.createdAt}
                                    isArchieve={handleArchiveNote}
                                    onDelete={handleDeleteNote}
                                />
                            ))}
                    </CardSection>
                    <CardSection title="Arsip Catatan">
                        {notes
                            .filter((note) => note.archived === true)
                            .filter((note) => note.title.toLowerCase().includes(searchValue.toLowerCase()))
                            .map((note) => (
                                <Card
                                    key={note.id}
                                    id={note.id}
                                    title={note.title}
                                    body={note.body}
                                    archived={note.archived}
                                    createdAt={note.createdAt}
                                    isArchieve={handleArchiveNote}
                                    onDelete={handleDeleteNote}
                                />
                            ))}
                    </CardSection>
                </article>
            </main>
        </>
    );
}

export default HomePage;