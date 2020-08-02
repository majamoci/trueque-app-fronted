import Axios from "axios";

export const FETCH_SEND_PW_REQUEST = "FETCH_SEND_PW_REQUEST";
export const FETCH_SEND_PW_SUCCESS = "FETCH_SEND_PW_SUCCESS";
export const FETCH_SEND_PW_FAILURE = "FETCH_SEND_PW_FAILURE";
export const FETCH_SEND_PW_RESET = "FETCH_SEND_PW_RESET";

export const fetchResetRequest = () => {
  return {
    type: FETCH_SEND_PW_REQUEST,
  };
};

export const fetchResetSuccess = (tokens) => {
  return {
    type: FETCH_SEND_PW_SUCCESS,
    payload: tokens,
  };
};

export const fetchResetFailure = (error) => {
  return {
    type: FETCH_SEND_PW_FAILURE,
    payload: error,
  };
};

export const fetchResetBlank = () => {
  return {
    type: FETCH_SEND_PW_RESET,
  };
};

// la data es reset_email
const fetchReset = (data) => {
  return (dispatch) => {
    dispatch(fetchResetRequest);
    Axios.post(
      `${process.env.REACT_APP_API_URI}api/send-reset-password`,
      data
    )
      .then((response) => {
        const result = response.data;
        dispatch(fetchResetSuccess(result));
      })
      .catch((error) => {
        if (error.response) dispatch(fetchResetFailure(error.response.data));
        else
          dispatch(
            fetchResetFailure({
              type: "NETWORK_ERROR",
              message: "Error de Servidor. Intenta en unos minutos.",
            })
          );
      });
  };
};

export default fetchReset;
