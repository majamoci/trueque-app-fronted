import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import fetchRegister from "../../redux/actions/register.action";
import SignUp from "./forms/signUpForm";
import Auth from "../shared/utils";

const initialForm = {
  username: "",
  email: "",
  password: "",
};

export default function Register() {
  let dispatch = useDispatch();
  const _auth = new Auth();

  const registerSt = useSelector((state) => state.register);

  const handleSubmit = (formData) => {
    dispatch(fetchRegister(formData));
  };

  const auth =
    (registerSt && registerSt.data.status_code === 200) || _auth.authenticated();

  return auth ? (
    <Redirect to="/admin" />
  ) : (
    <SignUp handleSubmit={handleSubmit} values={initialForm} />
  );
}
