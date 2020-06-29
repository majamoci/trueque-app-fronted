import Axios from "axios";

export const FETCH_ROLE_REQUEST = "FETCH_ROLE_REQUEST";
export const FETCH_ROLE_SUCCESS = "FETCH_ROLE_SUCCESS";
export const FETCH_ROLE_FAILURE = "FETCH_ROLE_FAILURE";

export const fetchRoleRequest = () => {
  return {
    type: FETCH_ROLE_REQUEST,
  };
};

export const fetchRoleSuccess = (tokens) => {
  return {
    type: FETCH_ROLE_SUCCESS,
    payload: tokens,
  };
};

export const fetchRoleFailure = (error) => {
  return {
    type: FETCH_ROLE_FAILURE,
    payload: error,
  };
};

// la data es email
const fetchRole = (data, token) => {
  return (dispatch) => {
    dispatch(fetchRoleRequest);
    Axios.get(`${process.env.REACT_APP_API_URI}/api/verify/${data}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        const result = response.data;
        dispatch(fetchRoleSuccess(result));
      })
      .catch((error) => {
        if (error.response) dispatch(fetchRoleFailure(error.response.data));
        else
          dispatch(
            fetchRoleFailure({
              type: "NETWORK_ERROR",
              message: "Error de Servidor. Intenta en unos minutos.",
            })
          );
      });
  };
};

export default fetchRole;
