import React from "react";
import moment from "moment";

const NoteSummary = ({ note, completed, onClick }) => {
  return (
    <div className="card z-depth-0 note-summary">
      <div className="card-content grey-text text-darken-3">
      <span className="card-title">{note.title}</span>
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        {note.content}
      </li>
        {/* <span style={{ color: completed ? 'red' : 'grey'}} className="card-title">
          {note.title}
        </span>
        <p>
          Posted by {note.authorFirstName} {note.authorLastName}
        </p>
        <p className="grey-text">
          {moment(note.createdAt.toDate()).calendar()}
        </p>
        <p>Completed? {completed}</p>
      </div> */}
      </div>
    </div>
    
  );
};
export default NoteSummary;
