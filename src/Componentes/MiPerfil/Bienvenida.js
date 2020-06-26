import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
}));

export default function Bienvenida(props) {
  const classes = useStyles();
  const setBienvenida=props.setBienvenida
  const bienvenida=props.bienvenida

  const handleChange = (event) => {
    setBienvenida({ ...props.bienvenida, [event.target.name]: event.target.checked, elegido:event.target.name });
  };

  


  return (
    <div className={classes.root}>
      <Grid container direction="row" >
        <Grid item xs={12} md={6}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Bebida de bienvenida</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="primary" checked={bienvenida.aguaFria} onChange={handleChange} name="aguaFria" />}
                label="Agua fria"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={bienvenida.champagne} onChange={handleChange} name="champagne" />}
                label="Champagne"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={bienvenida.gaseosa} onChange={handleChange} name="gaseosa" />}
                label="Gaseosa"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={bienvenida.vino} onChange={handleChange} name="vino" />}
                label="Vino"
              />
            </FormGroup>
            <FormHelperText>*Sujeto a disponibilidad del Hotel </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Acompañamiento</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="primary" checked={bienvenida.chocolates} onChange={handleChange} name="chocolates" />}
                label="Chocolates"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={bienvenida.golosinas} onChange={handleChange} name="golosinas" />}
                label="Golosinas"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={bienvenida.fiambres} onChange={handleChange} name="fiambres" />}
                label="Tabla de fiambres"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={bienvenida.pasteleria} onChange={handleChange} name="pasteleria" />}
                label="Pasteleria"
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>



    </div>
  );
}