import Axios from "axios";

export const FETCH_CHANGE_PW_REQUEST = "FETCH_CHANGE_PW_REQUEST";
export const FETCH_CHANGE_PW_SUCCESS = "FETCH_CHANGE_PW_SUCCESS";
export const FETCH_CHANGE_PW_FAILURE = "FETCH_CHANGE_PW_FAILURE";

export const fetchChangeRequest = () => {
  return {
    type: FETCH_CHANGE_PW_REQUEST,
  };
};

export const fetchChangeSuccess = (tokens) => {
  return {
    type: FETCH_CHANGE_PW_SUCCESS,
    payload: tokens,
  };
};

export const fetchChangeFailure = (error) => {
  return {
    type: FETCH_CHANGE_PW_FAILURE,
    payload: error,
  };
};

// la data es reset_password, verify_password, token
const fetchChange = (data) => {
  return (dispatch) => {
    dispatch(fetchChangeRequest);
    Axios.post(
      `${process.env.REACT_APP_API_URI}api/reset-password`,
      data
    )
      .then((response) => {
        const result = response.data;
        dispatch(fetchChangeSuccess(result));
      })
      .catch((error) => {
        if (error.response) dispatch(fetchChangeFailure(error.response.data));
        else
          dispatch(
            fetchChangeFailure({
              type: "NETWORK_ERROR",
              message: "Error de Servidor. Intenta en unos minutos.",
            })
          );
      });
  };
};

export default fetchChange;
