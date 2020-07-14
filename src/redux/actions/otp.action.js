import Axios from "axios";

export const FETCH_OTP_REQUEST = "FETCH_OTP_REQUEST";
export const FETCH_OTP_SUCCESS = "FETCH_OTP_SUCCESS";
export const FETCH_OTP_FAILURE = "FETCH_OTP_FAILURE";
export const FETCH_OTP_RESET = "FETCH_OTP_RESET";

export const fetchOtpRequest = () => {
  return {
    type: FETCH_OTP_REQUEST,
  };
};

export const fetchOtpSuccess = (data) => {
  return {
    type: FETCH_OTP_SUCCESS,
    payload: data,
  };
};

export const fetchOtpFailure = (error) => {
  return {
    type: FETCH_OTP_FAILURE,
    payload: error,
  };
};

export const fetchOtpReset = () => {
  return {
    type: FETCH_OTP_RESET,
  };
};

// la data es verify_otp
const fetchOtp = (data) => {
  return (dispatch) => {
    dispatch(fetchOtpRequest);
    Axios.post(`${process.env.REACT_APP_API_URI}api/verify-otp`, data)
      .then((response) => {
        const result = response.data;
        dispatch(fetchOtpSuccess(result));
      })
      .catch((error) => {
        if (error.response) dispatch(fetchOtpFailure(error.response.data));
        else
          dispatch(
            fetchOtpFailure({
              type: "NETWORK_ERROR",
              message: "Error de Servidor. Intenta en unos minutos.",
            })
          );
      });
  };
};

export default fetchOtp;
