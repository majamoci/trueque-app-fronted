import React from "react";
import PropTypes from 'prop-types';
import ValidateOTP from "./forms/validateOTP";
import { useDispatch } from "react-redux";
import fetchOtp from "../../redux/actions/otp.action";

const initialForm = {
  verify_otp: "",
};

export default function Otp({ open }) {
  const dispatch = useDispatch();

  const handleSubmit = (formData) => {
    dispatch(fetchOtp(formData));
  };

  return (
    <ValidateOTP
      handleSubmit={handleSubmit}
      values={initialForm}
      open={open}
    />
  );
}

Otp.propTypes = {
  open: PropTypes.bool.isRequired,
};