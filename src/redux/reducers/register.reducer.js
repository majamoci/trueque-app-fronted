const {
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_FAILURE,
} = require("../actions/register.action");

const initial_state = {
  loading: false,
  data: {},
  errors: {},
};

function register(state = initial_state, action) {
  switch (action.type) {
    case FETCH_REGISTER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_REGISTER_SUCCESS: {
      return {
        loading: false,
        data: action.payload,
        errors: {},
      };
    }
    case FETCH_REGISTER_FAILURE: {
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

export default register;
