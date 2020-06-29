const {
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_FAILURE,
} = require("../actions/auth.action");

const initial_state = {
  loading: false,
  tokens: {},
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
        tokens: action.payload,
        errors: {},
      };
    }
    case FETCH_AUTH_FAILURE: {
      return {
        loading: false,
        tokens: {},
        errors: action.payload,
      };
    }
    default:
      return state;
  }
}

export default login;
