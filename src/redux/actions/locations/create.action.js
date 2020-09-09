import Axios from "axios";
import Auth from "utils";

export const FETCH_CREATE_LOCATION_REQUEST = "FETCH_CREATE_LOCATION_REQUEST";
export const FETCH_CREATE_LOCATION_SUCCESS = "FETCH_CREATE_LOCATION_SUCCESS";
export const FETCH_CREATE_LOCATION_FAILURE = "FETCH_CREATE_LOCATION_FAILURE";

export const fetchCreateLocationRequest = () => {
  return {
    type: FETCH_CREATE_LOCATION_REQUEST,
  };
};

export const fetchCreateLocationSuccess = (data) => {
  return {
    type: FETCH_CREATE_LOCATION_SUCCESS,
    payload: data,
  };
};

export const fetchCreateLocationFailure = (error) => {
  return {
    type: FETCH_CREATE_LOCATION_FAILURE,
    payload: error,
  };
};

const fetchCreateLocation = (data) => {
  const auth = new Auth();
  console.log(data);
  return (dispatch) => {
    dispatch(fetchCreateLocationRequest);
    Axios.post(`${process.env.REACT_APP_API_URI}api/locations`, {
      headers: {
        Authorization: `Bearer ${auth.token()}`,
      },
    })
      .then((response) => {
        dispatch(fetchCreateLocationSuccess(response.data));
      })
      .catch((error) => {
        if (error.response) dispatch(fetchCreateLocationFailure(error.response.data));
        else
          dispatch(
            fetchCreateLocationFailure({
              type: "NETWORK_ERROR",
              message: "Error de Servidor. Intenta en unos minutos.",
            })
          );
      });
  };
};

export default fetchCreateLocation;
