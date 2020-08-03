const BACKDROP_REGISTER_OPEN = "BACKDROP_REGISTER_OPEN";
const BACKDROP_REGISTER_CLOSE = "BACKDROP_REGISTER_CLOSE";

const init_state = {
  open: false,
};

export default function _register(state = init_state, action) {
  switch (action.type) {
    case BACKDROP_REGISTER_OPEN: {
      return {
        open: true,
      };
    }
    case BACKDROP_REGISTER_CLOSE: {
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
    type: BACKDROP_REGISTER_OPEN,
    payload: open,
  };
};

export const closeBackdrop = (open) => {
  return {
    type: BACKDROP_REGISTER_CLOSE,
    payload: open,
  };
};
