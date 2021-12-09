//import * as React from 'react';
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Button from '@mui/material/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormularioMensajeRespuesta from './FormularioMensajeRespuesta';
import MensajesAPI from '../../../Network/Mensajes/MensajesAPI'


export default function NestedList(props) {
  const [open, setOpen] = React.useState(false); 
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [modalMensajeIsOpen, setmodalMensajeIsOpen] = React.useState(false);
  


  const handleClick = () => {
    setOpen(!open);
  };

  const addButtonPressedMensaje = () => {
    setModalIsOpen(false);
    setmodalMensajeIsOpen(true);
};


  const cursoMensaje = (curso) => {
  console.log("cursoMensaje: " + JSON.stringify(curso))
  setModalIsOpen(false);
  setmodalMensajeIsOpen(false);
  props.cursoMensaje(curso);
}




const handleCloseModal = () => {
  setModalIsOpen(false);
  setmodalMensajeIsOpen(false);
};


  return (
    <React.Fragment>
      
            <Dialog
                maxWidth="lg"
                fullWidth= {true}
                open={modalMensajeIsOpen}
                onClose={handleCloseModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title" style={{ fontWeight: 'bold', textAlign: 'center' }}  > Complete los datos del mensaje </DialogTitle>
              <DialogContent className="dialogContent">
                    <FormularioMensajeRespuesta mensaje = { props.mensaje }  cursoMensaje = { cursoMensaje }/>       
              </DialogContent>
              <DialogActions>
              </DialogActions>
            </Dialog>

            <List>
                  <ListItemButton onClick={handleClick}>
                      <ListItemIcon>
                      <InboxIcon />
                      </ListItemIcon>
                  <ListItemText primary={props.mensaje.fecha + " - " + props.mensaje.hora + " : " + props.mensaje.nombre} />   
                  {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                          <Collapse in={open} timeout="auto" unmountOnExit>
                              <List component="div" disablePadding>
                                  <ListItemButton sx={{ pl: 4 }}>
                                      <ListItemText primary={props.mensaje.texto}/>
                                      <Button variant="contained" onClick={ addButtonPressedMensaje }>Responder</Button>
                                  </ListItemButton>
                              </List>
                          </Collapse>
            </List>
    </React.Fragment>
   
  );
}