const {
  FETCH_CREATE_PUB_REQUEST,
  FETCH_CREATE_PUB_SUCCESS,
  FETCH_CREATE_PUB_FAILURE,
  FETCH_CREATE_PUB_RESET,
} = require("../../actions/publications/create.action");

const initial_state = {
  loading: false,
  data: {},
  errors: {},
};

function _new(state = initial_state, action) {
  switch (action.type) {
    case FETCH_CREATE_PUB_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_CREATE_PUB_SUCCESS: {
      return {
        loading: false,
        data: action.payload,
        errors: {},
      };
    }
    case FETCH_CREATE_PUB_FAILURE: {
      return {
        loading: false,
        data: {},
        errors: action.payload,
      };
    }
    case FETCH_CREATE_PUB_RESET: {
      return initial_state;
    }
    default:
      return state;
  }
}

export default _new;
