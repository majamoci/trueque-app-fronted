import Axios from "axios";
import Auth from "utils";

const auth = new Auth();

export const deleteOffers = async (id) => {
  const res = await Axios.delete(`${process.env.REACT_APP_API_URI}api/offers/${id}`, {
    headers: {
      Authorization: `Bearer ${auth.token()}`,
    },
  });

  return res.data;
};