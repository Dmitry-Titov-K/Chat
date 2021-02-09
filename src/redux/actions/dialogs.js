import { dialogsApi } from "utils/api";

const actions = {
  setDialogs: (items) => ({
    type: "DIALOGS:SET_ITEMS",
    payload: items,
  }),
  setCurrentDialog: (id) => ({
    type: "DIALOGS:SET_CURRENT_DIALOG",
    payload: id,
  }),
  fetchDialogs: () => async (dispatch) => {
    try {
      const data = await dialogsApi.getAllDialogs();
      return dispatch(actions.setCurrentDialog(data));
    } catch (error) {
      return error.message;
    }
  },
};

export default actions;

/* dialogsApi.getAllDialogs().then(({ data }) => {
  dispatch(actions.setDialogs(data)); */
