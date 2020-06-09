import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DescriptionIcon from '@material-ui/icons/Description';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';

export default function mainListItems(props) {
  return (
    <div>
      <ListItem button onClick={props.generalOpen}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Panel General" />
      </ListItem>
      <ListItem button onClick={props.datosOpen}>
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="Datos" />
      </ListItem>
      <ListItem button onClick={props.serviciosOpen}>
        <ListItemIcon>
          <RoomServiceIcon />
        </ListItemIcon>
        <ListItemText primary="Servicios" />
      </ListItem>
      <ListItem button onClick={props.reservasOpen}>
        <ListItemIcon>
          <AirlineSeatIndividualSuiteIcon />
        </ListItemIcon>
        <ListItemText primary="Reservas" />
      </ListItem>
      
    </div>
  )
}
