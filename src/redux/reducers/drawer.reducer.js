import {
  DRAWER_OPEN,
  DRAWER_CLOSE
} from "../actions/drawer.action";

const init_state = {
  open: false,
};

function drawer(state = init_state, action) {
  switch (action.type) {
    case DRAWER_OPEN: {
      return {
        open: true,
      };
    }
    case DRAWER_CLOSE: {
      return {
        open: false,
      };
    }
    default: {
      return state;
    }
  }
}

export default drawer;
