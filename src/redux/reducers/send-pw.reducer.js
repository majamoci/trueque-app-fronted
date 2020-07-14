import {
  FETCH_SEND_PW_REQUEST,
  FETCH_SEND_PW_SUCCESS,
  FETCH_SEND_PW_FAILURE,
  FETCH_SEND_PW_RESET,
} from "../actions/send-pw.action";

const init_state = {
  loading: false,
  data: {},
  errors: {}
}

function reset(state = init_state, action) {
  switch (action.type) {
    case FETCH_SEND_PW_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_SEND_PW_SUCCESS: {
      return {
        loading: false,
        data: action.payload,
        errors: {},
      };
    }
    case FETCH_SEND_PW_FAILURE: {
      return {
        loading: false,
        data: {},
        errors: action.payload,
      };
    }
    case FETCH_SEND_PW_RESET: {
      return init_state;
    }
    default: {
      return state;
    }
  }
}

export default reset;