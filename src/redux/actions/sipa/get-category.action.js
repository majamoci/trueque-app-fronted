import Axios from "axios";
import Auth from "utils";



export const FETCH_GET_CATEGORY_REQUEST = "FETCH_GET_CATEGORY_REQUEST";
export const FETCH_GET_CATEGORY_SUCCESS = "FETCH_GET_CATEGORY_SUCCESS";
export const FETCH_GET_CATEGORY_FAILURE = "FETCH_GET_CATEGORY_FAILURE";

export const fetchGetCategoryRequest = () => {
  return {
    type: FETCH_GET_CATEGORY_REQUEST,
  };
};

export const fetchGetCategorySuccess = (data) => {
  return {
    type: FETCH_GET_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const fetchGetCategoryFailure = (error) => {
  return {
    type: FETCH_GET_CATEGORY_FAILURE,
    payload: error,
  };
};

// la data es state:draft|published|complete
const fetchGetCategory = (data) => {
  const auth = new Auth();

  return (dispatch) => {
    dispatch(fetchGetCategoryRequest);
    Axios.get(`${process.env.REACT_APP_API_URI}api/product_category`, {
      headers: {
        Authorization: `Bearer ${auth.token()}`,
      },
    })
      .then((response) => {
        dispatch(fetchGetCategorySuccess(response.data));
      })
      .catch((error) => {
        if (error.response) dispatch(fetchGetCategoryFailure(error.response.data));
        else
          dispatch(
            fetchGetCategoryFailure({
              type: "NETWORK_ERROR",
              message: "Error de Servidor. Intenta en unos minutos.",
            })
          );
      });
  };
};

export default fetchGetCategory;