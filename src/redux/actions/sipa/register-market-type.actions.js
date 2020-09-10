import Axios from "axios";
import Auth from "utils";

export const FETCH_MARKET_TYPE_REQUEST = "FETCH_MARKET_TYPE_REQUEST";//hacer una solicitud
export const FETCH_MARKET_TYPE_SUCCESS = "FETCH_MARKET_TYPE_SUCCESS";//cuando la solicitud es exitosa
export const FETCH_MARKET_TYPE_FAILURE = "FETCH_MARKET_TYPE_FAILURE";//cuando la solicitud cambia

export const fetchMarketTypeRequest = () => {
    return {
      type: FETCH_MARKET_TYPE_REQUEST,
    };
  };

  export const fetchMarketTypeSuccess = (tokens) => {
    return {
      type: FETCH_MARKET_TYPE_SUCCESS,
      payload: tokens,
    };
  };

  export const fetchMarketTypeFailure = (error) => {
    return {
      type: FETCH_MARKET_TYPE_FAILURE,
      payload: error,
    };
  };


  // la data es { name_tp}
const fetchRegister = (data) => {
    const auth = new Auth();
  console.log(data);


    return (dispatch) => {
        dispatch(fetchMarketTypeRequest);
        Axios.post(`${process.env.REACT_APP_API_URI}api/markettype`, data, {
          headers: {
            Authorization: `Bearer ${auth.token()}`,
          },
        })
          .then((response) => {
            dispatch(fetchMarketTypeSuccess(response.data));
          })
          .catch((error) => {
            if (error.response) dispatch(fetchMarketTypeFailure(error.response.data));
            else
              dispatch(
                fetchMarketTypeFailure({
                  type: "NETWORK_ERROR",
                  message: "Error de Servidor. Intenta en unos minutos.",
                })
              );
          });
      };


  };

  export default fetchRegister;
