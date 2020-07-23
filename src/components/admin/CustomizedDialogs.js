import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ReactDOM from 'react-dom';
import Users from './Users'
import { useSelector, useDispatch } from 'react-redux';
import systemDialog from '../../redux/actions/dialog.action';


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const dialogSt=useSelector(store =>store.dialog)
  const dispatch=useDispatch()
  
  const handleClose = () => {
    dispatch(systemDialog(false))

    
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button>  */}
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={dialogSt.open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Datos del usuario
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {/* Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. */}
            Rolando   Caiza
          </Typography>
          <Typography gutterBottom>
            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor. */}
            Ciudad: Latacunga
          </Typography>
          <Typography gutterBottom>
            {/* Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla. */}
            Teléfono: 097 919 6435
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Banner usuario
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
