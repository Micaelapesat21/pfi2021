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

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    aguaFria: false,
    champagne: false,
    gaseosa: false,
    vino: false,
    chocolates:false,
    golosinas:false,
    fiambres:false,
    pasteleria:false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { aguaFria, champagne, gaseosa, vino,chocolates,golosinas,fiambres,pasteleria } = state;


  return (
    <div className={classes.root}>
      <Grid container direction="row" >
        <Grid item xs={12} md={6}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Bebida de bienvenida</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="primary" checked={aguaFria} onChange={handleChange} name="aguaFria" />}
                label="Agua fria"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={champagne} onChange={handleChange} name="champagne" />}
                label="Champagne"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={gaseosa} onChange={handleChange} name="gaseosa" />}
                label="Gaseosa"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={vino} onChange={handleChange} name="vino" />}
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
                control={<Checkbox color="primary" checked={chocolates} onChange={handleChange} name="chocolates" />}
                label="Chocolates"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={golosinas} onChange={handleChange} name="golosinas" />}
                label="Golosinas"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={fiambres} onChange={handleChange} name="fiambres" />}
                label="Tabla de fiambres"
              />
              <FormControlLabel
                control={<Checkbox color="primary" checked={pasteleria} onChange={handleChange} name="pasteleria" />}
                label="Pasteleria"
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>



    </div>
  );
}