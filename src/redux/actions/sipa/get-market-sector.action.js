import Axios from "axios";
import Auth from "utils";



export const FETCH_GET_MARKET_SECTOR_REQUEST = "FETCH_GET_MARKET_SECTOR_REQUEST";
export const FETCH_GET_MARKET_SECTOR_SUCCESS = "FETCH_GET_MARKET_SECTOR_SUCCESS";
export const FETCH_GET_MARKET_SECTOR_FAILURE = "FETCH_GET_MARKET_SECTOR_FAILURE";

export const fetchGetMarketSectorRequest = () => {
  return {
    type: FETCH_GET_MARKET_SECTOR_REQUEST,
  };
};

export const fetchGetMarketSectorSuccess = (data) => {
  return {
    type: FETCH_GET_MARKET_SECTOR_SUCCESS,
    payload: data,
  };
};

export const fetchGetMarketSectorFailure = (error) => {
  return {
    type: FETCH_GET_MARKET_SECTOR_FAILURE,
    payload: error,
  };
};

// la data es state:draft|published|complete
const fetchGetMarketSector = (data) => {
  const auth = new Auth();

  return (dispatch) => {
    dispatch(fetchGetMarketSectorRequest);
    Axios.get(`${process.env.REACT_APP_API_URI}api/market_sectors`, {
      headers: {
        Authorization: `Bearer ${auth.token()}`,
      },
    })
      .then((response) => {
        dispatch(fetchGetMarketSectorSuccess(response.data));
      })
      .catch((error) => {
        if (error.response) dispatch(fetchGetMarketSectorFailure(error.response.data));
        else
          dispatch(
            fetchGetMarketSectorFailure({
              type: "NETWORK_ERROR",
              message: "Error de Servidor. Intenta en unos minutos.",
            })
          );
      });
  };
};

export default fetchGetMarketSector;