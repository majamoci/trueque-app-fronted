import Axios from "axios";
import Auth from "utils";

const auth = new Auth();

export const getProduct = async (id) => {
  const res = await Axios.get(`${process.env.REACT_APP_API_URI}api/products/${id}`, {
    headers: {
      Authorization: `Bearer ${auth.token()}`,
    },
  });

  return res.data;
}

export const getProducts = async () => {
  const res = await Axios.get(`${process.env.REACT_APP_API_URI}api/products`, {
    headers: {
      Authorization: `Bearer ${auth.token()}`,
    },
  });

  return res.data;
};

export const createProduct = async (data) => {
  const res = await Axios.post(`${process.env.REACT_APP_API_URI}api/products`, data, {
    headers: {
      Authorization: `Bearer ${auth.token()}`,
    },
  });

  return res.data;
}

export const updateProduct = async (data, id) => {
  const res = await Axios.post(`${process.env.REACT_APP_API_URI}api/products/${id}`, data, {
    headers: {
      Authorization: `Bearer ${auth.token()}`,
    },
  });

  return res.data;
}