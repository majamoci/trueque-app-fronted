import Axios from "axios";

export const FETCH_AUTH_REQUEST = "FETCH_AUTH_REQUEST";
export const FETCH_AUTH_SUCCESS = "FETCH_AUTH_SUCCESS";
export const FETCH_AUTH_FAILURE = "FETCH_AUTH_FAILURE";
export const FETCH_AUTH_RESET = "FETCH_AUTH_RESET";

export const fetchAuthRequest = () => {
  return {
    type: FETCH_AUTH_REQUEST,
  };
};

export const fetchAuthSuccess = (data) => {
  return {
    type: FETCH_AUTH_SUCCESS,
    payload: data,
  };
};

export const fetchAuthFailure = (error) => {
  return {
    type: FETCH_AUTH_FAILURE,
    payload: error,
  };
};

export const fetchAuthReset = () => {
  return {
    type: FETCH_AUTH_RESET,
  };
};

// la data es { email, password, remember }
const fetchLogin = (data) => {
  const { remember, ...formData } = data;
  return (dispatch) => {
    dispatch(fetchAuthRequest);
    Axios.post(`${process.env.REACT_APP_API_URI}api/login`, formData)
      .then((response) => {
        const { access_token, roles } = response.data;
        let _roles = [];
        roles.map((role) => (_roles = [..._roles, role.name.charAt(0)]));

        // remember = true
        if (remember) {
          localStorage.setItem("AUTH", `${access_token},${_roles}`);
        } else {
          sessionStorage.setItem("AUTH", `${access_token},${_roles}`);
        }
        dispatch(fetchAuthSuccess(response.data));
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
