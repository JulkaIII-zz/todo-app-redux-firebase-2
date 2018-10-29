export const createNote = note => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // dispatch - dispatching an action to reducer
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
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
          note
        });
      })
      .catch(err => {
        dispatch({ type: "CREATE_NOTE_ERROR", err });
      });
  };
};
