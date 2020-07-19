import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ResetPassword from "./forms/ResetPasswordForm";
import fetchReset from "../../redux/actions/send-pw.action";
import Auth from "../../utils";

const initialForm = {
  email: "",
};

export default function ResetPw() {
  let dispatch = useDispatch();
  const _auth = new Auth();
  const resetSt = useSelector((state) => state.auth.reset);

  const handleSubmit = (formData) => {
    dispatch(fetchReset(formData));
  };

  const auth =
    (resetSt && resetSt.data.status_code === 200) || _auth.authenticated();

  return auth ? (
    <Redirect to="/admin" />
  ) : (
    <ResetPassword onSubmit={handleSubmit} values={initialForm} />
  );
}
