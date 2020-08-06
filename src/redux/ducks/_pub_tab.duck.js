const PUB_TAB_CHANGED = "PUB_TAB_CHANGED";

const init_state = {
  pos: 0,
  status: "published",
};

export default function _pub_tab(state = init_state, action) {
  switch (action.type) {
    case PUB_TAB_CHANGED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export const changeTab = (dataPos) => {
  return {
    type: PUB_TAB_CHANGED,
    payload: dataPos,
  };
};
