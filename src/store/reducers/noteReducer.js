const initState = {};

const noteReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_NOTE":
      return [
              ...state,
              {
                id: action.id,
                text: action.note.content,
                completed: false
              }]
    case "CREATE_NOTE_ERROR":
      return state;
    case "TOGGLE_NOTE":
      return console.log(state);
      _.map(state.notes, note => {
        note.id === action.id ? {...note, completed: !note.completed} : note
      });
    default:
      return state;
  }
};

export default noteReducer;
