export const createNote = note => {
  debugger
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // dispatch - dispatching an action to reducer
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    let nextNoteId = 0;
    firestore
      .collection("notes")
      .add({
        ...note,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "CREATE_NOTE",
          id: nextNoteId++,
          text: note.content,
          note
        });
      })
      .catch(err => {
        dispatch({ type: "CREATE_NOTE_ERROR", err });
      });
  };
};

export const toggleNote = id => {
    return {
      type: "TOGGLE_NOTE",
      id
    };
};