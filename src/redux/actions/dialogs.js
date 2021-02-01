import { dialogsApi } from "utils/api/dialog";

const actions = {
  setDialogs: (items) => ({
    type: "DIALOGS:SET_ITEMS",
    payload: items,
  }),
  fetchDialogs: () => (dispatch) => {
    dialogsApi.getAllDialogs().then(({ data }) => {
      dispatch(actions.setDialogs(data));
    });
  },
};

export default actions;
