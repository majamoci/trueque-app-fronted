const {
    FETCH_PROFILES_REQUEST,
    FETCH_PROFILES_SUCCESS,
    FETCH_PROFILES_FAILURE,
  } = require("../../actions/users/profile.action");
  
  const initial_state = {
    loading: false,
    data: {},
    errors: {},
  };
  
  function profile(state = initial_state, action) {
    switch (action.type) {
      case FETCH_PROFILES_REQUEST: {
        return {
          ...state,
          loading: true,
        };
      }
      case FETCH_PROFILES_SUCCESS: {
        return {
          loading: false,
          data: action.payload,
          errors: {},
        };
      }
      case FETCH_PROFILES_FAILURE: {
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
  
  export default profile;
  