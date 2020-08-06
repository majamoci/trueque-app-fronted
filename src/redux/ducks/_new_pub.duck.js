const BACKDROP_NEW_PUB_OPEN = "BACKDROP_NEW_PUB_OPEN";
const BACKDROP_NEW_PUB_CLOSE = "BACKDROP_NEW_PUB_CLOSE";

const init_state = {
  open: false,
};

export default function _new_pub(state = init_state, action) {
  switch (action.type) {
    case BACKDROP_NEW_PUB_OPEN: {
      return {
        open: true,
      };
    }
    case BACKDROP_NEW_PUB_CLOSE: {
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
    type: BACKDROP_NEW_PUB_OPEN,
    payload: open,
  };
};

export const closeBackdrop = (open) => {
  return {
    type: BACKDROP_NEW_PUB_CLOSE,
    payload: open,
  };
};
