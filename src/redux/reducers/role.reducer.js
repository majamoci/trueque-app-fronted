import {
  FETCH_ROLE_REQUEST,
  FETCH_ROLE_SUCCESS,
  FETCH_ROLE_FAILURE,
} from "../actions/role.action";

const init_state = {
  loading: false,
  roles: {},
  errors: {}
}

function role(state = init_state, action) {
  switch (action.type) {
    case FETCH_ROLE_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case FETCH_ROLE_SUCCESS: {
      return {
        loading: false,
        roles: action.payload,
        errors: {}
      }
    }
    case FETCH_ROLE_FAILURE: {
      return {
        loading: false,
        roles: {},
        errors: action.payload
      }
    }
    default: {
      return state;
    }
  }
}

export default role;