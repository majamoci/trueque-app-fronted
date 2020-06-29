import React, { useState } from "react";
import { Avatar, Menu, MenuItem } from "@material-ui/core";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
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
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Perfil</MenuItem>
        <MenuItem onClick={handleClose}>Mis Publicaciones</MenuItem>
        <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
      </Menu>
    </>
  );
}
