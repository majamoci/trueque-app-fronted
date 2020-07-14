import React from "react";
import SignUp from "./forms/signUpForm";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import fetchRegister from "../../redux/actions/register.action";

const initialForm = {
  username: "",
  email: "",
  password: "",
};

export default function Register() {
  let dispatch = useDispatch();
  const registerSt = useSelector((state) => state.register);

  const handleSubmit = (formData) => {
    dispatch(fetchRegister(formData));
  };

  const auth =
    (registerSt && registerSt.data.status_code === 200) ||
    "AUTH" in sessionStorage;

  return auth ? (
    <Redirect to="/dashboard" />
  ) : (
    <SignUp handleSubmit={handleSubmit} values={initialForm} />
  );
}
