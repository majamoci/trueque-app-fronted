import React from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import ValidateOTP from "./forms/ValidateOTP";
import fetchOtp from "../../redux/actions/otp.action";
import { openBackdrop } from "../../redux/ducks/_verify_otp.duck";

const initialForm = {
  verify_otp: "",
};

export default function Otp({ open }) {
  const dispatch = useDispatch();

  const handleSubmit = (formData) => {
    dispatch(fetchOtp(formData));

    // activamos el backdrop
    dispatch(openBackdrop(true));
  };

  return (
    <ValidateOTP
      onSubmit={handleSubmit}
      values={initialForm}
      open={open}
    />
  );
}

Otp.propTypes = {
  open: PropTypes.bool.isRequired,
};
