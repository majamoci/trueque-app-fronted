import Axios from "axios";
import Auth from "../../../utils";

export const FETCH_PUBS_REQUEST = "FETCH_PUBS_REQUEST";
export const FETCH_PUBS_SUCCESS = "FETCH_PUBS_SUCCESS";
export const FETCH_PUBS_FAILURE = "FETCH_PUBS_FAILURE";
export const FETCH_PUBS_RESET = "FETCH_PUBS_RESET";

export const fetchPubsRequest = () => {
  return {
    type: FETCH_PUBS_REQUEST,
  };
};

export const fetchPubsSuccess = (data) => {
  return {
    type: FETCH_PUBS_SUCCESS,
    payload: data,
  };
};

export const fetchPubsFailure = (error) => {
  return {
    type: FETCH_PUBS_FAILURE,
    payload: error,
  };
};

export const fetchPubsReset = () => {
  return {
    type: FETCH_PUBS_RESET,
  };
};

// la data es state
const fetchPubs = (data) => {
  const auth = new Auth();

  return (dispatch) => {
    dispatch(fetchPubsRequest);
    Axios.get(`${process.env.REACT_APP_API_URI}api/publication/${data}`, {
      headers: {
        Authorization: `Bearer ${auth.token()}`,
      },
    })
      .then((response) => {
        dispatch(fetchPubsSuccess(response.data));
      })
      .catch((error) => {
        if (error.response) dispatch(fetchPubsFailure(error.response.data));
        else
          dispatch(
            fetchPubsFailure({
              type: "NETWORK_ERROR",
              message: "Error de Servidor. Intenta en unos minutos.",
            })
          );
      });
  };
};

export default fetchPubs;
