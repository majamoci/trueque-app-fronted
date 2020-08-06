import Axios from "axios";
import Auth from "utils";

export const FETCH_PROFILE_REQUEST = "FETCH_PROFILE_REQUEST";
export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
export const FETCH_PROFILE_FAILURE = "FETCH_PROFILE_FAILURE";

export const fetchProfileRequest = () => {
  return {
    type: FETCH_PROFILE_REQUEST,
  };
};

export const fetchProfileSuccess = (data) => {
  return {
    type: FETCH_PROFILE_SUCCESS,
    payload: data,
  };
};

export const fetchProfileFailure = (error) => {
  return {
    type: FETCH_PROFILE_FAILURE,
    payload: error,
  };
};

// la data es username
const fetchProfile = (data) => {
  const auth = new Auth();

  return (dispatch) => {
    dispatch(fetchProfileRequest);
    Axios.get(`${process.env.REACT_APP_API_URI}api/profile/mini/${data}`, {
      headers: {
        Authorization: `Bearer ${auth.token()}`,
      },
    })
      .then((response) => {
        dispatch(fetchProfileSuccess(response.data));
      })
      .catch((error) => {
        if (error.response) dispatch(fetchProfileFailure(error.response.data));
        else
          dispatch(
            fetchProfileFailure({
              type: "NETWORK_ERROR",
              message: "Error de Servidor. Intenta en unos minutos.",
            })
          );
      });
  };
};

export default fetchProfile;