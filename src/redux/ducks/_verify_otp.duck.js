const BACKDROP_VERIFY_OTP_OPEN = "BACKDROP_VERIFY_OTP_OPEN";
const BACKDROP_VERIFY_OTP_CLOSE = "BACKDROP_VERIFY_OTP_CLOSE";

const init_state = {
  open: false,
};

export default function _verify_otp(state = init_state, action) {
  switch (action.type) {
    case BACKDROP_VERIFY_OTP_OPEN: {
      return {
        open: true,
      };
    }
    case BACKDROP_VERIFY_OTP_CLOSE: {
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
    type: BACKDROP_VERIFY_OTP_OPEN,
    payload: open,
  };
};

export const closeBackdrop = (open) => {
  return {
    type: BACKDROP_VERIFY_OTP_CLOSE,
    payload: open,
  };
};
