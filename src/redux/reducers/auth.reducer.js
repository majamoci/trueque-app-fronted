const {
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_FAILURE,
} = require("../actions/auth.action");

const initial_state = {
  loading: false,
  data: {},
  errors: {},
};

function login(state = initial_state, action) {
  switch (action.type) {
    case FETCH_AUTH_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_AUTH_SUCCESS: {
      return {
        loading: false,
        data: action.payload,
        errors: {},
      };
    }
    case FETCH_AUTH_FAILURE: {
      return {
        loading: false,
        data: {},
        errors: action.payload,
      };
    }
    default:
      return state;
  }
}

export default login;
