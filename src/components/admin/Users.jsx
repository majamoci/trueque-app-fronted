// general
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// material ui
import MaterialTable from "material-table";
import DetailsIcon from "@material-ui/icons/Details";
// local
import { isEmpty } from "utils";
import UserDialog from "./users/UserDialog";
import fetchUsers from "redux/actions/users/users.action";
import { columns, localization } from "./utils/table.config";
import { openDialog } from "redux/actions/users/dialog.action";

export default function Users() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const usersSt = useSelector((store) => store.user.users);
  const handleOpen = (username) => {
    dispatch(openDialog(true));
    setUser(username);
  };

  const actions = [
    {
      icon: DetailsIcon, //para que el icono, funcione como boton
      tooltip: "Detalle del usuario", //al pasar el mause sobre el icono muestra un mensaje
      onClick: (e, data) => {
        handleOpen(data.name);
      },
    },
  ];

  useEffect(() => {
    dispatch(fetchUsers());
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div>Obteniendo información...</div>;

  return (
    !isEmpty(usersSt.data) && (
      <>
        <MaterialTable
          title="Usuarios"
          data={usersSt.data}
          columns={columns}
          actions={actions}
          localization={localization}
        />
        <UserDialog user={user} />
      </>
    )
  );
}
