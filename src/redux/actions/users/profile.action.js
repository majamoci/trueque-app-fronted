import Axios from "axios";
import Auth from "utils";

export const FETCH_PROFILES_REQUEST = "FETCH_PROFILES_REQUEST";
export const FETCH_PROFILES_SUCCESS = "FETCH_PROFILES_SUCCESS";
export const FETCH_PROFILES_FAILURE = "FETCH_PROFILES_FAILURE";

export const fetchProfilesRequest = () => {
  return {
    type: FETCH_PROFILES_REQUEST,
  };
};

export const fetchProfilesSuccess = (data) => {
  return {
    type: FETCH_PROFILES_SUCCESS,
    payload: data,
  };
};

export const fetchProfilesFailure = (error) => {
  return {
    type: FETCH_PROFILES_FAILURE,
    payload: error,
  };
};

const fetchProfiles = () => {
  const auth = new Auth();

  return (dispatch) => {
    dispatch(fetchProfilesRequest);
    Axios.get(`${process.env.REACT_APP_API_URI}api/profile/${auth.getUserName()}`, {
      headers: {
        Authorization: `Bearer ${auth.token()}`,
      },
    })
      .then((response) => {
        dispatch(fetchProfilesSuccess(response.data));
      })
      .catch((error) => {
        if (error.response) dispatch(fetchProfilesFailure(error.response.data));
        else
          dispatch(
            fetchProfilesFailure({
              type: "NETWORK_ERROR",
              message: "Error de Servidor. Intenta en unos minutos.",
            })
          );
      });
  };
};

export default fetchProfiles;
