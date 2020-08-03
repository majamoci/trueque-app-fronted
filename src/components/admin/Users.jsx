import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MaterialTable from "material-table";
import DetailsIcon from "@material-ui/icons/Details";
import UserDialog from "./users/UserDialog";
import { openDialog } from "../../redux/actions/users/dialog.action";
import fetchUsers from "../../redux/actions/users/users.action";
import { isEmpty } from "../../utils";
import { columns, localization } from "./utils/table.config";

export default function Users() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const usersSt = useSelector((store) => store.user.users);
  const handleOpen = (id) => {
    dispatch(openDialog(true));
    setUser(id);
  };

  const actions = [
    {
      icon: DetailsIcon, //para que el icono, funcione como boton
      tooltip: "Detalle del usuario", //al pasar el mause sobre el icono muestra un mensaje
      onClick: (e, data) => {
        handleOpen(data.id);
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
