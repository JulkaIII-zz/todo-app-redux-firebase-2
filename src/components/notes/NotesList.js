import React from "react";
import NoteSummary from "./NoteSummary";
import { Link } from "react-router-dom";
import CreateNote from "./CreateNote";
import { toggleNote } from "../../store/actions/noteActions";

const NoteList = ({ notes }) => {
  return (
    <div className="note-list section">
      <CreateNote />
      {notes &&
        notes.map(note => {
          return (
            // <Link to={`/note/${note.id}`} key={note.id}>
              <NoteSummary note={note} key={note.id} onClick={() => toggleNote(note.id)}/>
            // </Link>
          );
        })}
    </div>
  );
};

export default NoteList;
