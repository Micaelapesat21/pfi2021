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


  return (
    <div className={classes.root}>
      <Grid container direction="row" >
        <Grid item xs={12} md={6}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Bebida de bienvenida</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="primary" checked={props.aguaFria} onChange={props.handleBebida} name="aguaFria" />}
                label="Agua fria"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={props.champagne} onChange={props.handleBebida} name="champagne" />}
                label="Champagne"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={props.gaseosa} onChange={props.handleBebida} name="gaseosa" />}
                label="Gaseosa"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={props.vino} onChange={props.handleBebida} name="vino" />}
                label="Vino"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={props.sinseleccionarB} onChange={props.handleBebida} name="sinseleccionarB" />}
                label="Sin Seleccionar"
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
                control={<Checkbox color="primary" checked={props.chocolates} onChange={props.handleAcompañamiento} name="chocolates" />}
                label="Chocolates"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={props.golosinas} onChange={props.handleAcompañamiento} name="golosinas" />}
                label="Golosinas"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={props.fiambres} onChange={props.handleAcompañamiento} name="fiambres" />}
                label="Tabla de fiambres"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={props.pasteleria} onChange={props.handleAcompañamiento} name="pasteleria" />}
                label="Pasteleria"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={props.sinseleccionarA} onChange={props.handleAcompañamiento} name="sinseleccionarA" />}
                label="Sin Seleccionar"
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>



    </div>
  );
}