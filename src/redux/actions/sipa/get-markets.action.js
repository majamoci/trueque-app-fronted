import Axios from "axios";
import Auth from "utils";



export const FETCH_GET_MARKET_REQUEST = "FETCH_GET_MARKET_REQUEST";
export const FETCH_GET_MARKET_SUCCESS = "FETCH_GET_MARKET_SUCCESS";
export const FETCH_GET_MARKET_FAILURE = "FETCH_GET_MARKET_FAILURE";

export const fetchGetMarketRequest = () => {
  return {
    type: FETCH_GET_MARKET_REQUEST,
  };
};

export const fetchGetMarketSuccess = (data) => {
  return {
    type: FETCH_GET_MARKET_SUCCESS,
    payload: data,
  };
};

export const fetchGetMarketFailure = (error) => {
  return {
    type: FETCH_GET_MARKET_FAILURE,
    payload: error,
  };
};

// la data es state:draft|published|complete
const fetchGetMarket = (data) => {
  const auth = new Auth();

  return (dispatch) => {
    dispatch(fetchGetMarketRequest);
    Axios.get(`${process.env.REACT_APP_API_URI}api/markets`, {
      headers: {
        Authorization: `Bearer ${auth.token()}`,
      },
    })
      .then((response) => {
        dispatch(fetchGetMarketSuccess(response.data));
      })
      .catch((error) => {
        if (error.response) dispatch(fetchGetMarketFailure(error.response.data));
        else
          dispatch(
            fetchGetMarketFailure({
              type: "NETWORK_ERROR",
              message: "Error de Servidor. Intenta en unos minutos.",
            })
          );
      });
  };
};

export default fetchGetMarket;