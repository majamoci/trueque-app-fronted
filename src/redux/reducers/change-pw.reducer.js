import {
  FETCH_CHANGE_PW_REQUEST,
  FETCH_CHANGE_PW_SUCCESS,
  FETCH_CHANGE_PW_FAILURE,
} from "../actions/change-pw.action";

const init_state = {
  loading: false,
  data: {},
  errors: {}
}

function change(state = init_state, action) {
  switch (action.type) {
    case FETCH_CHANGE_PW_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case FETCH_CHANGE_PW_SUCCESS: {
      return {
        loading: false,
        data: action.payload,
        errors: {}
      }
    }
    case FETCH_CHANGE_PW_FAILURE: {
      return {
        loading: false,
        data: {},
        errors: action.payload
      }
    }
    default: {
      return state;
    }
  }
}

export default change;