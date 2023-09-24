import { useState } from "react";
import SearchBar from "../../components/search_bar/SearchBar";
import { TemporaryNote } from "../../datas/TemporaryNote";
import Card from "../../components/card/Card";
import CardSection from "../../components/card_section/CardSection";

const HomePage = () => {
    const [notes, setNotes] = useState(TemporaryNote);
    return (
        <body>
            <header>
                <div className="title">
                    <h1>Aplikasi Catatan Pribadi</h1>
                    <p>Yuk Mulai Catatan Pertama Anda!</p>
                </div>
                <nav className="container">
                    <SearchBar />
                </nav>
            </header>
            <main>
                <article>
                    <section className="create-note">
                        <p>Create Note</p>
                        <input type="text" name="" id="" />
                    </section>
                    <CardSection title="Active Notes">
                        {notes.filter((note) => note.archived === false).map((note) => (
                            <Card
                                key={note.id}
                                id={note.id}
                                title={note.title}
                                body={note.body}
                                archived={note.archived}
                                createdAt={note.createdAt}
                            />
                        ))}
                    </CardSection>
                    <CardSection title="Archieve Notes">
                        {notes.filter((note) => note.archived === true).map((note) => (
                            <Card
                                key={note.id}
                                id={note.id}
                                title={note.title}
                                body={note.body}
                                archived={note.archived}
                                createdAt={note.createdAt}
                            />
                        ))}
                    </CardSection>
                </article>
            </main>
        </body>
    );
}

export default HomePage;