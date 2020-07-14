import React from "react";
import ResetPassword from "./forms/resetPasswordForm";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import fetchReset from "../../redux/actions/send-pw.action";

const initialForm = {
  email: "",
};

export default function ResetPw() {
  let dispatch = useDispatch();
  const resetSt = useSelector((state) => state.reset);

  const handleSubmit = (formData) => {
    dispatch(fetchReset(formData));
  };

  const auth =
    (resetSt && resetSt.data.status_code === 200) ||
    "AUTH" in localStorage ||
    "AUTH" in sessionStorage;

  return auth ? (
    <Redirect to="/dashboard" />
  ) : (
    <ResetPassword handleSubmit={handleSubmit} values={initialForm} />
  );
}
