import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Avatar, Menu, MenuItem } from "@material-ui/core";

export default function AccountMenu() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const closeSession = () => {
    sessionStorage.removeItem("ROLES");
    sessionStorage.removeItem("ACCESS_TOKEN");

    history.replace({ pathname: "/" });
  }

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
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Perfil</MenuItem>
        <MenuItem onClick={handleClose}>Mis Publicaciones</MenuItem>
        <MenuItem onClick={closeSession}>Cerrar Sesión</MenuItem>
      </Menu>
    </>
  );
}
