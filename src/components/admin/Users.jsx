import React from "react";
import { useDispatch } from "react-redux";
import MaterialTable from "material-table";
import DetailsIcon from "@material-ui/icons/Details";
import UserDialog from "./users/UserDialog";
import { openDialog } from "../../redux/actions/dialog.action";

export default function Users() {
  const dispatch = useDispatch();

  const handleOpen = () => dispatch(openDialog(true));

  const data = [{ username: "Rolando", email: "yo@hotmail.com"}];

  const columns = [
    { title: "Nombre de usuario", field: "username" },
    { title: "E-mail", field: "email" },
        
  ];

  const actions = [
    {
      icon: DetailsIcon, //para que el icono, funcione como boton
      tooltip: "Detalle del usuario", //al pasar el mause sobre el icono muestra un mensaje
      onClick: (event, rowData) => {
        handleOpen();
      },
    },
  ];

  return (
    <>
      <MaterialTable
        title="Usuarios"
        data={data}
        columns={columns}
        actions={actions}
      />
      <UserDialog />
    </>
  );
}
