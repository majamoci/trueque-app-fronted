const BACKDROP_LOGIN_OPEN = "BACKDROP_LOGIN_OPEN";
const BACKDROP_LOGIN_CLOSE = "BACKDROP_LOGIN_CLOSE";

const init_state = {
  open: false,
};

export default function _login(state = init_state, action) {
  switch (action.type) {
    case BACKDROP_LOGIN_OPEN: {
      return {
        open: true,
      };
    }
    case BACKDROP_LOGIN_CLOSE: {
      return {
        open: false,
      };
    }
    default: {
      return state;
    }
  }
}

export const openBackdrop = (open) => {
  return {
    type: BACKDROP_LOGIN_OPEN,
    payload: open,
  };
};

export const closeBackdrop = (open) => {
  return {
    type: BACKDROP_LOGIN_CLOSE,
    payload: open,
  };
};
