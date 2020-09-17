import Axios from "axios";
import Auth from "utils";



export const FETCH_GET_MARKET_TYP_REQUEST = "FETCH_GET_MARKET_TYP_REQUEST";
export const FETCH_GET_MARKET_TYP_SUCCESS = "FETCH_GET_MARKET_TYP_SUCCESS";
export const FETCH_GET_MARKET_TYP_FAILURE = "FETCH_GET_MARKET_TYP_FAILURE";

export const fetchGetMarketTypRequest = () => {
  return {
    type: FETCH_GET_MARKET_TYP_REQUEST,
  };
};

export const fetchGetMarketTypSuccess = (data) => {
  return {
    type: FETCH_GET_MARKET_TYP_SUCCESS,
    payload: data,
  };
};

export const fetchGetMarketTypFailure = (error) => {
  return {
    type: FETCH_GET_MARKET_TYP_FAILURE,
    payload: error,
  };
};

// la data es state:draft|published|complete
const fetchGetMarketTyp = (data) => {
  const auth = new Auth();

  return (dispatch) => {
    dispatch(fetchGetMarketTypRequest);
    Axios.get(`${process.env.REACT_APP_API_URI}api/market_types`, {
      headers: {
        Authorization: `Bearer ${auth.token()}`,
      },
    })
      .then((response) => {
        dispatch(fetchGetMarketTypSuccess(response.data));
      })
      .catch((error) => {
        if (error.response) dispatch(fetchGetMarketTypFailure(error.response.data));
        else
          dispatch(
            fetchGetMarketTypFailure({
              type: "NETWORK_ERROR",
              message: "Error de Servidor. Intenta en unos minutos.",
            })
          );
      });
  };
};

export default fetchGetMarketTyp;