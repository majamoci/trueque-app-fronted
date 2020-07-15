import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Avatar, Menu, MenuItem } from "@material-ui/core";
import { fetchAuthReset } from "../../redux/actions/auth.action";
import { fetchRegisterReset } from "../../redux/actions/register.action";
import Auth from "../shared/utils";

export default function AccountMenu() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const closeSession = () => {
    const auth = new Auth();
    auth.logout();

    // regresar al state inicial
    dispatch(fetchAuthReset());
    dispatch(fetchRegisterReset());

    history.replace({ pathname: "/" });
  };

  return (
    <>
      <Avatar
        alt="Remy Sharp"
        onClick={handleMenu}
        src="https://www.nacionrex.com/__export/1512424840067/sites/debate/img/2017/12/04/deadpool-2-delay-995074-1280x0.jpg_423682103.jpg"
      />
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Perfil</MenuItem>
        <MenuItem onClick={handleClose}>Mis Publicaciones</MenuItem>
        <MenuItem onClick={closeSession}>Cerrar Sesión</MenuItem>
      </Menu>
    </>
  );
}
