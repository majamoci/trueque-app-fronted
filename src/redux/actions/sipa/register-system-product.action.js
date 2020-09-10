import Axios from "axios";
import Auth from "utils";

export const FETCH_REGISTER_SYSTEM_PRODUCT_REQUEST = "FETCH_REGISTER_SYSTEM_PRODUCT_REQUEST";//hacer una solicitud
export const FETCH_REGISTER_SYSTEM_PRODUCT_SUCCESS = "FETCH_REGISTER_SYSTEM_PRODUCT_SUCCESS";//cuando la solicitud es exitosa
export const FETCH_REGISTER_SYSTEM_PRODUCT_FAILURE = "FETCH_REGISTER_SYSTEM_PRODUCT_FAILURE";//cuando la solicitud cambia

export const fetchRegisterSystemProductRequest = () => {
    return {
      type: FETCH_REGISTER_SYSTEM_PRODUCT_REQUEST,
    };
  };

  export const fetchRegisterSystemProductSuccess = (tokens) => {
    return {
      type: FETCH_REGISTER_SYSTEM_PRODUCT_SUCCESS,
      payload: tokens,
    };
  };

  export const fetchRegisterSystemProductFailure = (error) => {
    return {
      type: FETCH_REGISTER_SYSTEM_PRODUCT_FAILURE,
      payload: error,
    };
  };


  // la data es { name_measure}
const fetchRegisterSystemProduct = (data) => {
    const auth = new Auth();
  console.log(data);


    return (dispatch) => {
        dispatch(fetchRegisterSystemProductRequest);
        Axios.post(`${process.env.REACT_APP_API_URI}api/register_system_products`, data, {
          headers: {
            Authorization: `Bearer ${auth.token()}`,
          },
        })
          .then((response) => {
            dispatch(fetchRegisterSystemProductSuccess(response.data));
          })
          .catch((error) => {
            if (error.response) dispatch(fetchRegisterSystemProductFailure(error.response.data));
            else
              dispatch(
                fetchRegisterSystemProductFailure({
                  type: "NETWORK_ERROR",
                  message: "Error de Servidor. Intenta en unos minutos.",
                })
              );
          });
      };


  };

  export default fetchRegisterSystemProduct;