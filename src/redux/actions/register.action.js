import Axios from "axios";

export const FETCH_REGISTER_REQUEST = "FETCH_REGISTER_REQUEST";
export const FETCH_REGISTER_SUCCESS = "FETCH_REGISTER_SUCCESS";
export const FETCH_REGISTER_FAILURE = "FETCH_REGISTER_FAILURE";

export const fetchRegisterRequest = () => {
  return {
    type: FETCH_REGISTER_REQUEST,
  };
};

export const fetchRegisterSuccess = (tokens) => {
  return {
    type: FETCH_REGISTER_SUCCESS,
    payload: tokens,
  };
};

export const fetchRegisterFailure = (error) => {
  return {
    type: FETCH_REGISTER_FAILURE,
    payload: error,
  };
};

// la data es { name, email, password }
const fetchRegister = (data) => {
  return (dispatch) => {
    dispatch(fetchRegisterRequest);
    Axios.post(`${process.env.REACT_APP_API_URI}/api/register`, data)
      .then((response) => {
        const result = response.data;

        // guardamos en localStorage token
        sessionStorage.setItem("ACCESS_TOKEN", result.access_token);
        dispatch(fetchRegisterSuccess(result));
      })
      .catch((error) => {
        if (error.response) dispatch(fetchRegisterFailure(error.response.data));
        else
          dispatch(
            fetchRegisterFailure({
              type: "NETWORK_ERROR",
              message: "Error de Servidor. Intenta en unos minutos.",
            })
          );
      });
  };
};

export default fetchRegister;
