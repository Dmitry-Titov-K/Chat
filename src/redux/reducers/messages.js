const initialState = {
  items: [],
  currentDialogId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "MESSAGES:SET_ITEMS":
      return {
        ...state,
        items: action.payload,
      };
    case "MESSAGES:SET_CURRENT_DIALOG_ID":
      return {
        ...state,
        currentDialog: action.payload,
      };
    default:
      return state;
  }
};
