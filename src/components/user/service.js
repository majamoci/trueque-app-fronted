import Axios from "axios";
import Auth from "utils";

const auth = new Auth();

export const getUser = async (id) => {
  const res = await Axios.get(`${process.env.REACT_APP_API_URI}api/profile/${id}`, {
    headers: {
      Authorization: `Bearer ${auth.token()}`,
    },
  });

  return res.data;
};