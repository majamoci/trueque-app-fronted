import {
  DIALOG_OPEN,
  DIALOG_CLOSE
} from "../actions/dialog.action";

const init_state = {
  open: false,
};

function dialog(state = init_state, action) {
  switch (action.type) {
    case DIALOG_OPEN: {
      return {
        open: true,
      };
    }
    case DIALOG_CLOSE: {
      return {
        open: false,
      };
    }
    default: {
      return state;
    }
  }
}

export default dialog;
