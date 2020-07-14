import {
  FETCH_OTP_REQUEST,
  FETCH_OTP_SUCCESS,
  FETCH_OTP_FAILURE,
  FETCH_OTP_RESET,
} from "../actions/otp.action";

const init_state = {
  loading: false,
  data: {},
  errors: {}
}

function otp(state = init_state, action) {
  switch (action.type) {
    case FETCH_OTP_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_OTP_SUCCESS: {
      return {
        loading: false,
        data: action.payload,
        errors: {},
      };
    }
    case FETCH_OTP_FAILURE: {
      return {
        loading: false,
        data: {},
        errors: action.payload,
      };
    }
    case FETCH_OTP_RESET: {
      return init_state;
    }
    default: {
      return state;
    }
  }
}

export default otp;