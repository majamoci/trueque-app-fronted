import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Auth from "../../utils";
import SignIn from "./forms/SignInForm";
import fetchLogin from "../../redux/actions/auth.action";
import { openBackdrop } from "../../redux/ducks/_login.duck";

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

    // activamos el backdrop
    dispatch(openBackdrop(true));
  };

  const auth =
    (loginSt && loginSt.data.status_code === 200) || _auth.authenticated();

  return auth ? (
    <Redirect to="/admin" />
  ) : (
    <SignIn onSubmit={handleSubmit} values={initialForm} />
  );
}
