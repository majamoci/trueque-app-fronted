const {
  FETCH_PUBS_REQUEST,
  FETCH_PUBS_SUCCESS,
  FETCH_PUBS_FAILURE,
} = require("../../actions/publications/publications.action");

const initial_state = {
  loading: false,
  data: {},
  errors: {},
};

function publications(state = initial_state, action) {
  switch (action.type) {
    case FETCH_PUBS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_PUBS_SUCCESS: {
      return {
        loading: false,
        data: action.payload,
        errors: {},
      };
    }
    case FETCH_PUBS_FAILURE: {
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

export default publications;
