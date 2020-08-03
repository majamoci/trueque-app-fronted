const BACKDROP_RESET_EMAIL_OPEN = "BACKDROP_RESET_EMAIL_OPEN";
const BACKDROP_RESET_EMAIL_CLOSE = "BACKDROP_RESET_EMAIL_CLOSE";

const init_state = {
  open: false,
};

export default function _send_email(state = init_state, action) {
  switch (action.type) {
    case BACKDROP_RESET_EMAIL_OPEN: {
      return {
        open: true,
      };
    }
    case BACKDROP_RESET_EMAIL_CLOSE: {
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
    type: BACKDROP_RESET_EMAIL_OPEN,
    payload: open,
  };
};

export const closeBackdrop = (open) => {
  return {
    type: BACKDROP_RESET_EMAIL_CLOSE,
    payload: open,
  };
};
