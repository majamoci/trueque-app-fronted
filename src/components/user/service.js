import Axios from "axios";
import Auth from "utils";

export const getUser = async (id) => {
  const auth = new Auth();
  const res = await Axios.get(`${process.env.REACT_APP_API_URI}api/profile/${id}`, {
    headers: {
      Authorization: `Bearer ${auth.token()}`,
    },
  });

  return res.data;
};