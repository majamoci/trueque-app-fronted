import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import fetchLogin from "../../redux/actions/auth.action";
import SignIn from "./forms/SingInForm";
import Auth from "../../utils";

const initialForm = {
  email: "",
  password: "",
  remember: false,
};


export default function Login() {
  let dispatch = useDispatch();
  const _auth = new Auth();
  const loginSt = useSelector((state) => state.auth.login);

  const handleSubmit = (formData) => {
    dispatch(fetchLogin(formData));
  };

  const auth =
    (loginSt && loginSt.data.status_code === 200) || _auth.authenticated();

  return auth ? (
    <Redirect to="/admin" />
  ) : (
    <SignIn onSubmit={handleSubmit} values={initialForm} />
  );
}
