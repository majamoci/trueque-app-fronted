const {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} = require("../../actions/users/users.action");

const initial_state = {
  loading: false,
  data: {},
  errors: {},
};

function users(state = initial_state, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_USERS_SUCCESS: {
      return {
        loading: false,
        data: action.payload,
        errors: {},
      };
    }
    case FETCH_USERS_FAILURE: {
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

export default users;
