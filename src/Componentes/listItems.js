import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HotelIcon from '@material-ui/icons/Hotel';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PaymentIcon from '@material-ui/icons/Payment';
import RenderAvatar from './login/RenderAvatar'
import { Divider, List, Collapse } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';



const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(2),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
}));


export default function ListItems(props) {
  const classes = useStyles();
  const [openPer, setOpenPer] = React.useState(true);
  const [openRes, setOpenRes] = React.useState(true);


  const handleClickPeril = () => {
    setOpenPer(!openPer);
  };
  const handleClickReserva = () => {
    setOpenRes(!openRes);
  };

  return (
    <div>
      <ListItem button onClick={props.openGeneral}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Panel General" />
      </ListItem>
      <Divider />

      <ListItem button onClick={handleClickPeril}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Mi Perfil" />
        {openPer ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openPer} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItem button onClick={props.perfilOpen} className={classes.nested}>
            <ListItemIcon>
              <RenderAvatar user={props.user} className={classes.small} />
            </ListItemIcon>
            <ListItemText primary={props.user.displayName} />
          </ListItem>

          <ListItem button onClick={props.resenasOpen} className={classes.nested}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Reseñas" />
          </ListItem>

          <ListItem button onClick={props.pagosOpen} className={classes.nested}>
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Pagos" />
          </ListItem>
        </List>
      </Collapse>
      <Divider />
      <ListItem button onClick={handleClickReserva}>
        <ListItemIcon>
          <VpnKeyIcon />
        </ListItemIcon>
        <ListItemText primary="Reservas" />
        {openRes ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openRes} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItem button onClick={props.reservasOpen} className={classes.nested}>
            <ListItemIcon>
              <HotelIcon />
            </ListItemIcon>
            <ListItemText primary="Activas" />
          </ListItem>

          <ListItem button onClick={props.checkInOpen} className={classes.nested}>
            <ListItemIcon>
              <AssignmentTurnedInIcon />
            </ListItemIcon>
            <ListItemText primary="Check-in" />
          </ListItem>

          <ListItem button onClick={props.serviciosOpen} className={classes.nested}>
            <ListItemIcon>
              <RoomServiceIcon />
            </ListItemIcon>
            <ListItemText primary="Servicios" />
          </ListItem>

          <ListItem button onClick={props.checkOutOpen} className={classes.nested}>
            <ListItemIcon>
              <MeetingRoomIcon />
            </ListItemIcon>
            <ListItemText primary="Check-Out" />
          </ListItem>
        </List>
      </Collapse>
      <Divider />

    </div>
  )
}

