import Axios from "axios";
import Auth from "utils";

export const FETCH_CREATE_PUB_REQUEST = "FETCH_CREATE_PUB_REQUEST";
export const FETCH_CREATE_PUB_SUCCESS = "FETCH_CREATE_PUB_SUCCESS";
export const FETCH_CREATE_PUB_FAILURE = "FETCH_CREATE_PUB_FAILURE";
export const FETCH_CREATE_PUB_RESET = "FETCH_CREATE_PUB_RESET";

export const fetchCreatePubRequest = () => {
  return {
    type: FETCH_CREATE_PUB_REQUEST,
  };
};

export const fetchCreatePubSuccess = (data) => {
  return {
    type: FETCH_CREATE_PUB_SUCCESS,
    payload: data,
  };
};

export const fetchCreatePubFailure = (error) => {
  return {
    type: FETCH_CREATE_PUB_FAILURE,
    payload: error,
  };
};

export const fetchCreatePubReset = () => {
  return {
    type: FETCH_CREATE_PUB_RESET,
  };
};

// la data es { 'title', 'price', 'address', 'category', 'available', 'description', 'state' }
const fetchCreatePub = (data) => {
  let formData = new FormData();
  const auth = new Auth();
  const {photos, ...rest} = data;
  const new_data = {...rest, ...photos};

  for (let key in new_data) {
    const k = ["0", "1", "2", "3", "4"].includes(key);
    formData.append(k ? "photos[]" : key, new_data[key]);
  }

  return (dispatch) => {
    dispatch(fetchCreatePubRequest);
    Axios.post(`${process.env.REACT_APP_API_URI}api/publication`, formData, {
      headers: {
        Authorization: `Bearer ${auth.token()}`,
      },
    })
      .then((response) => {
        dispatch(fetchCreatePubSuccess(response.data));
      })
      .catch((error) => {
        if (error.response)
          dispatch(fetchCreatePubFailure(error.response.data));
        else
          dispatch(
            fetchCreatePubFailure({
              type: "NETWORK_ERROR",
              message: "Error de Servidor. Intenta en unos minutos.",
            })
          );
      });
  };
};

export default fetchCreatePub;
