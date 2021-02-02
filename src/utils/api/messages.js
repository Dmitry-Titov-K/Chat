import { axios } from "core";

export default {
  getAllByDialogsId: (id) => axios.get(`/message?dialog=${id}`),
};
