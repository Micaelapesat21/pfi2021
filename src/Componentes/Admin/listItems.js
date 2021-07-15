import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DescriptionIcon from '@material-ui/icons/Description';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';
import AssignmentIcon from '@material-ui/icons/Assignment';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ReceiptIcon from '@material-ui/icons/Receipt';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import GroupIcon from '@material-ui/icons/Group';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

export default function mainListItems(props) {
  return (
    <div>
      {/* <ListItem button onClick={props.generalOpen}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Panel General" />
      </ListItem> */}
      <ListItem button onClick={props.datosOpen}>
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="Datos" />
      </ListItem>
      <ListItem button onClick={props.serviciosOpen}>
        <ListItemIcon>
          <AddToPhotosIcon  />
        </ListItemIcon>
        <ListItemText primary="Servicios" />
      </ListItem>
      <ListItem button onClick={props.reservasOpen}>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Alumnos" />
      </ListItem>
      <ListItem button onClick={props.solicitudesOpen}>
        <ListItemIcon> 
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Titulares" />
      </ListItem>
      <ListItem button onClick={props.resenasOpen}>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Empleados" />
      </ListItem>

      <ListItem button onClick={props.facturacionOpen}>
        <ListItemIcon>
          <ReceiptIcon />
        </ListItemIcon>
        <ListItemText primary="Facturación" />
      </ListItem>

      <ListItem button onClick={props.asistenciasOpen}>
        <ListItemIcon>
          <AccessTimeIcon />
        </ListItemIcon>
        <ListItemText primary="Asistencias" />
      </ListItem>

      <ListItem button onClick={props.cursosOpen}>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Cursos" />
      </ListItem>

      <ListItem button onClick={props.cobranzasOpen}>
        <ListItemIcon>
          <MonetizationOnIcon />
        </ListItemIcon>
        <ListItemText primary="Cobranzas" />
      </ListItem>
      
    </div>
  )
}
