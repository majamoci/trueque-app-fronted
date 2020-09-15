import Axios from "axios";
import Auth from "utils";

export const FETCH_UNIT_MEASURE_REQUEST = "FETCH_UNIT_MEASURE_REQUEST";//hacer una solicitud
export const FETCH_UNIT_MEASURE_SUCCESS = "FETCH_UNIT_MEASURE_SUCCESS";//cuando la solicitud es exitosa
export const FETCH_UNIT_MEASURE_FAILURE = "FETCH_UNIT_MEASURE_FAILURE";//cuando la solicitud cambia

export const fetchUnitMeasureRequest = () => {
    return {
      type: FETCH_UNIT_MEASURE_REQUEST,
    };
  };

  export const fetchUnitMeasureSuccess = (tokens) => {
    return {
      type: FETCH_UNIT_MEASURE_SUCCESS,
      payload: tokens,
    };
  };

  export const fetchUnitMeasureFailure = (error) => {
    return {
      type: FETCH_UNIT_MEASURE_FAILURE,
      payload: error,
    };
  };


  // la data es { name_measure}
const fetchRegisterUnitMeasure = (data) => {
    const auth = new Auth();
  console.log(data);


    return (dispatch) => {
        dispatch(fetchUnitMeasureRequest);
        Axios.post(`${process.env.REACT_APP_API_URI}api/unitmeasure`, data, {
          headers: {
            Authorization: `Bearer ${auth.token()}`,
          },
        })
          .then((response) => {
            dispatch(fetchUnitMeasureSuccess(response.data));
          })
          .catch((error) => {
            if (error.response) dispatch(fetchUnitMeasureFailure(error.response.data));
            else
              dispatch(
                fetchUnitMeasureFailure({
                  type: "NETWORK_ERROR",
                  message: "Error de Servidor. Intenta en unos minutos.",
                })
              );
          });
      };


  };

  export default fetchRegisterUnitMeasure;