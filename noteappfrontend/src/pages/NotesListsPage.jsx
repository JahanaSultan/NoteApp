import React, { useEffect, useState } from "react";
import AddButton from "../components/AddButton";
import ListItem from "../components/ListItem";

const NotesListsPage = () => {
  let [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("/api/notes/")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <div className="notes">
        <div className="notes-header">
            <h2 className="notes-title">&#9782;</h2>
            <p className="notes-count">{notes.length}</p>
        </div>
      <div className="notes-list">
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
      <AddButton/>
    </div>
  );
};

export default NotesListsPage;
