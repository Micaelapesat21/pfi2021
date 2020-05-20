import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fecha from './Fecha'
import { InputLabel, FormControl, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#fafafa",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 270,
  },
}));

export default function AddressForm(props) {

  const [/*huespedes*/, setHuespedes] = React.useState(props.huespedes);  

  function noches(checkIn,checkOut){
    var arraycheckIn = checkIn.split("-");
    var arraycheckOut = checkOut.split("-");
    let noches=parseInt(arraycheckOut.join(''))-parseInt(arraycheckIn.join(''))

    return noches
  }
  
  const handleChange = (event) => {
    setHuespedes(event.target.value);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Tus fechas
      </Typography>
      <Grid container spacing={3}>

        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <InputLabel>Fechas</InputLabel>
            <Fecha label={"Check-in"} fecha={props.CheckIn}  />
          </Grid>
          <Grid item>
            <Fecha label={"Check-out"} fecha={props.CheckOut} />
          </Grid>
          <Grid item>
            <InputLabel>Huéspedes</InputLabel>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>Huespedes</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={props.huespedes}
                onChange={handleChange}
                label="Huespedes"
              >

                <MenuItem value={1}>1 Huesped</MenuItem>
                <MenuItem value={2}>2 Huespedes</MenuItem>
                <MenuItem value={3}>3 Huespedes</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Typography align="left" gutterBottom>Precio por noche: ${props.precio} </Typography>
            <Typography align="left" gutterBottom>Cantidad de noches: {noches(props.CheckIn,props.CheckOut)}</Typography>
            <Typography align="left" gutterBottom>Total: ${noches(props.CheckIn,props.CheckOut)*parseInt(props.precio)}</Typography>
          </Grid>
        </Grid>



      </Grid>
    </React.Fragment>
  );
}