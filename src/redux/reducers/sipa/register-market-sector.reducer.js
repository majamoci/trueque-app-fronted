import {
    FETCH_REGISTER_SECTOR_REQUEST,
    FETCH_REGISTER_SECTOR_SUCCESS,
    FETCH_REGISTER_SECTOR_FAILURE,
    
  } from "redux/actions/sipa/register-market-sector.actions";

  const initial_state = {
    loading: false,
    data: {},
    errors: {},
  };

  function register_sector(state = initial_state, action) {
    switch (action.type) {
        case FETCH_REGISTER_SECTOR_REQUEST: {
            return {
              ...state,//devovemos el estado anterior 
              loading: true,//hacemos la modificacion pertinente
            };
        }
        case FETCH_REGISTER_SECTOR_SUCCESS: {
            return {
              loading: false,
              data: action.payload,
              errors: {},
            };
        }
        case FETCH_REGISTER_SECTOR_FAILURE: {
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

  export default register_sector;