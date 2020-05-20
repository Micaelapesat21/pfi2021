import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';



const payments = [
  { name: 'Tipo de tarjeta', detail: 'Visa' },
  { name: 'Nombre de la tarjeta', detail: 'Mr John Smith' },
  { name: 'Numero de la Tajeta', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Fecha de expiracion', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props) {
  const classes = useStyles();

  function total(checkIn,checkOut,precio){
    var arraycheckIn = checkIn.split("-");
    var arraycheckOut = checkOut.split("-");
    let noches=parseInt(arraycheckOut.join(''))-parseInt(arraycheckIn.join(''))

    return noches
  }

  

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resumen
      </Typography>
      <List disablePadding>
        
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${total(props.CheckIn,props.CheckOut)*parseInt(props.precio)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Reserva
          </Typography>
          <Typography gutterBottom>Ckeck-In: {props.CheckIn}</Typography>
          <Typography gutterBottom>Ckeck-Out: {props.CheckOut}</Typography>
          <Typography gutterBottom>Huespedes: {props.huespedes}</Typography>
          <Typography gutterBottom>Tipo Habitacion: Premium</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
           Tarjeta de Reserva
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}