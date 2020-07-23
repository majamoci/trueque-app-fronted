export const DIALOG_OPEN = "DIALOG_OPEN";
export const DIALOG_CLOSE = "DIALOG_CLOSE";

export const openDialog = (open) => {
  return {
    type: DIALOG_OPEN,
    payload: open,
  };
};

export const closeDialog = (open) => {
  return {
    type: DIALOG_CLOSE,
    payload: open,
  };
};

const systemDialog = (click) => {
  return (dispatch) => {
    if (click) dispatch(openDialog);
    else dispatch(closeDialog);
  };
};

export default systemDialog;
