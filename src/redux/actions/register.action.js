import Axios from "axios";

export const FETCH_REGISTER_REQUEST = "FETCH_REGISTER_REQUEST";
export const FETCH_REGISTER_SUCCESS = "FETCH_REGISTER_SUCCESS";
export const FETCH_REGISTER_FAILURE = "FETCH_REGISTER_FAILURE";
export const FETCH_REGISTER_RESET = "FETCH_REGISTER_RESET";

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

export const fetchRegisterReset = () => {
  return {
    type: FETCH_REGISTER_RESET,
  };
};

// la data es { name, email, password }
const fetchRegister = (data) => {
  return (dispatch) => {
    dispatch(fetchRegisterRequest);
    Axios.post(`${process.env.REACT_APP_API_URI}api/register`, data)
      .then((response) => {
        const { access_token, roles } = response.data;
        let _roles = [];
        roles.map((role) => (_roles = [..._roles, role.name.charAt(0)]));
        sessionStorage.setItem("AUTH", `${access_token},${_roles}`);

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
