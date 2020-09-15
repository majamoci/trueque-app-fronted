import Axios from "axios";
import Auth from "utils";

export const FETCH_REGISTER_SECTOR_REQUEST = "FETCH_REGISTER_SECTOR_REQUEST";//hacer una solicitud
export const FETCH_REGISTER_SECTOR_SUCCESS = "FETCH_REGISTER_SECTOR_SUCCESS";//cuando la solicitud es exitosa
export const FETCH_REGISTER_SECTOR_FAILURE = "FETCH_REGISTER_SECTOR_FAILURE";//cuando la solicitud cambia

export const fetchRegisterSectorRequest = () => {
    return {
      type: FETCH_REGISTER_SECTOR_REQUEST,
    };
  };

  export const fetchRegisterSectorSuccess = (tokens) => {
    return {
      type: FETCH_REGISTER_SECTOR_SUCCESS,
      payload: tokens,
    };
  };

  export const fetchRegisterSectorFailure = (error) => {
    return {
      type: FETCH_REGISTER_SECTOR_FAILURE,
      payload: error,
    };
  };


  // la data es { name_measure}
const fetchRegisterSector = (data) => {
    const auth = new Auth();
  console.log(data);


    return (dispatch) => {
        dispatch(fetchRegisterSectorRequest);
        Axios.post(`${process.env.REACT_APP_API_URI}api/register_market_sectors`, data, {
          headers: {
            Authorization: `Bearer ${auth.token()}`,
          },
        })
          .then((response) => {
            dispatch(fetchRegisterSectorSuccess(response.data));
          })
          .catch((error) => {
            if (error.response) dispatch(fetchRegisterSectorFailure(error.response.data));
            else
              dispatch(
                fetchRegisterSectorFailure({
                  type: "NETWORK_ERROR",
                  message: "Error de Servidor. Intenta en unos minutos.",
                })
              );
          });
      };


  };

  export default fetchRegisterSector;