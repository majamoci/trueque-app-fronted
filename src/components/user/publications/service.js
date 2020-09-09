import Axios from "axios";
import Auth from "utils";

const auth = new Auth();

export const getPublication = async (id) => {
  const res = await Axios.get(`${process.env.REACT_APP_API_URI}api/publication/detail/${id}`, {
    headers: {
      Authorization: `Bearer ${auth.token()}`,
    },
  });

  return res.data;
};

export const createPublication = async (data) => {
  const formData = new FormData();
  const { photos, ...rest } = data;
  const new_data = { ...rest, ...photos };

  for (let key in new_data) {
    const k = ["0", "1", "2", "3", "4"].includes(key);
    formData.append(k ? "photos[]" : key, new_data[key]);
  }
  formData.append('user_id', 4);

  const res = await Axios.post(`${process.env.REACT_APP_API_URI}api/publication`, formData, {
    headers: {
      Authorization: `Bearer ${auth.token()}`,
    },
  });

  return res.data;
};

export const updatePublication = async (data, id) => {
  let new_data = { 'user_id': 4, ...data }

  const res = await Axios.post(`${process.env.REACT_APP_API_URI}api/publication/update/${id}`, new_data, {
    headers: {
      Authorization: `Bearer ${auth.token()}`,
    },
  });

  return res.data;
};

export const deletePublication = async (id) => {
  const res = await Axios.delete(`${process.env.REACT_APP_API_URI}api/publication/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${auth.token()}`,
    },
  });

  return res.data;
};
