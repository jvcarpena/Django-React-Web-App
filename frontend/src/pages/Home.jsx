import { useEffect, useState } from "react";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";

function Home() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((result) => result.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((error) => alert(error));
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((result) => {
        if (result.status === 204) alert("Note deleted!");
        else alert("Failed to delete note.");
        getNotes(); // Instead of using js to rerender the new set of notes. just call the getNotes to render it.
      })
      .catch((error) => alert(error));
  };

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { title: formData.title, content: formData.content })
      .then((result) => {
        if (result.status === 201) alert("Note created!");
        else alert("Failed to create note.");
        setFormData({ title: "", content: "" });
        getNotes();
      })
      .catch((error) => alert(error));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>
        <h2>Notes:</h2>
        {notes.map((note) => (
          <Note note={note} onDelete={deleteNote} key={note.id} />
        ))}
      </div>
      <h2>Create a Note:</h2>
      <form onSubmit={createNote}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          required
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <label htmlFor="content">Content:</label>
        <br />
        <textarea
          type="text"
          id="content"
          name="content"
          required
          value={formData.content}
          onChange={handleChange}
          placeholder="Content"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Home;
