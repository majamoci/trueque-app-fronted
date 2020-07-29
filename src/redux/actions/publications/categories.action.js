import Axios from "axios";
import Auth from "../../../utils";

export const FETCH_CAT_PUBS_REQUEST = "FETCH_CAT_PUBS_REQUEST";
export const FETCH_CAT_PUBS_SUCCESS = "FETCH_CAT_PUBS_SUCCESS";
export const FETCH_CAT_PUBS_FAILURE = "FETCH_CAT_PUBS_FAILURE";
export const FETCH_CAT_PUBS_RESET = "FETCH_CAT_PUBS_RESET";

export const fetchCatPubsRequest = () => {
  return {
    type: FETCH_CAT_PUBS_REQUEST,
  };
};

export const fetchCatPubsSuccess = (data) => {
  return {
    type: FETCH_CAT_PUBS_SUCCESS,
    payload: data,
  };
};

export const fetchCatPubsFailure = (error) => {
  return {
    type: FETCH_CAT_PUBS_FAILURE,
    payload: error,
  };
};

export const fetchCatPubsReset = () => {
  return {
    type: FETCH_CAT_PUBS_RESET,
  };
};

// la data es category
const fetchPubs = (data) => {
  const auth = new Auth();

  return (dispatch) => {
    dispatch(fetchCatPubsRequest);
    Axios.get(`${process.env.REACT_APP_API_URI}api/publications/${data}`, {
      headers: {
        Authorization: `Bearer ${auth.token()}`,
      },
    })
      .then((response) => {
        dispatch(fetchCatPubsSuccess(response.data));
      })
      .catch((error) => {
        if (error.response) dispatch(fetchCatPubsFailure(error.response.data));
        else
          dispatch(
            fetchCatPubsFailure({
              type: "NETWORK_ERROR",
              message: "Error de Servidor. Intenta en unos minutos.",
            })
          );
      });
  };
};

export default fetchPubs;
