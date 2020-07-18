import Axios from "axios";

export const FETCH_CREATE_PUB_REQUEST = "FETCH_CREATE_PUB_REQUEST";
export const FETCH_CREATE_PUB_SUCCESS = "FETCH_CREATE_PUB_SUCCESS";
export const FETCH_CREATE_PUB_FAILURE = "FETCH_CREATE_PUB_FAILURE";
export const FETCH_CREATE_PUB_RESET = "FETCH_CREATE_PUB_RESET";

export const fetchCreatePubRequest = () => {
  return {
    type: FETCH_CREATE_PUB_REQUEST,
  };
};

export const fetchCreatePubSuccess = (data) => {
  return {
    type: FETCH_CREATE_PUB_SUCCESS,
    payload: data,
  };
};

export const fetchCreatePubFailure = (error) => {
  return {
    type: FETCH_CREATE_PUB_FAILURE,
    payload: error,
  };
};

export const fetchCreatePubReset = () => {
  return {
    type: FETCH_CREATE_PUB_RESET,
  };
};

// la data es { 'title', 'price', 'address', 'category', 'available', 'description', 'photos', 'active' }
const fetchCreatePub = (data) => {
  return (dispatch) => {
    dispatch(fetchCreatePubRequest);
    Axios.post(`${process.env.REACT_APP_API_URI}api/publication`, data)
      .then((response) => {
        dispatch(fetchCreatePubSuccess(response.data));
      })
      .catch((error) => {
        if (error.response)
          dispatch(fetchCreatePubFailure(error.response.data));
        else
          dispatch(
            fetchCreatePubFailure({
              type: "NETWORK_ERROR",
              message: "Error de Servidor. Intenta en unos minutos.",
            })
          );
      });
  };
};

export default fetchCreatePub;
