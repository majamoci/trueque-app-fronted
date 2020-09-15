import Axios from "axios";
import Auth from "utils";

export const FETCH_REGISTER_CATEGORY_REQUEST = "FETCH_REGISTER_CATEGORY_REQUEST";//hacer una solicitud
export const FETCH_REGISTER_CATEGORY_SUCCESS = "FETCH_REGISTER_CATEGORY_SUCCESS";//cuando la solicitud es exitosa
export const FETCH_REGISTER_CATEGORY_FAILURE = "FETCH_REGISTER_CATEGORY_FAILURE";//cuando la solicitud cambia

export const fetchRegisterCategoryRequest = () => {
    return {
      type: FETCH_REGISTER_CATEGORY_REQUEST,
    };
  };

  export const fetchRegisterCategorySuccess = (tokens) => {
    return {
      type: FETCH_REGISTER_CATEGORY_SUCCESS,
      payload: tokens,
    };
  };

  export const fetchRegisterCategoryFailure = (error) => {
    return {
      type: FETCH_REGISTER_CATEGORY_FAILURE,
      payload: error,
    };
  };


  // la data es { name_measure}
const fetchRegisterCategory = (data) => {
    const auth = new Auth();
  console.log(data);


    return (dispatch) => {
        dispatch(fetchRegisterCategoryRequest);
        Axios.post(`${process.env.REACT_APP_API_URI}api/register_categories`, data, {
          headers: {
            Authorization: `Bearer ${auth.token()}`,
          },
        })
          .then((response) => {
            dispatch(fetchRegisterCategorySuccess(response.data));
          })
          .catch((error) => {
            if (error.response) dispatch(fetchRegisterCategoryFailure(error.response.data));
            else
              dispatch(
                fetchRegisterCategoryFailure({
                  type: "NETWORK_ERROR",
                  message: "Error de Servidor. Intenta en unos minutos.",
                })
              );
          });
      };


  };

  export default fetchRegisterCategory;