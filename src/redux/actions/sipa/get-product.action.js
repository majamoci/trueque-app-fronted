import Axios from "axios";
import Auth from "utils";



export const FETCH_GET_PRODUCT_REQUEST = "FETCH_GET_PRODUCT_REQUEST";
export const FETCH_GET_PRODUCT_SUCCESS = "FETCH_GET_PRODUCT_SUCCESS";
export const FETCH_GET_PRODUCT_FAILURE = "FETCH_GET_PRODUCT_FAILURE";

export const fetchGetProductRequest = () => {
  return {
    type: FETCH_GET_PRODUCT_REQUEST,
  };
};

export const fetchGetProductSuccess = (data) => {
  return {
    type: FETCH_GET_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const fetchGetProductFailure = (error) => {
  return {
    type: FETCH_GET_PRODUCT_FAILURE,
    payload: error,
  };
};

// la data es state:draft|published|complete
const fetchGetProduct = (data) => {
  const auth = new Auth();

  return (dispatch) => {
    dispatch(fetchGetProductRequest);
    Axios.get(`${process.env.REACT_APP_API_URI}api/system_products`, {
      headers: {
        Authorization: `Bearer ${auth.token()}`,
      },
    })
      .then((response) => {
        dispatch(fetchGetProductSuccess(response.data));
      })
      .catch((error) => {
        if (error.response) dispatch(fetchGetProductFailure(error.response.data));
        else
          dispatch(
            fetchGetProductFailure({
              type: "NETWORK_ERROR",
              message: "Error de Servidor. Intenta en unos minutos.",
            })
          );
      });
  };
};

export default fetchGetProduct;