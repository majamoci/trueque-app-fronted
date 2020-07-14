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
    Axios.post(`${process.env.REACT_APP_API_URI}api/register`, data)
    .then((response) => {
        const { access_token, roles } = response.data;

        // guardamos en sessionStorage token
        sessionStorage.setItem("ACCESS_TOKEN", access_token);
        sessionStorage.setItem("AUTH", `${access_token},${roles.charAt(0)}`);
        sessionStorage.setItem("ROLES", JSON.stringify([roles]));
        dispatch(fetchRegisterSuccess(response.data));
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
