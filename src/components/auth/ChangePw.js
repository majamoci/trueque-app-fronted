import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchChange from "../../redux/actions/change-pw.action";
import { fetchResetReset } from "../../redux/actions/send-pw.action";
import { fetchOtpReset } from "../../redux/actions/otp.action";
import NewPassword from "./forms/newPasswordForm";
import { isEmpty } from "../shared/utils";

const initialForm = {
  reset_password: "",
  verify_password: "",
  token: "",
};

export default function ChangePw() {
  const dispatch = useDispatch();
  const otpSt = useSelector((store) => store.otp);
  const [token, setToken] = useState("");
  const [msg, setMsg] = useState("no autorizado");

  const handleSubmit = (formData) => {
    formData.token = token;
    dispatch(fetchChange(formData));

    // limpiamos el store
    dispatch(fetchResetReset());
    dispatch(fetchOtpReset());
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
    <NewPassword handleSubmit={handleSubmit} values={initialForm} msg={msg} />
  );
}
