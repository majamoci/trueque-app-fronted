import Axios from "axios";
import Auth from "utils";

export const FETCH_LOCATION_REQUEST = "FETCH_LOCATION_REQUEST";
export const FETCH_LOCATION_SUCCESS = "FETCH_LOCATION_SUCCESS";
export const FETCH_LOCATION_FAILURE = "FETCH_LOCATION_FAILURE";

export const fetchLocationRequest = () => {
  return {
    type: FETCH_LOCATION_REQUEST,
  };
};

export const fetchLocationSuccess = (data) => {
  return {
    type: FETCH_LOCATION_SUCCESS,
    payload: data,
  };
};

export const fetchLocationFailure = (error) => {
  return {
    type: FETCH_LOCATION_FAILURE,
    payload: error,
  };
};

const fetchLocation = (data) => {
  const auth = new Auth();
  console.log(data);
  return (dispatch) => {
    dispatch(fetchLocationRequest);
    Axios.get(`${process.env.REACT_APP_API_URI}api/locations/detail/${data}`, {
      headers: {
        Authorization: `Bearer ${auth.token()}`,
      },
    })
      .then((response) => {
        dispatch(fetchLocationSuccess(response.data));
      })
      .catch((error) => {
        if (error.response) dispatch(fetchLocationFailure(error.response.data));
        else
          dispatch(
            fetchLocationFailure({
              type: "NETWORK_ERROR",
              message: "Error de Servidor. Intenta en unos minutos.",
            })
          );
      });
  };
};

export default fetchLocation;
