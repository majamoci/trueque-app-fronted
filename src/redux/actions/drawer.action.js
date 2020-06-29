export const DRAWER_OPEN = "DRAWER_OPEN";
export const DRAWER_CLOSE = "DRAWER_CLOSE";

export const openDrawer = (open) => {
  return {
    type: DRAWER_OPEN,
    payload: open,
  };
};

export const closeDrawer = (open) => {
  return {
    type: DRAWER_CLOSE,
    payload: open,
  };
};

const systemDrawer = (click) => {
  return (dispatch) => {
    if (click) dispatch(openDrawer);
    else dispatch(closeDrawer);
  };
};

export default systemDrawer;
