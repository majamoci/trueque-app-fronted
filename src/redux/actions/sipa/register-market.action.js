import Axios from "axios";
import Auth from "utils";

export const FETCH_REGISTER_MARKET_REQUEST = "FETCH_REGISTER_MARKET_REQUEST";//hacer una solicitud
export const FETCH_REGISTER_MARKET_SUCCESS = "FETCH_REGISTER_MARKET_SUCCESS";//cuando la solicitud es exitosa
export const FETCH_REGISTER_MARKET_FAILURE = "FETCH_REGISTER_MARKET_FAILURE";//cuando la solicitud cambia

export const fetchRegisterMarketRequest = () => {
    return {
      type: FETCH_REGISTER_MARKET_REQUEST,
    };
  };

  export const fetchRegisterMarketSuccess = (tokens) => {
    return {
      type: FETCH_REGISTER_MARKET_SUCCESS,
      payload: tokens,
    };
  };

  export const fetchRegisterMarketFailure = (error) => {
    return {
      type: FETCH_REGISTER_MARKET_FAILURE,
      payload: error,
    };
  };


  // la data es { name_measure}
const fetchRegisterMarket = (data) => {
    const auth = new Auth();
  console.log(data);


    return (dispatch) => {
        dispatch(fetchRegisterMarketRequest);
        Axios.post(`${process.env.REACT_APP_API_URI}api/register-market`, data, {
          headers: {
            Authorization: `Bearer ${auth.token()}`,
          },
        })
          .then((response) => {
            dispatch(fetchRegisterMarketSuccess(response.data));
          })
          .catch((error) => {
            if (error.response) dispatch(fetchRegisterMarketFailure(error.response.data));
            else
              dispatch(
                fetchRegisterMarketFailure({
                  type: "NETWORK_ERROR",
                  message: "Error de Servidor. Intenta en unos minutos.",
                })
              );
          });
      };


  };

  export default fetchRegisterMarket;