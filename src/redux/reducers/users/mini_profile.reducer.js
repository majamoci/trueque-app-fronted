import {
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
} from "redux/actions/users/mini_profile.action";

const initial_state = {
  loading: false,
  data: {},
  errors: {},
};

function mini_profile(state = initial_state, action) {
  switch (action.type) {
    case FETCH_PROFILE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_PROFILE_SUCCESS: {
      return {
        loading: false,
        data: action.payload,
        errors: {},
      };
    }
    case FETCH_PROFILE_FAILURE: {
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

export default mini_profile;
