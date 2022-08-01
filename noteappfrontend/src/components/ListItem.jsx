import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ note }) => {
  let getTime = (note) => {
    return new Date(note.update).toLocaleDateString();
  };
  return (
    <>
      <Link to={`note/${note.id}`}>
        <div className="notes-list-item">
          <h1>{note.body.length > 50 ? note.body.slice(0, 50) : note.body}</h1>
          <p>
            <span>{getTime(note)}</span>
          </p>
        </div>
      </Link>
    </>
  );
};

export default ListItem;
