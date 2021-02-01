import { axios } from "core";

export default {
  getAllMessages: () => axios.get("/dialogs"),
};
