import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import fetchRegister from "../../redux/actions/register.action";
import SignUp from "./forms/SignUpForm";
import Auth from "../../utils";

const initialForm = {
  username: "",
  email: "",
  password: "",
};

export default function Register() {
  let dispatch = useDispatch();
  const _auth = new Auth();

  const registerSt = useSelector((state) => state.auth.register);

  const handleSubmit = (formData) => {
    dispatch(fetchRegister(formData));
  };

  const auth =
    (registerSt && registerSt.data.status_code === 200) || _auth.authenticated();

  return auth ? (
    <Redirect to="/admin" />
  ) : (
    <SignUp onSubmit={handleSubmit} values={initialForm} />
  );
}
