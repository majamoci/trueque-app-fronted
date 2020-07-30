import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import { closeDialog } from "../../../redux/actions/dialog.action";
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Card from '@material-ui/core/Card';
import { CardActionArea } from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia';
import CallIcon from '@material-ui/icons/Call';
import { green } from '@material-ui/core/colors';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import SettingsCellIcon from '@material-ui/icons/SettingsCell';
import IconButton from '@material-ui/core/IconButton';
//import EditIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({

  relative:{
    width: theme.spacing(8),
    height: theme.spacing(8),
    position: 'relative',
    //bottom: theme.spacing(100),
    left: theme.spacing(2),
    top: theme.spacing(2),
  },
     
  root: {
    maxWidth: 345,
  },

}));


export default function UserDialog() {
  const classes = useStyles();
  

  const dispatch = useDispatch();
  // const classes = useStyles();
  const dialogSt = useSelector((state) => state.user.dialog);

  const handleClose = () => dispatch(closeDialog(false));

  return (


    
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={dialogSt.open}
    >

      <Badge
        overlap="circle"
        
        anchorOrigin={{
          vertical: 'bottom',          
          horizontal: 'left',
        }}
        badgeContent={
          
          <Avatar  src="/contemplative-reptile.jpg " className={classes.relative} />
          
          
      }     
        
      >
        <Card className={classes.root} >
          <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            
            image="/contemplative-reptile.jpg"//la imagen esta en la carpeta public
            title="Contemplative Reptile"  
          />

          </CardActionArea>
        </Card>
      </Badge>
      
      <DialogContent dividers>

        <Typography variant="h5" gutterBottom>
            <br/>Rolando Caiza
        </Typography>
                   
        <Typography gutterBottom>
          <SettingsCellIcon style={{ color: green[500] }} /> 097 919 6435  
        </Typography>
        <Typography gutterBottom>          
            <CallIcon style={{ color: green[500] }} /> 3731700      
        </Typography>
        <Typography gutterBottom>
            <LocationCityIcon style={{ color: green[500] }} /> Latacunga           
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Banner usuario
        </Button>
      </DialogActions>
    </Dialog>
  );
}
