import React from "react";
import SignIn from "./forms/singInForm";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import fetchLogin from "../../redux/actions/auth.action";

const initialForm = {
  email: "",
  password: "",
  remember: false,
};

export default function Login() {
  let dispatch = useDispatch();
  const loginSt = useSelector((state) => state.login);

  const handleSubmit = (formData) => {
    dispatch(fetchLogin(formData));
  };

  const auth =
    (loginSt && loginSt.data.status_code === 200) ||
    "AUTH" in localStorage ||
    "AUTH" in sessionStorage;

  return auth ? (
    <Redirect to="/admin/dashboard" />
  ) : (
    <SignIn handleSubmit={handleSubmit} values={initialForm} />
  );
}
