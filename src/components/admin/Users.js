import React from "react";
import MaterialTable from 'material-table';
import DetailsIcon from '@material-ui/icons/Details';
import CustomizedDialogs from './CustomizedDialogs';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import systemDialog from '../../redux/actions/dialog.action';


export default function Users() {
 
  const dispatch=useDispatch()

  const handleClickOpen = () => {
    
    dispatch(systemDialog(true))
    
  };
 
  const data=[
    { nomUser:'Rolando', emael:'yo@hotmail.com'}
  ]
  
  const columns=[
    {title:'Nombre de usuario',field:'nomUser'},
    {title:'E-mail',field:'emael'}

  ]

  const actions=[
    {
      
      icon: DetailsIcon,//para que el icono, funcione como boton
      tooltip: 'Detalle del usuario',//al pasar el mause sobre el icono muestra un mensaje
      //onClick: (event, rowData) => alert("You saved " + rowData.nomUser)
      onClick:(event, rowData)=>{handleClickOpen()}  



    }
  ]
 
  return (
    
    <div>
      
      <MaterialTable title="Usuarios"
      data={data}
      columns={columns}
      actions={actions}

      />
      <CustomizedDialogs />

      </div>
  );
}