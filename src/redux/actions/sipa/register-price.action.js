import Axios from "axios";
import Auth from "utils";

export const FETCH_REGISTER_PRICE_REQUEST = "FETCH_REGISTER_PRICE_REQUEST";//hacer una solicitud
export const FETCH_REGISTER_PRICE_SUCCESS = "FETCH_REGISTER_PRICE_SUCCESS";//cuando la solicitud es exitosa
export const FETCH_REGISTER_PRICE_FAILURE = "FETCH_REGISTER_PRICE_FAILURE";//cuando la solicitud cambia

export const fetchRegisterPriceRequest = () => {
    return {
      type: FETCH_REGISTER_PRICE_REQUEST,
    };
  };

  export const fetchRegisterPriceSuccess = (tokens) => {
    return {
      type: FETCH_REGISTER_PRICE_SUCCESS,
      payload: tokens,
    };
  };

  export const fetchRegisterPriceFailure = (error) => {
    return {
      type: FETCH_REGISTER_PRICE_FAILURE,
      payload: error,
    };
  };


  // la data es { name_measure}
const fetchRegisterPrice = (data) => {
    const auth = new Auth();
  console.log(data);


    return (dispatch) => {
        dispatch(fetchRegisterPriceRequest);
        Axios.post(`${process.env.REACT_APP_API_URI}api/register_price`, data, {
          headers: {
            Authorization: `Bearer ${auth.token()}`,
          },
        })
          .then((response) => {
            dispatch(fetchRegisterPriceSuccess(response.data));
          })
          .catch((error) => {
            if (error.response) dispatch(fetchRegisterPriceFailure(error.response.data));
            else
              dispatch(
                fetchRegisterPriceFailure({
                  type: "NETWORK_ERROR",
                  message: "Error de Servidor. Intenta en unos minutos.",
                })
              );
          });
      };


  };

  export default fetchRegisterPrice;