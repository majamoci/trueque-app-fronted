import Axios from "axios";

export const FETCH_AUTH_REQUEST = "FETCH_AUTH_REQUEST";
export const FETCH_AUTH_SUCCESS = "FETCH_AUTH_SUCCESS";
export const FETCH_AUTH_FAILURE = "FETCH_AUTH_FAILURE";

export const fetchAuthRequest = () => {
  return {
    type: FETCH_AUTH_REQUEST,
  };
};

export const fetchAuthSuccess = (tokens) => {
  return {
    type: FETCH_AUTH_SUCCESS,
    payload: tokens,
  };
};

export const fetchAuthFailure = (error) => {
  return {
    type: FETCH_AUTH_FAILURE,
    payload: error,
  };
};

// la data es { email, password }
const fetchLogin = (data) => {
  return (dispatch) => {
    dispatch(fetchAuthRequest);
    Axios.post(`${process.env.REACT_APP_API_URI}/api/login`, data)
      .then((response) => {
        const result = response.data;

        // guardamos en localStorage token
        sessionStorage.setItem("ACCESS_TOKEN", result.access_token);
        dispatch(fetchAuthSuccess(result));
      })
      .catch((error) => {
        if (error.response) dispatch(fetchAuthFailure(error.response.data));
        else
          dispatch(
            fetchAuthFailure({
              type: "NETWORK_ERROR",
              message: "Error de Servidor. Intenta en unos minutos.",
            })
          );
      });
  };
};

export default fetchLogin;
