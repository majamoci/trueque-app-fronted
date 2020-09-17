import Axios from "axios";
import Auth from "utils";



export const FETCH_GET_UNIT_MEASURES_REQUEST = "FETCH_GET_UNIT_MEASURES_REQUEST";
export const FETCH_GET_UNIT_MEASURES_SUCCESS = "FETCH_GET_UNIT_MEASURES_SUCCESS";
export const FETCH_GET_UNIT_MEASURES_FAILURE = "FETCH_GET_UNIT_MEASURES_FAILURE";

export const fetchGetMeasureRequest = () => {
  return {
    type: FETCH_GET_UNIT_MEASURES_REQUEST,
  };
};

export const fetchGetMeasureSuccess = (data) => {
  return {
    type: FETCH_GET_UNIT_MEASURES_SUCCESS,
    payload: data,
  };
};

export const fetchGetMeasureFailure = (error) => {
  return {
    type: FETCH_GET_UNIT_MEASURES_FAILURE,
    payload: error,
  };
};

// la data es state:draft|published|complete
const fetchGetUnitMeasure = (data) => {
  const auth = new Auth();

  return (dispatch) => {
    dispatch(fetchGetMeasureRequest);
    Axios.get(`${process.env.REACT_APP_API_URI}api/unit_measures`, {
      headers: {
        Authorization: `Bearer ${auth.token()}`,
      },
    })
      .then((response) => {
        dispatch(fetchGetMeasureSuccess(response.data));
      })
      .catch((error) => {
        if (error.response) dispatch(fetchGetMeasureFailure(error.response.data));
        else
          dispatch(
            fetchGetMeasureFailure({
              type: "NETWORK_ERROR",
              message: "Error de Servidor. Intenta en unos minutos.",
            })
          );
      });
  };
};

export default fetchGetUnitMeasure;