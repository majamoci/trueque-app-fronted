import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Auth from "../../utils";
import ResetPassword from "./forms/ResetPasswordForm";
import fetchReset from "../../redux/actions/send-pw.action";
import { openBackdrop } from "../../redux/ducks/_send_email.duck";

const initialForm = {
  reset_email: "",
};

export default function ResetPw() {
  let dispatch = useDispatch();
  const _auth = new Auth();
  const resetSt = useSelector((state) => state.auth.reset);

  const handleSubmit = (formData) => {
    dispatch(fetchReset(formData));

    // activamos el backdrop
    dispatch(openBackdrop(true));
  };

  const auth =
    (resetSt && resetSt.data.status_code === 200) || _auth.authenticated();

  return auth ? (
    <Redirect to="/admin" />
  ) : (
    <ResetPassword onSubmit={handleSubmit} values={initialForm} />
  );
}
