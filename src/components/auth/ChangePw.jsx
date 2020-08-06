// general
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// local
import { isEmpty } from "../../utils";
import NewPassword from "./forms/NewPasswordForm";
import { fetchOtpReset } from "../../redux/actions/otp.action";
import fetchChange from "../../redux/actions/change-pw.action";
import { openBackdrop } from "../../redux/ducks/_new_psswd.duck";
import { fetchResetBlank } from "../../redux/actions/send-pw.action";

const initialForm = {
  reset_password: "",
  verify_password: "",
  token: "",
};

export default function ChangePw() {
  const dispatch = useDispatch();
  const otpSt = useSelector((store) => store.auth.otp);
  const [token, setToken] = useState("");
  const [msg, setMsg] = useState("no autorizado");

  const handleSubmit = (formData) => {
    formData.token = token;
    dispatch(fetchChange(formData));

    // limpiamos el store
    dispatch(fetchResetBlank());
    dispatch(fetchOtpReset());

    // activamos el backdrop
    dispatch(openBackdrop(true));
  };

  useEffect(() => {
    const { errors, data } = otpSt;
    if (!isEmpty(errors)) {
      setMsg("token incorrecto");
    }

    if (!isEmpty(data)) {
      const { token } = data;
      setToken(token);
      setMsg("autorizado");
    }
  }, [otpSt]);

  return (
    <NewPassword onSubmit={handleSubmit} values={initialForm} msg={msg} />
  );
}
